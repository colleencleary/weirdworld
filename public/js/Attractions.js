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

  deleteAttraction(attraction, index){
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

  getAttraction(attraction){
    this.setState({
      attraction: attraction
    })
  }

  componentDidMount(){
    this.getattractions();
  }

  getattractions(){
    fetch('/attractions')
      .then(response => response.json())
      .then(data => {
        this.setState({
          attractions: data
        })
      }).catch(error => console.log(error))
  }

  toggleState(state1, state2){
    this.setState({
      [state1]: !this.state[state1],
      [state2]: !this.state[state2]
    })
  }

  render(){
    return (
        <h2> attractions </h2>
        { this.state.attractionListIsVisible ?
          <button onClick={()=>this.toggleState("addattractionIsVisible", "attractionListIsVisible")}>Add a attraction</button>
          : ''
        }
        { this.state.attractionListIsVisible ?
          <attractionList
            toggleState={this.toggleState}
            attractions={this.state.attractions}
            getattraction={this.getattraction}
            deleteattraction={this.deleteattraction}
          /> : ''}
        { this.state.addattractionIsVisible ?
          <attractionForm
            toggleState={this.toggleState}
          /> : ''}
        { this.state.attractionIsVisible ?
          <attraction
            toggleState={this.toggleState}
            attraction={this.state.attraction}
          /> : ''}
      </div>
    )
  }
}
