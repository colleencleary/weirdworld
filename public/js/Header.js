class Header extends React.Component {
  render(){
    return (
      <header>
        <div className= "home-link" onClick={()=>{this.props.toggleHome()}}>
          <h1>Weird World</h1>
          <h2>for the unconventional traveler</h2>
        </div>
        <Nav toggleState={this.props.toggleState} toggleHome={this.props.toggleHome} toggleAddForm={this.props.toggleAddForm}/>
      </header>
    )
  }
}
