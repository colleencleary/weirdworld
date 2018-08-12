class App extends React.Component {
  render(){
    return (
      <div>
      <h1> Weird World </h1>
        <Attractions />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
);
