import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const UserWelcome = () => {

  return (
    <Container>
        <p>
        <TypeIt
        options={{
            strings: [`Web development is essentially the process of building websites and web applications. It covers everything from the initial planning and design to the writing of code and putting the site up on the internet.<br/> 

            Here's a breakdown of what web development involves:<br/>
            
            * **Creating the visual elements:** This includes designing the layout, user interface, and overall look and feel of the website. While web design focuses on the aesthetics, web development translates those designs into code.<br/>
            * **Writing code:**  This involves writing markup and scripts to make the website function. Common languages used in web development include HTML, CSS, and JavaScript.<br/>
            * **Backend development:** This deals with the server-side of the website, the part users don't directly see. It involves things like storing data, handling user interactions, and ensuring the website functions properly.<br/>
            * **Content management:**  This involves adding, editing, and maintaining the content on the website.<br/>
            
            Web development is a broad field, and there are different specializations within it. Here are a couple of the most common ones:<br/>
            
            * **Front-end development:** This focuses on the user-facing part of the website, what users see and interact with directly.<br/>
            * **Back-end development:** This deals with the server-side of the website, the part that runs behind the scenes to make everything work.<br/>
            
            If you're interested in learning more about web development, there are many resources available online and in libraries. You can also find coding bootcamps and other courses that can teach you the skills you need to become a web developer.<br/>`],
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
`

export default UserWelcome
