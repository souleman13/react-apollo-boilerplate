import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import {mutation1} from '../../services/mutation'

//basic form component for login screen display
//two inputs and submit, ready for hook-up to service

//it is common for components to run mutations (do something: ex. update, delete),
//less common for them to query (read or display something)
//this logic is this opposite for displays, which will almost never handle mutations

//recomended practice within this boilerplate is for
// the root tag of a components render() to be a <section> tag. ex below.
//this helps keep code semantic, readable, and not div overloaded

class LoginForm extends Component {
    constructor(props){
        super(props)
        //declare default form values here
        this.state = {
            email: '',
            pw: ''
        }
    }
    render() {
        return (
            <section>
                <form onSubmit={e => {
                    e.preventDefault()
                    //mutation call, declared in graphql() call below
                    this.props.mutate({
                        variables:{
                            user: this.state.email, 
                            pass: this.state.pw
                        }})
                }} >
                    <input type='text' placeholder='username' onChange={e => this.setState({user: e.target.value})} />
                    <input type='password' placeholder='pw' onChange={e => this.setState({pw: e.target.value})} />
                    <button type='submit' />
                </form>
            </section>
        )
    }
}
//mutations are mapped to this.props.mutate (called above) by default
//you must call this.props.mutate() and provide variables in order for it to run
//queries on the other hand run as soon as the page or component is called
//the syntax of the mutation is stored in a different file and imported to this one as 'mutation1'
export default graphql(mutation1)(LoginForm)