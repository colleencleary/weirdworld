class EventForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      description: '',
      image: '',
      city: '',
      country: '',
      website: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.event){
      console.log(this.props.event);
      this.setState({
        name: this.props.event.name,
        description: this.props.event.description,
        image: this.props.event.image,
        city: this.props.event.city,
        country: this.props.event.country,
        website: this.props.event.website,
        id: this.props.event.id

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
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          <label for='name'>
            <span>Event Name</span>
          </label>
            <input type='text' id='name' onChange={this.handleChange} value={this.state.name}/>
            <br/>

          <label for='description'>
            <span>Description</span>
          </label>
            <input type='text' id='description' onChange={this.handleChange} value={this.state.description}/>
            <br/>

          <label for='submitted_by'>
            <span>Submitted By</span>
          </label>
            <input type='text' id='submitted_by' onChange={this.handleChange} value={this.state.submitted_by}/>
            <br/>

          <label for='image'>
            <span>Image</span>
          </label>
            <input type='text' id='image' onChange={this.handleChange} value={this.state.image}/>
            <br/>

          <label for='city'>
            <span>City</span>
          </label>
            <input type='text' id='city' onChange={this.handleChange} value={this.state.city}/>
            <br/>

          <label for='country'>
            <span>Country</span>
          </label>
            <input type='text' id='country' onChange={this.handleChange} value={this.state.country}/>
            <br/>

          <label for='website'>
            <span>Website</span>
          </label>
            <input type='text' id='website' onChange={this.handleChange} value={this.state.website}/>
            <br/>

            <input type='submit' value="Submit" />
                <button onClick={()=> this.props.toggleState("eventListIsVisible", "addEventIsVisible")} class="cancel-form">Cancel</button>
        </form>


      </div>
    )
  }
}
