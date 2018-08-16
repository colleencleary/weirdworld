
class Events extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      eventListIsVisible: true,
      addEventIsVisible: false,
      eventIsVisible: false,
      eventsIsVisible: false,
      events: [],
      event: {},
      tags: []
    }
    this.toggleState = this.toggleState.bind(this)
    this.toggleHome = this.toggleHome.bind(this)
    this.getEvent = this.getEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.toggleAddForm = this.toggleAddForm.bind(this)
    this.toggleEvents = this.toggleEvents.bind(this)

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
handleCreate (event) {
  console.log(event);

   const updatedEvents = this.state.events
   // event["tags"]= ARRAY + event["tags"]
   updatedEvents.unshift(event)
   this.setState({events: updatedEvents})

 }


//Handle Create Submit
  handleCreateSubmit(event){
    console.log('gets here');

    fetch('/events', {
      body: JSON.stringify(event),
      method: 'POST',
      headers: {
        'Accept':'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdEvent => {
        // console.log('created: ', createdEvent);
        console.log(createdEvent.json());
        return createdEvent.json()
      })
      .then(jsonEvent => {
        // console.log('json: ', jsonEvent);
        this.handleCreate(jsonEvent)
        this.toggleState('addEventIsVisible', 'eventListIsVisible')
      }).catch(error => console.log(error))
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
        }) //ends state
      })
      .then( location.reload())
    }


  //GET ONE
    getEvent(event){
      this.setState({event: event})
      console.log(event.tags);
    }

  //Get ALL eventS
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
        ['editEventIsVisible']: false,
        ['eventsIsVisible']: false,
      })
    }

    toggleAddForm(){
      this.setState({
        ['eventListIsVisible']: false,
        ['addEventIsVisible']: true,
        ['eventIsVisible']: false,
        ['editEventIsVisible']: false,
        ['eventsIsVisible']: false
      })
    }
    toggleEvents(){
      this.setState({
        ['eventsIsVisible']: true,
        ['eventListIsVisible']: false,
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
      <Header toggleState={this.toggleState} toggleHome={this.toggleHome} toggleAddForm={this.toggleAddForm}
      toggleEvents={this.toggleEvents}/>
      <div className="events-container">
        { this.state.eventListIsVisible ?
          <EventList
            toggleState={this.toggleState}
            events={this.state.events}
            getEvent={this.getEvent}
            deleteEvent={this.deleteEvent}
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
            deleteEvent={this.deleteEvent}
            toggleHome ={this.toggleHome}
          /> : ''}

          { this.state.eventsIsVisible ?
            <Events /> : ''}
      </div>
      <Footer />
      </div>
    )
  }
}
