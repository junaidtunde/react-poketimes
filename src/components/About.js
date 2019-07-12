import React from 'react'
import Rainbow from './../hoc/Rainbow';

function About() {
    return (
        <div className="container">
            <h3 className="center">About</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum a unde sequi neque, libero repellat quas, animi totam voluptates sapiente, eveniet maxime in est dicta ipsa inventore dolorem hic dignissimos!</p>
        </div>
    )
}

export default Rainbow(About)