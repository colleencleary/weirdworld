class Attraction extends React.Component {
  render(){
      //console.log('*****',this.props.attraction);
    return (
      <div>
      <button onClick={()=> this.props.toggleState("attractionListIsVisible", "attractionIsVisible")}>See All Attractions</button>

          <h3><span>Attraction Name:</span> {this.props.attraction.name}</h3>
          <p><span>Description:</span> {this.props.attraction.description}</p>
          <p><span>Submitted By:</span> {this.props.attraction.submitted_by}</p>
          <img src={this.props.attraction.image} alt={this.props.attraction.name} />
          <p><span>City:</span> {this.props.attraction.city}</p>
          <p><span>Country:</span> {this.props.attraction.country}</p>
          <p><span>Website:</span> {this.props.attraction.website}</p>
          <p><span>Tags:</span> {this.props.attraction.tags}</p>
          <p><span>Rating:</span> {this.props.attraction.rating}</p>

          <div>
            <AttractionForm attraction ={this.props.attraction} handleSubmit={this.props.handleSubmit}/>
          </div>
      </div>

    )
  }
}
