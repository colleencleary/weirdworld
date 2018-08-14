class App extends React.Component {
  render(){
    return (
      <div>
        <Attractions />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
);
