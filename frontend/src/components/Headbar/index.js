import "./_Headbar.scss";

function Headbar(props) {
    const { sectionTitle } = props;
    return (
        <div className="headbar-container">
            <h3>{sectionTitle || 'Section Title'}</h3>
        </div>
    )
}

export default Headbar;