class Comment extends React.Component {
  render(){

    return (
      <div>
      <button onClick={()=> this.props.toggleState("commentListIsVisible", "commentIsVisible")}>See All Comments</button>

          <p><span>Content:</span> {this.props.comment.content}</p>
          <p><span>Submitted By:</span> {this.props.comment.username}</p>

          <div>
            <h4> Edit </h4>
            <CommentForm comment ={this.props.comment} handleSubmit={this.props.handleSubmit}/>
          </div>


      </div>

    )
  }
}
