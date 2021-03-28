import React from 'react'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Link} from 'react-router-dom'

import './About.css'

function About() {
    return (
        <div className='About'>
            <h2 className='title'>About</h2> <br/>
            <p className=''>Welcome,<br/>  
                In this page you can find cooking recipes from any ingredients, <br/>
                just type in the bar the ingredient and click Submit.
                <br/>
                <br/>
                <br/>
                Enjoy.
                
            </p>
            <Button component={Link} to="/">Go home</Button>
        </div>
    )
}

export default About
