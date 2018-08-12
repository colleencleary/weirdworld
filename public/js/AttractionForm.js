class AttractionForm extends React.Component {
  render(){
    return (
      <div>
        <form>
          <label for='name'>Attraction Name</label>
            <input type='text'/>
            <br/>
          <label for='description'>Description</label>
            <input type='text'/>
            <br/>
          <label for='submitted_by'>Submitted By</label>
            <input type='text'/>
            <br/>
          <label for='image'>Image</label>
            <input type='text'/>
            <br/>
          <label for='city'>City</label>
            <input type='text'/>
            <br/>
          <label for='country'>Country</label>
            <input type='text'/>
            <br/>
          <label for='website'>Website</label>
            <input type='text'/>
            <br/>
          <label for='tags'>Tags</label>
            <input type='text'/>
            <br/>
          <label for='rating'>Rating</label>
            <input type='text'/>
            <br/>
            <input type='submit' />
        </form>

        <button onClick={()=> this.props.toggleState("attractionListIsVisible", "addAttractionIsVisible")}>Cancel</button>
      </div>
    )
  }
}
