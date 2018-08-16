class Event extends React.Component {
  render(){

    return (
      <div className="event-container">
        <div className="background">

          <p className="name">{this.props.event.name}</p>

          <h2 className="subtitle">{this.props.event.city}, {this.props.event.country}</h2>

          <p className="title"><a target="_blank" href={this.props.event.website}> 
          <p className="title">submitted by: {this.props.event.submitted_by}</p>

          <img src={this.props.event.image} alt={this.props.event.name} />

          <p className="description">{this.props.event.description}</p>

          <div className="tag-container">
          <p><span>Tags:</span></p>
          {this.props.event.tags.map((tag, index)=>{
            return (
              <p>
                  {tag.term}
              </p>
            )
          })}
          </div>

          <h4 className="edit-link" onClick={()=>{this.props.toggleState('editEventIsVisible', '')}}>edit tools</h4>
          </div>

          <div className="comments-container">
            <h2 class="subtitle">Comments</h2>
            {this.props.event.comments.map((comment, index)=>{
              return (
                <div className="comment-line">
                  <div className="narrow-column">
                    {comment.commented_by}
                  </div>
                  <div className="wide-column">
                    {comment.content}
                  </div>
                </div>
              )
            })}

          </div>
      </div>
    )
  }
}
