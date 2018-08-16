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
      tags: [],
      checkboxState: true
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
    // console.log(this.state[event.target.id])
  }

  handleSubmit(event){
    // event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
  }

  onChange(e) {
    // current array of tags
    const tags = this.state.tags
    let index

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to tags array
      tags.push(+e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = tags.indexOf(+e.target.value)
      tags.splice(index, 1)
    }

    // update the state with the new array of tags
    this.setState({ tags: tags })
    console.log(this.state.tags);
  }


  render(){
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          <label for='name'>
            <span>Attraction Name</span>
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

          <div>
            <fieldset>
              <legend>
                <span>Tags</span>
              </legend>

              {this.props.tags.map((tag,index) => {
                return(
                  <div className='inline-tag'>
                    <input
                      type="checkbox"
                      value={tag.id}
                      name={tag.term}
                      id='tags'
                      onClick={this.toggle.bind(this)} onChange={this.onChange.bind(this)}
                    />
                    <label for='tags'>{tag.term}</label>
                  </div>
                )}
              )}
            </fieldset>
          </div>

            <div className="button-container">
              <input type='submit' value="Submit" />
              <button onClick={()=> this.props.toggleState("attractionListIsVisible", "addAttractionIsVisible")} class="cancel-form">Cancel</button>
            </div>
        </form>

      </div>
    )
  }
}
