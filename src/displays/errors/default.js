import React, {Component} from 'react'

//basic display component to use when an error occurs on screen
//create more files in this directory or more class/const in this file
//to create more components to respond with for different errors.
//ex. you may have a specific errors for 404 or 500 responses, but not always

export default class extends Component {
    render(){
        return (
            <main>
                Sorry, there was an error processing your request!
            </main>
        )
    }
}