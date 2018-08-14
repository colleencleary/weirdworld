class AttractionForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      description: '',
      submitted_by: '',
      image: '',
      city: '',
      country: '',
      website: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.attraction){
      console.log(this.props.attraction);
      this.setState({
        name: this.props.attraction.name,
        description: this.props.attraction.description,
        submitted_by: this.props.attraction.submitted_by,
        image: this.props.attraction.image,
        city: this.props.attraction.city,
        country: this.props.attraction.country,
        website: this.props.attraction.website,
        id: this.props.attraction.id

      })
    }
  }
  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
    console.log(this.state[event.target.id])
  }

  handleSubmit(event){
    // event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for='name'>Attraction Name</label>
            <input type='text' id='name' onChange={this.handleChange} value={this.state.name}/>
            <br/>
          <label for='description'>Description</label>
            <input type='text' id='description' onChange={this.handleChange} value={this.state.description}/>
            <br/>
          <label for='submitted_by'>Submitted By</label>
            <input type='text' id='submitted_by' onChange={this.handleChange} value={this.state.submitted_by}/>
            <br/>
          <label for='image'>Image</label>
            <input type='text' id='image' onChange={this.handleChange} value={this.state.image}/>
            <br/>
          <label for='city'>City</label>
            <input type='text' id='city' onChange={this.handleChange} value={this.state.city}/>
            <br/>
          <label for='country'>Country</label>
            <input type='text' id='country' onChange={this.handleChange} value={this.state.country}/>
            <br/>
          <label for='website'>Website</label>
            <input type='text' id='website' onChange={this.handleChange} value={this.state.website}/>
            <br/>
            <input type='submit' />
        </form>

        <button onClick={()=> this.props.toggleState("attractionListIsVisible", "addAttractionIsVisible")}>Cancel</button>
      </div>
    )
  }
}
