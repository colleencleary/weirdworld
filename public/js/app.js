class App extends React.Component {
  render(){
    return (
      <div>
      <header>
        <h1>Weird World</h1>
        <h2>for the unconventional traveler</h2>
        <nav>
          <ul>
            <li>UNUSUAL ATTRACTIONS</li>
            <li>WEIRD EVENTS</li>
            <li>TRAVELER LOG</li>
          </ul>
        </nav>
      </header>
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
