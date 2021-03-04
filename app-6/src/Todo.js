import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            myList: []
        }
        this.addToList = this.addToList.bind(this)
    }

    addToList() {
        this.setState({
            myList: [...this.state.myList, this.state.userInput],
            userInput: ''
        })
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    render() {
        let myList = this.state.myList.map((elem, index) => {
            return <Todo key={index} task={elem} />
        })

        return (

            <div>
                <h1>My to-do list:</h1>
                <input value={this.state.userInput}
                    placeholder='Enter new task'
                    onChange={(e) => this.handleChange(e.target.val)} />
                <button onClick={() => this.handleChange}>Add</button>
                {myList}
            </div>

        )
    }




}



export default Todo