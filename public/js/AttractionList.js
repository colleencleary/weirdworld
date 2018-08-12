class AttractionList extends React.Component {
  render(){
    //console.log('$$$$$',this.props.attractions);
    return (
      <div>
        <table>
          <tbody>
            {this.props.attractions.map( (attraction, index) => {
              return (
                <tr>
                  <td
                    onClick={()=>{
                      this.props.toggleState("attractionListIsVisible", "attractionIsVisible");
                      this.props.getAttraction(attraction)}}
                  >
                    <h3> {attraction.name} </h3>
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
      </div>
    )
  }
}
