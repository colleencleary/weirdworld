class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      comment: '',
      username: '',
      attraction_id: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(event){
    console.log('handleChange');
    this.setState({[event.target.id]: event.target.value})
    console.log(this.state[event.target.id])
  }

  handleSubmit(event){
    console.log('handleSubmit');
    event.preventDefault();
    this.props.handleSubmit(this.state)
  }

  render(){
    //console.log('*****',this.props.attraction);
    console.log('%%%%%', this.state.comment);
    console.log('~~~~~~~', this.state.submitted_by);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for='comment'>Comment</label>
            <input
              type='text'
              id='comment'
              onChange={this.handleChange} value={this.state.comment}/>
            <br/>
          <label for='submitted_by'>Submitted By</label>
            <input
              type='text'
              id='submitted_by'
              onChange={this.handleChange} value={this.state.submitted_by}/>
            <br/>
          <label for='attraction_id' className="see-attraction-id">attraction_id</label>
            <input
              type='text'
              id ='attraction_id'
              onChange={this.handleChange} value={this.props.attraction.id}
              className="see-attraction-id"
            />
            <br/>
            <input type='submit' />
        </form>


      </div>
    )
  }
}
