# finance-tracker
Personal project building my own API using a Python/Flask backend and connecting it to a React frontend to use in order to track and organize my monthly finances

## Organization
The code is broken up into two simple directories - _flask-server_ being the backend and _frontend_ being the React frontend. 
Simple commands such as **flask run** and **npm start** will spin up each respective portion of the project.

## API Structure
The backend accepts and creates responses with the following structure:

```
{
  id: Integer (Unique identifier of each created response),
  category: String (Something to categorize the expense under i.e. food, constant, miscellaneous, etc.),
  cost: Float,
  date: myDateTime (Custom Python class of Datetime to store the value in YYYY-MM-DD),
  description: String
}
```

## Visual
Below is a very simple screenshot of what the dashboard looks like to display and add values to a sheet:

<img width="1612" alt="finance_app_screenshot" src="https://github.com/isaq98/finance-tracker/assets/35785935/7666b3de-d418-4640-a5d2-36de905ed18c">
