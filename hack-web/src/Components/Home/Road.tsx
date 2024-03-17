import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Road = () => {
  return (
    <Container>
        <p>
        <TypeIt
        options={{
            strings: [`The roadmap for web development can vary depending on what area you want to specialize in, but generally, it involves:<br/><br/>

            1. Learning the Fundamentals:<br/><br/>
            
            HTML, CSS, and JavaScript:<br/>These are the foundational languages for building web pages. HTML provides structure, CSS styles the look and feel, and JavaScript adds interactivity.<br/>
            Understanding Web Technologies:<br/>Get familiar with how the web works, including things like HTTP requests, browsers, and web servers.<br/>
            
            2. Choosing a Path:
            
            Front-End Development:<br/>Focuses on the visual aspects and user experience of a website. You'll delve deeper into CSS frameworks like Bootstrap or Tailwind CSS and JavaScript libraries like React or Angular.<br/>
            Back-End Development:<br/>Deals with the server-side logic and functionalities of a web application. This involves learning a server-side programming language like Python, Java, or Node.js, and understanding databases like SQL or NoSQL.<br/>
            Full-Stack Development:<br/>Involves both front-end and back-end development, allowing you to build entire web applications.<br/>
            
            3. Additional Skills:
            
            Version Control Systems (Git):<br/>Learn how to track code changes and collaborate with others. <br/>
            Testing and Debugging:<br/> Ensure your code functions as expected and identify and fix errors.<br/>
            Deployment:<br/>Understand how to publish your website or web application online.<br/>
            
            Resources:
            
            There are many resources available to help you on your web development journey. Here are a few to get you started:
            
            Online Roadmaps:<br/>Websites like offer interactive roadmaps that you can customize based on your goals.<br/>
            Online Courses:<br/>Platforms like Coursera, edX, and Udemy offer a wide range of web development courses for beginners and experienced developers alike.<br/>
            Books and Tutorials:<br/>Many great books and tutorials are available to learn specific technologies and concepts.<br/>
            
            Remember, consistent practice is key to mastering web development. Start with small projects and gradually build your skills and portfolio.`],
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

export default Road
