import React, {Component} from 'react'
//example file to store button components
//dont be afraid to put multiple exported consts or classes here

export const SubmitButton = (label) => (<button type='submit'>{label}</button>)

//class usually do something more intense like open a popup
//and require a wrapping tag like a div
export class ClassButton extends Component {
    constructor(props){
        super(props)
        //this is the first place you have access to props given to your component
        //anything beginning with props you are expecting your
        // component to be given on call after import
        this.state = {
            message: props.message,
            label: props.label,
            open: false
        }
    }
    render(){
        const {message, label,open} = this.state

        return(
            <div>
                <button onClick={()=>this.setState({open:!open})}>{label}</button>
                {open?<p>{message}</p>:null}
            </div>
        )
    }
}