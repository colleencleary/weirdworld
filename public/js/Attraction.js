class Attraction extends React.Component {
  render(){


      // console.log('*****',this.props.attraction.tags);
      let comments = this.props.attraction.comments
    return (
      <div className="detail-container">
        <div class="background">

          <p class="name">{this.props.attraction.name}</p>

          <h2 class="subtitle">{this.props.attraction.city}, {this.props.attraction.country}</h2>

          <p class="title"><a target="_blank" href={this.props.attraction.website}> {this.props.attraction.website}</a> | rating: {this.props.attraction.rating}</p>

          <p class="title">submitted by: {this.props.attraction.submitted_by}</p>

          <img src={this.props.attraction.image} alt={this.props.attraction.name} />

          <p class="description">{this.props.attraction.description}</p>

          <div class="tag-container">
          <p><span>Tags:</span></p>
          {this.props.attraction.tags.map((tag, index)=>{
            return (
              <p>
                  {tag.term}
              </p>
            )
          })}
          </div>

          <h4 className="edit-link" onClick={()=>{this.props.toggleState('editAttractionIsVisible', '')}}>edit tools</h4>
          </div>

          <div className="comments-container">
            <h2 class="subtitle">Comments</h2>
            {this.props.attraction.comments.map((comment, index)=>{
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

              <Comments attraction={this.props.attraction} />

            {/*<div className="comment-form">
              <form>
                <h4>Add A Comment</h4>
                Your Name: <input type="text" />
                <br />
                <br />
                <textarea rows="4" ></textarea>
                <br />
                <input type="submit" className= "comment-submit"/>
              </form>
            </div> */}

          </div>


          { this.props.editAttractionIsVisible ?
          <div className="modal-container">
            <div className="edit-modal">
              <div className="modal-form">
               <AttractionForm attraction={this.props.attraction} handleSubmit={this.props.handleSubmit}
               tags={this.props.tags}/>
               <p className="exit-button" onClick={()=>{this.props.toggleState('editAttractionIsVisible', '')}}>X</p>
              </div>
              <button className="attraction-delete"
                     onClick={()=>
                        {this.props.deleteAttraction(this.props.attraction,this.props.attraction.id)}}
               >delete this attraction</button>
            </div>
          </div> : ''}
      </div>
    )
  }
}
