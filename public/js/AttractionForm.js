class AttractionForm extends React.Component {
  render(){
    return (

        <form>
          <label for='name'>Attraction Name</label>
            <input type='text'/>

          <label for='description'>Description</label>
            <input type='text'/>

          <label for='submitted_by'>Submitted By</label>
            <input type='text'/>

          <label for='image'>Image</label>
            <input type='text'/>

          <label for='city'>City</label>
            <input type='text'/>

          <label for='country'>Country</label>
            <input type='text'/>

          <label for='website'>Website</label>
            <input type='text'/>

          <label for='tags'>Tags</label>
            <input type='text'/>

          <label for='rating'>Rating</label>
            <input type='text'/>

            <input type='submit' />
        </form>

        <button onClick={()=> this.props.toggleState("attractionListIsVisible", "addAttractionIsVisible")}>Cancel</button>
      </div>
    )
  }
}
