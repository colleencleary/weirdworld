class App extends React.Component {
  render(){
    return (
      <div>
        <Attractions />
        <Events />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
);
