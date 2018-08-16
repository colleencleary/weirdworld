class CommentList extends React.Component {
  render(){
    //console.log('$$$$$',this.props.comments, '$$$$$');
    let attractionID = this.props.attraction.id
      //console.log(attractionID);
    return (
      <div>
        <table>
          <tbody>
            {this.props.comments.map( (comment, index) => {
              //console.log(comment.attraction_id);

                if (Number(comment.attraction_id) === attractionID){
                  return (
                    <tr>
                      <td>
                        <p> {comment.username} </p>
                      </td>
                      <td>
                        <h3>{comment.content} </h3>
                      </td>
                    </tr>
                  )
                }
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
