class CommentList extends React.Component {
  render(){
    console.log('$$$$$',this.props.comments, '$$$$$');
    return (
      <div>
        <table>
          <tbody>
            {this.props.comments.map( (comment, index) => {
              return (
                <tr>
                  <td>
                    <h3>{comment.content} </h3>
                    <p> {comment.username} </p>
                    <p> {comment.attraction_id} </p>
                  </td>
                  <td>
                    <button
                    onClick={()=>{
                      this.props.toggleState("commentListIsVisible", "commentIsVisible");
                      this.props.getComment(comment)}}
                    >
                    Edit
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={()=>this.props.deleteComment(comment,index)}
                    >Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
