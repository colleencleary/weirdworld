class Event extends React.Component {
  render(){
      //console.log('*****',this.props.event);
    //   let comments = this.props.event.comments
    return (
      <div>
        <div class="background">

          <p class="name">{this.props.event.name}</p>

          <p class="title">{this.props.event.city}, {this.props.event.country}</p>

          <p class="title">{this.props.event.website}</p>

          <img src={this.props.event.image} alt={this.props.event.name} />

          <p class="title">{this.props.event.description}</p>

        </div>
          <div>
            <EventForm event={this.props.event} handleSubmit={this.props.handleSubmit}/>
          </div>
      </div>
    )
  }
}
