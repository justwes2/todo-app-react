import React, { Component } from 'react'
import "./Todo.css"

const allItems = []
allItems.push("Buy ingredients for Crock Pot");
allItems.push("Pick up chair at IKEA");
allItems.push("Go see mom");

class Todo extends Component {
  constructor(props) {
    super(props)
    this.addEvent = this.addEvent.bind(this)
  }
  getInitialState() {
    return { allItems }
  }
  render() {
    const items = this.props.items.map((item) => {
      return <li><TodoItem item={item} /></li>
    })
    return(
      <div>
        <ul>{items}</ul>
        <p><NewTodoItem addEvent={this.addEvent} /></p>
      </div>
    )
  }
  addEvent(todoItem){
    allItems.push(todoItem.newItem)
    this.setState({ allItems })
  }
}

class TodoItem extends Component {
  render() {
    return <div>{this.props.item}</div>
  }
}

class NewTodoItem extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    React.findDOMNode(this.refs.itemName).focus()
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref="itmeName" type="text" />
      </form>)
  }
  onSubmit(event){
    event.preventDefault()
    let input = React.findDOMNode(this.refs.itemName)
    let newItem = input.value
    this.props.addEvent({ newItem })
    input.value = ''
  }
}

React.render(<TodoList items={allItems} />, document.getElementById('root'))


// Tutorial at "https://gist.github.com/caike/736d45e44fa5c7595adb"
