class Attraction extends React.Component {
  render(){
      //console.log('*****',this.props.attraction);
      let comments = this.props.attraction.comments
    return (
      <div>
      <button onClick={()=> this.props.toggleState("attractionListIsVisible", "attractionIsVisible")}>Back</button>

          <h3><span>Attraction Name:</span> {this.props.attraction.name}</h3>
          <p><span>Submitted By:</span> {this.props.attraction.submitted_by}</p>
          <p>{this.props.attraction.city}, {this.props.attraction.country}</p>
          <p><span>Website:</span> {this.props.attraction.website}</p>
          <p><span>Rating:</span> {this.props.attraction.rating}</p>

          <img src={this.props.attraction.image} alt={this.props.attraction.name} />
          <p><span>Description:</span> {this.props.attraction.description}</p>

          <p><span>Tags:</span> {this.props.attraction.tags}</p>
          <div>
             <p>Comments:{JSON.stringify(comments)}</p>
          </div>
          <div>
            <AttractionForm attraction={this.props.attraction} handleSubmit={this.props.handleSubmit}/>
          </div>

          <Comments />
      </div>
    )
  }
}
