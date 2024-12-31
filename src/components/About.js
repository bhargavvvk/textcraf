import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>About TextCraft</h2>
    <p>TextCraft is an interactive text utility tool designed to help users manipulate and analyze text effortlessly. Whether you are a student, writer, or developer, TextCraft simplifies common text operations with ease and efficiency.
    </p>

    <h3>Key Features:</h3>
    <p> 
    <strong>Text Manipulation: </strong>
    Convert text to uppercase or lowercase.
    Remove extra spaces or special characters.
    Clear text with a single click. <br />
    <strong>Real-Time Alerts:</strong>

Instant feedback with alert messages to confirm actions. <br />
<strong>Detailed Text Summary:</strong>

Displays word count, character count, special characters, and space count. <br />
<strong>Dark/Light Mode Toggle:</strong>

User-friendly theming options to suit your preferences. </p>
<p>
<h3>How It Works?</h3>
TextCraft leverages React for seamless UI interactions and uses modern JavaScript techniques to perform text operations efficiently.

Simply enter or paste your text into the input box and use the provided buttons to perform various transformations. The live summary updates as you type or modify the text.
</p>
<p>
    <h3>
    Why Use TextCraft?
    </h3>
<strong>Ease of Use: </strong>
Clean and intuitive interface. <br />
<strong>Customizable Theme: </strong>
 Switch between light and dark mode for a comfortable viewing experience.
 <br />
 <strong>Efficient Processing: </strong>
 Handle text-related tasks quickly and accurately. <br />
 <strong>Technology Stack:</strong>

Frontend: React,
Libraries Used: React Router for navigation, Bootstrap for responsive styling.
</p>
<p>
    <h3>
    Get Started:
    </h3>

Visit the <Link to="/">Home</Link> page to begin crafting your text or learn more about the features here on the About page.
</p>
    </div>    
    </>
  )
}

export default About
