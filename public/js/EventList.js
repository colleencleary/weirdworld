class EventList extends React.Component {
  render(){
    //console.log('$$$$$',this.props.events);
    return (
      <div className="list-container">
        {this.props.events.map( (event, index) => {
              return (
                <div className="event-div" onClick={()=>{
                  this.props.toggleState("eventListIsVisible", "eventIsVisible");
                  this.props.getEvent(event)}}>
                    <img src={event.image} alt={event.name} />
                    <h3> {event.name} </h3>
                    <h4> {event.city} </h4>
                </div>
              )
            })}
      </div>
    )
  }
}
