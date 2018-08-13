class Comments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      commentListIsVisible: true,
      addCommentIsVisible: false,
      commentIsVisible: false,
      editCommentIsVisible: false,
      comments: [],
      comment: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.getComments = this.getComments.bind(this)
    this.getComment = this.getComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }

//Did Mount
  componentDidMount(){
    this.getComments();
  }

//Handle Create
  handleCreate(comment){
    console.log('handle create');
    console.log([comment, ...this.state.comments])
    this.setState({comments:[comment, ...this.state.comments]})
  }
//Handle Create Submit
  handleCreateSubmit(comment){
    console.log('Create Submit Handled');
    fetch('/comments', {
      body: JSON.stringify(comment),
      method: 'POST',
      headers: {
        'Accept':'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdComment => {
        return createdComment.json()
      })
      .then(jsonComment => {
        this.handleCreate(jsonComment)
        this.toggleState('addCommentIsVisible', 'commentListIsVisible')
      }).catch(error => console.log(error))
  }
//Handle Update Submit
  handleUpdateSubmit(comment){
    console.log('Update Submit Handled');
    fetch('/comments/'+ comment.id, {
      body: JSON.stringify(comment),
      method: 'PUT',
      headers: {
        'Accept' : 'applications/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedComment =>{
      return updatedComment.json()
    })
    .then(jsonComment => {
      this.getComment()
      this.toggleState('commentListIsVisible', 'commentIsVisible')
    })
    .catch(error => console.log(error))
  }
//DELETE
  deleteComment(comment, index){
    //console.log('DELETE');
    fetch('/comments/' + comment.id,
    {
      method: 'DELETE'
    })
    .then(data => {
      this.setState({
        comments: [
          ...this.state.comments.slice(0, index),
          ...this.state.comments.slice(index + 1)
        ]
      })
    })
  }
//GET ONE
  getComment(comment){
    this.setState({
      comment: comment
    })
  }

//Get ALL
  getComments(){
    fetch('/comments')
      .then(response => response.json())
      .then(data => {
        this.setState({
          comments: data
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
    console.log('^^^^^',this.state.comments);
    return (
      <div>
        <h2> comments </h2>
        { this.state.commentListIsVisible ?
          <button
            onClick={()=>this.toggleState("addcommentIsVisible", "commentListIsVisible")}
          >Add a comment</button>
          : ''
        }

          <CommentList
            toggleState={this.toggleState}
            comments={this.state.comments}
            getComment={this.getComment}
            deleteComment={this.deleteComment}
          />

          <CommentForm
            toggleState={this.toggleState}
            handleCreate = {this.handleCreate}
            handleSubmit = {this.handleCreateSubmit}
          />

          <Comment
            toggleState={this.toggleState}
            getComment={this.getComment}
            comment={this.state.comment}
            handleSubmit = {this.handleUpdateSubmit}
          />

      </div>
    )
  }
}
