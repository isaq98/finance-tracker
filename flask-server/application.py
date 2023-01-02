from flask import Flask, request, current_app
from flask_sqlalchemy import SQLAlchemy
import datetime
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)

class Sheet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    month = db.Column(db.SmallInteger, nullable=False)
    year = db.Column(db.SmallInteger, nullable=False)

    def __repr__(self):
        return f"{self.month} - {self.year}"
# In order for our API to work, it needs to communicate with a database. This is where the SQLAlchemy ORM (Object Relational Mapper) comes into play
# Using the ORM, we define everything we want to store in the database as models.
#
# A model is used when creating new databases. It is a template that SQL looks at the content of to establish its default objects (i.e. tables, stored procedures, etc.)
#
class MyDateTime(db.TypeDecorator):
    impl = db.Date

    def process_bind_param(self, value, dialect):
        if type(value) is str:
            return datetime.datetime.strptime(value, '%Y-%m-%dT%H:%M:%S')
        return value

class Bill(db.Model):
    # We need to create columns within the database.
    # Ex:
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(60), nullable=False)
    cost = db.Column(db.Float, nullable=False)
    date = db.Column(MyDateTime, nullable=False)
    #date = db.Column(db.String(15), nullable=False)
    #date = db.Column(db.Date, nullable=False)
    description = db.Column(db.String(120), nullable=False)

    # This function is overwritten and it is shorthand for "Representation". Its purpose is to represent our object in a particular manner, which we define here
    # Ex:
    def __repr__(self):
        return f"{self.category} - {self.cost} - {self.date} - {self.description}"

@app.route('/')
def index():
    return 'Hello!'

@app.route('/bills')
def get_bills():
    bills = Bill.query.all()
    output = []
    for bill in bills:
        bill_data = {
            'category': bill.category, 
            'cost': bill.cost, 
            'date': bill.date, 
            'description': bill.description
            }
        output.append(bill_data)
    return {"Bills": output}

@app.route('/bills/<id>')
def get_individual_bill(id):
    bill = Bill.query.get_or_404(id)
    return {
        "Category": bill.category, 
        "Cost": bill.cost, 
        "Date": bill.date, 
        "Description": bill.description
        }

@app.route('/bills', methods=['POST'])
def add_bill():
    bill = Bill(category=request.json['category'], cost=request.json['cost'], date=request.json['date'], description=request.json['description'])
    db.session.add(bill)
    db.session.commit()
    return {'id': bill.id}

@app.route('/bills/<id>', methods=['DELETE'])
def delete_bill(id):
    bill = Bill.query.get(id)
    if bill is None:
        return {"Error": "Not found"}
    db.session.delete(bill)
    db.session.commit()
    return {"Message": "Bill was successfully deleted"}

@app.route('/bills/<id>', methods=['PUT'])
def update_bill(id):
    bills = Bill.query.get_or_404(id)
    category=request.json["category"]
    cost=request.json["cost"]
    date=request.json["date"]
    description=request.json["description"]
    
    bills.category=category
    bills.cost=cost
    bills.date=date
    bills.description=description

    db.session.commit()
    return{"Message": "Bill was successfully updated"}

@app.route('/sheets', methods=["POST"])
def createSheet():
    sheet = Sheet(month=request.json['month'], year=request.json['year'])
    db.session.add(sheet)
    db.session.commit()
    return {'id': sheet.id}
    
@app.route('/sheets')
def getAllSheets():
    sheets = Sheet.query.all()
    sheetOutput = []
    for sheet in sheets:
        sheet_data = {
            'month': sheet.month,
            'year': sheet.year
            }
        sheetOutput.append(sheet_data)
    return {'Sheets': sheetOutput}

@app.route('/sheets/<id>')
def get_individual_sheets(id):
    sheet = Sheet.query.get_or_404(id)
    return {
        "month": sheet.month,
        "year": sheet.year
    }

@app.route('/sheets/<id>', methods=["DELETE"])
def deleteSheet(id):
    sheet = Sheet.query.get(id)
    if sheet is None:
        return {"Error": "Not found"}
    db.session.delete(sheet)
    db.session.commit()
    return {"Message": "Sheet was successfully deleted"}