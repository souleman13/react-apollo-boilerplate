import React, {Component} from 'react'

//basic display component to use when an error occurs on screen
//create more files in this directory or more class/const in this file
//to create more components to respond with for different errors.

export default class extends Component {
    render(){
        return (
            <main>
                Sorry, there was an error processing your request!
            </main>
        )
    }
}