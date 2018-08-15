class Nav extends React.Component {
  render(){
    return (
      <nav>
        <ul className="nav-header">
          <div className="attractions-header">
            <li onClick={()=>this.props.toggleHome()}>UNUSUAL ATTRACTIONS</li>
            <div className="dropdown attractions-menu">
              <ul>
                <li onClick={()=>this.props.toggleHome()}>view all</li>
                <li onClick={()=>this.props.toggleAddForm()}>submit a new attraction</li>
              </ul>
            </div>
          </div>

          <div className="events-header">
            <li onClick={()=>this.props.toggleEvents()}>WEIRD EVENTS</li>
            <div className="dropdown-container">
              <ul className="dropdown events-menu">
                <li onClick={()=>this.props.toggleEvents()}>view all</li>
                <li>submit a new event</li>
              </ul>
            </div>
          </div>

          <div className="itinerary-header">
            <li>TRAVELER ITINERARY</li>
            <div className="dropdown itinerary-menu">
              <ul>
                <li>view</li>
                <li>create</li>
              </ul>
            </div>
          </div>
        </ul>
      </nav>
    )
  }
}
