class App extends React.Component {
  render(){
    return (
      <div className="section">
        <h1 className="title"> Weird World </h1>
        <div className="columns">
          <Attractions />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector(".container")
);
