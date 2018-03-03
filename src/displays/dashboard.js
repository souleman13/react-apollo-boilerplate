import React, { Component } from 'react'

import {ClassButton} from '../components/buttons'

//display component ready for router
//it is common for displays to run queries (read data),
//less very rare for them run mutation (do something: ex. update, delete)
//displays trend to import components when they need work done
//this logic is opposite for components, which will query less often,
//however gating queries behind certain components
//rather than running larger queries on displays can improve performance

//recomended practice within this boilerplate is for
//the root tag of a displays render() to be a <main> tag. ex below
//this helps keep code semantic, readable, and not div overloaded

export default class extends Component {
    render() {
        return (
            <main>
                Dashboard
                <ClassButton message='Hello World' label='Click Me!' />
            </main>
        )
    }
}