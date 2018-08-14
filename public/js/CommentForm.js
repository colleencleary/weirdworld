class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      content: '',
      username: '',
      attraction_id: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.comment){
      this.setState({
        content: this.props.comment.content,
        username: this.props.comment.username,
        attraction_id: this.props.comment.attraction_id
      })
    }
  }
  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
    console.log(this.state[event.target.id])
  }

  handleSubmit(event){
    //event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for='comment'>Comment</label>
            <input
              type='text'
              id='comment'
              onChange={this.handleChange} value={this.state.content}/>
            <br/>
          <label for='submitted_by'>Submitted By</label>
            <input
              type='text'
              id='submitted_by'
              onChange={this.handleChange} value={this.state.submitted_by}/>
            <br/>
          <label for='attraction_id'>attraction_id</label>
            <input
              type='text'
              id ='attraction_id'
              onChange={this.handleChange} value={this.state.attraction_id}
            />
            <br/>
            <input type='submit' />
        </form>

        <button onClick={()=> this.props.toggleState("commentListIsVisible", "addCommentIsVisible")}>Cancel</button>
      </div>
    )
  }
}
