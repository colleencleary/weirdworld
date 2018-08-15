class Events extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      eventListIsVisible: true,
      addEventIsVisible: false,
      eventIsVisible: false,
      editEventIsVisible: false,
      events: [],
      event: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.toggleHome = this.toggleHome.bind(this)
    this.getEvent = this.getEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
    this.updateEvent = this.updateEvent.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)

  }

//Did Mount
  componentDidMount(){
    this.getEvents();
  }

  //DELETE
    deleteEvent(event, index){
      //console.log('DELETE');
      fetch('/events/' + event.id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          events: [
            ...this.state.events.slice(0, index),
            ...this.state.events.slice(index + 1)
          ]
        })
      })
    }

//Handle Create
handleCreate (person) {
   const updatedEvents = this.state.events
   updatedEvents.unshift(event)
   this.setState({events: updatedEvents})
 }


//Handle Create Submit
  handleCreateSubmit(event){
    fetch('/events', {
      body: JSON.stringify(event),
      method: 'POST',
      headers: {
        'Accept':'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdEvent => {
        return createdEvent.json()
      })
      .then(jsonEvent => {
        this.handleCreate(jsonEvent)
        this.toggleState('addEventIsVisible', 'eventListIsVisible')
      }).catch(error => console.log(error))
  }


//Handle Update Submit
  updateEvent(event){
    // console.log('Update Submit Handled');
    fetch('/events/'+ event.id, {
      body: JSON.stringify(event),
      method: 'PUT',
      headers: {
        'Accept' : 'applications/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedEvent =>{
      return updatedEvent.json()
    })
    .then(jsonEvent => {
      this.getEvent()
      this.toggleState('eventListIsVisible', 'eventIsVisible')
    })
    .catch(error => console.log(error))
  }

//DELETE
    deleteEvent(event, index){
      //console.log('DELETE');
      fetch('/events/' + event.id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          events: [
            ...this.state.events.slice(0, index),
            ...this.state.events.slice(index + 1)
          ]
        })
      })
    }


  //GET ONE
    getEvent(event){
      this.setState({event: event})
    }

  //Get ALL
    getEvents(){
      fetch('/events')
        .then(response => response.json())
        .then(data => {
          this.setState({
            events: data
          })
        }).catch(error => console.log(error))
    }

  //toggleState
    toggleState(state1, state2){
      this.setState({
        [state1]: !this.state[state1],
        [state2]: !this.state[state2]
      })
    }

    toggleHome(){
      this.setState({
        ['eventListIsVisible']: true,
        ['addEventIsVisible']: false,
        ['eventIsVisible']: false,
        ['editEventIsVisible']: false
      })
    }

  render(){
    //console.log('^^^^^',this.state.events);
    //console.log('@@@@@',this.state.event);
    return (
      <div>
      <Header toggleState={this.toggleState} toggleHome={this.toggleHome}/>
      <div className="events-container">
        { this.state.eventListIsVisible ?
          <EventList
            toggleState={this.toggleState}
            events={this.state.events}
            getEvent={this.getEvent}
            deleteevent={this.deleteEvent}
          /> : ''}
        { this.state.addEventIsVisible ?
          <EventForm
            toggleState={this.toggleState}
            handleCreate = {this.handleCreate}
            handleSubmit = {this.handleCreateSubmit}
          /> : ''}
        { this.state.eventIsVisible ?
          <Event
            toggleState={this.toggleState}
            event={this.state.event}
            handleSubmit = {this.updateEvent}
          /> : ''}

        </div>
      </div>
    )
  }
}
