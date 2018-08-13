class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <div className="attractions-container">
          <Attractions />
        </div>
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
);
