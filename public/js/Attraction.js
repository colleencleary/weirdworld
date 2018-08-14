class Attraction extends React.Component {
  render(){
      //console.log('*****',this.props.attraction);
      let comments = this.props.attraction.comments
    return (
      <div>
        <div class="background">

          <p class="name">{this.props.attraction.name}</p>

          <h2 class="subtitle">{this.props.attraction.city}, {this.props.attraction.country}</h2>

          <p class="title"><a target="_blank" href={this.props.attraction.website}> {this.props.attraction.website}</a> | rating: {this.props.attraction.rating}</p>

          <p class="title">submitted by: {this.props.attraction.submitted_by}</p>

          <img src={this.props.attraction.image} alt={this.props.attraction.name} />

          <p class="description">{this.props.attraction.description}</p>

          <p class="tag-container"><span>Tags:</span> {this.props.attraction.tags}</p>
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
