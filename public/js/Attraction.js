class Attraction extends React.Component {
  render(){
      //console.log('*****',this.props.attraction);
      let comments = this.props.attraction.comments
    return (
      <div>
        <div class="background">

          <p class="name">{this.props.attraction.name}</p>

          <p class="title">{this.props.attraction.city}, {this.props.attraction.country}</p>

          <p class="title">{this.props.attraction.website}</p>

          <p class="title"><span>Rating:</span> {this.props.attraction.rating}</p>

          <p class="title"><span>Submitted By:</span> {this.props.attraction.submitted_by}</p>

          <img src={this.props.attraction.image} alt={this.props.attraction.name} />

          <p class="title">{this.props.attraction.description}</p>

          <p class="title"><span>Tags:</span> {this.props.attraction.tags}</p>
          </div>

          <div>
             <p class="title">Comments:{JSON.stringify(comments)}</p>
          </div>
          <div>
            <AttractionForm attraction={this.props.attraction} handleSubmit={this.props.handleSubmit}/>
          </div>

          <Comments />
      </div>
    )
  }
}
