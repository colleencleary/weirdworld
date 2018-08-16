class EventList extends React.Component {
  render(){
    return (
      <div className="list-container">
        {this.props.events.map( (event, index) => {
              return (
                <div className="event-div" onClick={()=>{
                  this.props.toggleState("eventListIsVisible", "eventIsVisible");
                  this.props.getevent(event)}}>
                    <img src={event.image} alt={event.name} />
                    <h3> {event.name} </h3>

                </div>
              )
            })}
      </div>
    )
  }
}
