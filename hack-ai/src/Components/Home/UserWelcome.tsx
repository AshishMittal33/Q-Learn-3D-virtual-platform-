import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const UserWelcome = () => {

  return (
    <Container>
        <p>
<br/>ML, which stands for machine learning, is a field of artificial intelligence (AI) that focuses on developing algorithms that can learn from data and improve their performance on a specific task without being explicitly programmed.<br/>
            <br/>
            Imagine a program that can learn to identify spam emails by analyzing tons of emails and figuring out patterns that differentiate spam from real emails. That's machine learning in action.<br/>
            <br/>
            Here's a breakdown of what machine learning is about:<br/>
            <br/>
           <br/>Learning from data:<br/> ML algorithms are trained on large datasets of information. This data can be anything from text and images to numbers and sound. By analyzing the data, the algorithms discover patterns and relationships.<br/>
           <br/>Improving performance:<br/> As the algorithms process more data, they get better at recognizing patterns and making predictions. This is what allows them to perform tasks like spam filtering or image recognition more accurately over time.<br/>
           <br/>Minimal human intervention:<br/> Unlike traditional programming, where you have to write every single instruction, machine learning algorithms can learn on their own. You provide the data and the overall goal, and the algorithm figures out the specifics.<br/>
            
            Machine learning is used in a wide range of applications, including:
            
           <br/>Recommendation systems:<br/> Recommending products or services you might be interested in, like those suggested items on online shopping websites.<br/>
           <br/>Fraud detection:<br/> Identifying suspicious activity on financial accounts.<br/>
           <br/>Image and speech recognition:<br/> Powering features like facial recognition in photos or voice assistants on smartphones.<br/>
           <br/>Natural language processing:<br/> Enabling machines to understand and respond to human language.<br/>
            
           <br/>Machine learning is a rapidly evolving field with the potential to revolutionize many aspects of our lives.
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
background: rgba( 155, 99, 15, 0.75 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
align-items: center;
flex-direction: row;
overflow-y: scroll;
`

export default UserWelcome
