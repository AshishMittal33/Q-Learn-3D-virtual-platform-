import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Tool = () => {

  return (
    <Container>
        <p>
        <TypeIt
        options={{
            strings: [`<br/>Web development tools, often shortened to "dev tools", are a collection of software that assist developers in building and maintaining websites. They differ from website builders and IDEs (Integrated Development Environments) because they focus on inspecting and modifying existing websites, rather than directly creating them from scratch.

            Here's a breakdown of the different categories of web development tools:
            
            <br/>Code Editors & Text Editors:<br/>These are essentially your workspace for writing code. Popular options include Visual Studio Code, Sublime Text, and Atom. Each editor offers features like syntax highlighting, auto-completion, and debugging capabilities to streamline the coding process.<br/>
            
            <br/>Browser Developer Tools:<br/>Every major web browser like Chrome, Firefox, Safari, and Edge has built-in dev tools. These provide functionalities like inspecting website elements, debugging JavaScript, and monitoring network performance.<br/>
            
            <br/>Front-End Frameworks:<br/>These are pre-written libraries that provide a foundation for building user interfaces (UI) faster and easier. Bootstrap and Tailwind CSS are popular frameworks that offer pre-built UI components and styling options.<br/>
            
            <br/>Back-End Frameworks:<br/> These frameworks provide a structure for developing the server-side functionality of web applications. Popular options include Django (Python), Ruby on Rails (Ruby), Laravel (PHP), and Express.js (JavaScript).<br/>
            
            <br/>Git & Version Control Systems:<br/> These tools help manage code changes and collaborate with other developers. Git is the most widely used version control system, with GitHub being a popular hosting platform for Git repositories.<br/>
            
            <br/>Web Design & Prototyping Tools:<br/> These tools allow you to visually design website layouts and user flows before diving into the code. Figma, Adobe XD, and Sketch are some popular options in this category.<br/>
            
            <br/>API & Testing Tools:<br/> Web applications often rely on APIs (Application Programming Interfaces) to communicate with other services. Tools like Postman help test and debug API calls. Additionally, testing tools ensure websites function as expected across different browsers and devices.<br/>
            
            I hope this gives you a comprehensive overview of the various tools web developers use to build and maintain websites!`],
            speed: 1,
            waitUntilVisible: true,
        }}
        />
</p>
    </Container>
  )
}

const Container = styled.div`
p{
    height: 80%;
    color: white;
}
font-size: .8rem;
padding: 1rem;
width: 75vw;
color: white;
height: 65vh;
background: rgba( 255, 129, 17, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
align-items: center;
flex-direction: row;
overflow-y: scroll;
`

export default Tool
