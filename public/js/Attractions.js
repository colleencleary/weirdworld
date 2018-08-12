class Attractions extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attractionListIsVisible: true,
      addAttractionIsVisible: false,
      attractionIsVisible: false,
      editAttractionIsVisible: false,
      attractions: [],
      attraction: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.getAttractions = this.getAttractions.bind(this)
    this.getAttraction = this.getAttraction.bind(this)
    this.deleteAttraction = this.deleteAttraction.bind(this)
  }

//Did Mount
  componentDidMount(){
    this.getAttractions();
  }

//Handle Create
  handleCreate(attraction){
    console.log('handle create');
    console.log([attraction, ...this.state.attractions])
    this.setState({attractions:[attraction, ...this.state.attractions]})
  }
//Handle Create Submit
  handleCreateSubmit(attraction){
    console.log('Create Submit Handled');
    fetch('/attractions', {
      body: JSON.stringify(attraction),
      method: 'POST',
      headers: {
        'Accept':'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdAttraction => {
        return createdAttraction.json()
      })
      .then(jsonAttraction => {
        this.handleCreate(jsonAttraction)
        this.toggleState('addAttractionIsVisible', 'attractionListIsVisible')
      }).catch(error => console.log(error))
  }
//Handle Update Submit
  handleUpdateSubmit(attraction){
    console.log('Update Submit Handled');
    fetch('/attractions/'+ attraction.id, {
      body: JSON.stringify(attraction),
      method: 'PUT',
      headers: {
        'Accept' : 'applications/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedAttraction =>{
      return updatedAttraction.json()
    })
    .then(jsonAttraction => {
      this.getAttraction()
      this.toggleState('attractionListIsVisible', 'attractionIsVisible')
    })
    .catch(error => console.log(error))
  }
//DELETE
  deleteAttraction(attraction, index){
    //console.log('DELETE');
    fetch('/attractions/' + attraction.id,
    {
      method: 'DELETE'
    })
    .then(data => {
      this.setState({
        attractions: [
          ...this.state.attractions.slice(0, index),
          ...this.state.attractions.slice(index + 1)
        ]
      })
    })
  }
//GET ONE
  getAttraction(attraction){
    this.setState({
      attraction: attraction
    })
  }

//Get ALL
  getAttractions(){
    fetch('/attractions')
      .then(response => response.json())
      .then(data => {
        this.setState({
          attractions: data
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

  render(){
    //console.log('^^^^^',this.state.attractions);
    //console.log('@@@@@',this.state.attraction);
    return (
      <div>
        <h2> attractions </h2>
        { this.state.attractionListIsVisible ?
          <button onClick={()=>this.toggleState("addattractionIsVisible", "attractionListIsVisible")}>Add a attraction</button>
          : ''
        }
        { this.state.attractionListIsVisible ?
          <AttractionList
            toggleState={this.toggleState}
            attractions={this.state.attractions}
            getAttraction={this.getAttraction}
            deleteAttraction={this.deleteAttraction}
          /> : ''}
        { this.state.addattractionIsVisible ?
          <AttractionForm
            toggleState={this.toggleState}
            handleCreate = {this.handleCreate}
            handleSubmit = {this.handleCreateSubmit}
          /> : ''}
        { this.state.attractionIsVisible ?
          <Attraction
            toggleState={this.toggleState}
            getAttraction={this.getAttraction}
            attraction={this.state.attraction}
            handleSubmit = {this.handleUpdateSubmit}
          /> : ''}

      </div>
    )
  }
}
