import JsonForm from '@adrianhelvik/json-form'
import React, { Component } from 'react'
import * as types from './editors'
import './App.css'

const Form = JsonForm({
  types
})
const initialSchema = {
  author: 'string',
  articles: [{
    title: 'string',
    body: 'text',
    labels: ['string']
  }]
}

class App extends Component {
  state = {
    value: null,
    schema: initialSchema, 
    jsonSchema: JSON.stringify(initialSchema, null, 2),
    invalid: false,
  }

  setValue = value => {
    this.setState({ value })
  }

  updateJsonSchema = event => {
    try {
      this.setState({
        prevSchema: this.state.schema,
        schema: JSON.parse(event.target.value),
        invalid: false,
      })
    } catch (e) {
      this.setState({ invalid: true })
    }
    this.setState({
      jsonSchema: event.target.value,
    })
  }

  componentDidCatch() {
    this.setState({ schema: this.state.prevSchema })
  }

  inputStyle() {
    const style = {
      minHeight: 300
    }

    if (this.state.invalid) {
      style.outlineColor = 'yellow'
      style.borderColor = 'yellow'
    }

    return style
  }

  render() {
    return (
      <div className="App">
        <div>Available editors: {Object.keys(types).filter(t => ! t.startsWith('$')).join(', ')}</div>
        <textarea
          value={this.state.jsonSchema}
          onChange={this.updateJsonSchema}
          style={this.inputStyle()}
        />
        <Form
          schema={this.state.schema}
          value={this.state.value}
          onChange={this.setValue}
        />
      </div>
    );
  }
}

export default App;
