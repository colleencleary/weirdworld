class Attractions extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attractionListIsVisible: true,
      addAttractionIsVisible: false,
      attractionIsVisible: false,
      editAttractionIsVisible: false,
      attractions: [],
      attraction: {},
      tags: []
    }
    this.toggleState = this.toggleState.bind(this)
    this.toggleHome = this.toggleHome.bind(this)
    this.getAttraction = this.getAttraction.bind(this)
    this.deleteAttraction = this.deleteAttraction.bind(this)
    this.updateAttraction = this.updateAttraction.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.toggleAddForm = this.toggleAddForm.bind(this)

  }

//Did Mount
  componentDidMount(){
    this.getAttractions();
    this.getTags();
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
        }) //ends state
      })
      .then( location.reload())
    }


  //GET ONE
    getAttraction(attraction){
      this.setState({attraction: attraction})
    }

  //Get ALL ATTRACTIONS
    getAttractions(){
      fetch('/attractions')
        .then(response => response.json())
        .then(data => {
          this.setState({
            attractions: data
          })
        }).catch(error => console.log(error))
    }

  //Get ALL TAGS
    getTags(){
      fetch('/tags')
        .then(response => response.json())
        .then(data => {
          this.setState({
            tags: data
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

    toggleAddForm(){
      this.setState({
        ['attractionListIsVisible']: false,
        ['addAttractionIsVisible']: true,
        ['attractionIsVisible']: false,
        ['editAttractionIsVisible']: false
      })
    }

  render(){
    //console.log('^^^^^',this.state.attractions);
    //console.log('@@@@@',this.state.attraction);
    return (
      <div>
      <Header toggleState={this.toggleState} toggleHome={this.toggleHome} toggleAddForm={this.toggleAddForm}/>
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
            tags={this.state.tags}
          /> : ''}
        { this.state.attractionIsVisible ?
          <Attraction
            toggleState={this.toggleState}
            attraction={this.state.attraction}
            editAttractionIsVisible={this.state.editAttractionIsVisible}
            handleSubmit = {this.updateAttraction}
            deleteAttraction={this.deleteAttraction}
            toggleHome ={this.toggleHome}
          /> : ''}

      </div>
      <Footer />
      </div>
    )
  }
}
