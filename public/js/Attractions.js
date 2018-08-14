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
    this.toggleHome = this.toggleHome.bind(this)
    this.getAttraction = this.getAttraction.bind(this)
    this.deleteAttraction = this.deleteAttraction.bind(this)
<<<<<<< HEAD
=======
    this.updateAttraction = this.updateAttraction.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
>>>>>>> fe690212bbdf0361454055667003004095c01129
  }

//Did Mount
  componentDidMount(){
    this.getAttractions();
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

//Handle Create
handleCreate (person) {
   const updatedAttractions = this.state.attractions
   updatedAttractions.unshift(attraction)
   this.setState({attractions: updatedAttractions})
 }


//Handle Create Submit
  handleCreateSubmit(attraction){
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
  updateAttraction(attraction){
    // console.log('Update Submit Handled');
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

<<<<<<< HEAD




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

=======
>>>>>>> fe690212bbdf0361454055667003004095c01129
  //GET ONE
    getAttraction(attraction){
      this.setState({attraction: attraction})
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

    toggleHome(){
      this.setState({
        ['attractionListIsVisible']: true,
        ['addAttractionIsVisible']: false,
        ['attractionIsVisible']: false,
        ['editAttractionIsVisible']: false
      })
    }

  render(){
    //console.log('^^^^^',this.state.attractions);
    //console.log('@@@@@',this.state.attraction);
    return (
      <div>
      <Header toggleState={this.toggleState} toggleHome={this.toggleHome}/>
      <div className="attractions-container">
        { this.state.attractionListIsVisible ?
          <AttractionList
            toggleState={this.toggleState}
            attractions={this.state.attractions}
            getAttraction={this.getAttraction}
            deleteAttraction={this.deleteAttraction}
          /> : ''}
        { this.state.addAttractionIsVisible ?
          <AttractionForm
            toggleState={this.toggleState}
            handleCreate = {this.handleCreate}
            handleSubmit = {this.handleCreateSubmit}
          /> : ''}
        { this.state.attractionIsVisible ?
          <Attraction
            toggleState={this.toggleState}
            attraction={this.state.attraction}
            handleSubmit = {this.updateAttraction}
          /> : ''}

        </div>
      </div>
    )
  }
}
