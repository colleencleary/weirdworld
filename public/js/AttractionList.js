class AttractionList extends React.Component {
  render(){
    return (
      <table>
        <tbody>
          {this.props.attractions.map( (attraction, index) => {
            // console.log(attraction);
            return (
              <tr>
                <td
                  onClick={()=>{
                    this.props.toggleState("attractionListIsVisible", "attractionIsVisible");
                    this.props.getAttraction(attraction)}}
                >
                  <h3> {attraction.attraction_name} </h3>
                </td>
                <td>
                  <button>Edit</button>
                </td>

                <td>
                  <button
                    onClick={()=>this.props.deleteAttraction(attraction,index)}
                  >Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
