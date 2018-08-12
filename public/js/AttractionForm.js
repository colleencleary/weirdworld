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
      website: '',
      tags: {},
      rating: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.attraction){
      this.setState({
        name: this.props.attraction.name,
        description: this.props.attraction.decription,
        submitted_by: this.props.attraction.submitted_by,
        image: this.props.attraction.image,
        city: this.props.attraction.city,
        country: this.props.attraction.country,
        website: this.props.attraction.website,
        tags: this.props.attraction.tags,
        rating: this.props.attraction.rating,
        id: this.props.attraction.id

      })
    }
  }
  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
    console.log(this.state[event.target.id])
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render(){
    return (
      <div>
        <form>
          <label for='name'>Attraction Name</label>
            <input type='text'/>
            <br/>
          <label for='description'>Description</label>
            <input type='text'/>
            <br/>
          <label for='submitted_by'>Submitted By</label>
            <input type='text'/>
            <br/>
          <label for='image'>Image</label>
            <input type='text'/>
            <br/>
          <label for='city'>City</label>
            <input type='text'/>
            <br/>
          <label for='country'>Country</label>
            <input type='text'/>
            <br/>
          <label for='website'>Website</label>
            <input type='text'/>
            <br/>
          <label for='tags'>Tags</label>
            <input type='text'/>
            <br/>
          <label for='rating'>Rating</label>
            <input type='text'/>
            <br/>
            <input type='submit' />
        </form>

        <button onClick={()=> this.props.toggleState("attractionListIsVisible", "addAttractionIsVisible")}>Cancel</button>
      </div>
    )
  }
}
