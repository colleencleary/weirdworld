class AttractionList extends React.Component {
  render(){
    //console.log('$$$$$',this.props.attractions);
    return (
      <div className="list-container">
        {this.props.attractions.map( (attraction, index) => {
              return (
                <div className="attraction-div" onClick={()=>{
                  this.props.toggleState("attractionListIsVisible", "attractionIsVisible");
                  this.props.getAttraction(attraction)}}>
                    <img src={attraction.image} alt={attraction.name} />
                    <h3> {attraction.name} </h3>
                    <h4> {attraction.city} </h4>
                </div>
              )
            })}
      </div>
    )
  }
}
