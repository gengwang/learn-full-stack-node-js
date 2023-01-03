const App = ({ initialData }) => {
    console.log("initialData:", initialData);
    
    return <div className="container">
        <div>{initialData.predictions.data.predictions.person}</div>
    </div>
}

export default App;