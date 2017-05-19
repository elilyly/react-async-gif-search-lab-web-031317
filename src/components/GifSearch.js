import React from 'react'

class GifSearch extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)

    this.state = {
      content: ''
    }
  }

  handleInputChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  submit(event) {
    event.preventDefault()
    this.props.callback(this.state.content)
  }

  render() {
    return (
        <div className="col-md-4">
          <form onSubmit={this.submit.bind(this)}>
            <label> Enter Search Term: </label>&nbsp;<br/>
            <input type="text" value={this.state.content} onChange={this.handleInputChange}></input>
            <div>
              <input className="btn" type="submit"/>
            </div>
          </form>
        </div>

    )
  }
}

export default GifSearch
