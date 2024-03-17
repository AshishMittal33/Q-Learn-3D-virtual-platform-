import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Tool = () => {

  return (
    <Container>
        <p>
`<br/>Here's a roadmap to get you started on your machine learning journey:<br/>

            <br/>1. Grasp the Fundamentals:<br/>
            
            <br/>Understand the core concepts:<br/> Get a basic idea of what machine learning is, the different types of problems it can solve (classification, regression, etc.), and the machine learning workflow (data collection, preparation, model building, evaluation). You can find resources like [https://www.youtube.com/watch?v=NWONeJKn6kc](https://www.youtube.com/watch?v=NWONeJKn6kc) or articles online.
            
            <br/>2. Learn Python:<br/>
            
            <br/>Python is the go-to language for machine learning.<br/> It's easy to learn, has great libraries, and is widely used in the field. Start with basic Python syntax, data structures, and control flow. Many online courses and tutorials are available to get you started.
            
            <br/>3. Strengthen Your Math Skills:<br/>
            
            <br/>Brush up on your math, particularly linear algebra, statistics, and calculus.<br/> These are essential for understanding the algorithms behind machine learning. There are many online resources like Khan Academy that provide a solid foundation in these areas. 
            
            <br/>4. Dive into Machine Learning Libraries:<br/>
            
            <br/>Libraries like scikit-learn and TensorFlow<br/> are powerful tools for building and deploying machine learning models in Python. Learn how to use these libraries for data manipulation, model training, and evaluation.
            
            <br/>5. Explore Core ML Algorithms:<br/>
            
            <br/>Get familiar with fundamental machine learning algorithms<br/> like linear regression, decision trees, and k-nearest neighbors. Scikit-learn provides implementations of these algorithms, allowing you to experiment and understand their inner workings.
            
            <br/>6. Practice and Experiment:<br/>
            
            <br/>The best way to learn is by doing.<br/> Find beginner-friendly machine learning projects and datasets to practice your skills. Kaggle is a great platform to find datasets and compete in machine learning challenges.
            
            <br/>7. Deepen Your Knowledge (Optional):<br/>
            
            * As you progress, explore advanced topics like deep learning, natural language processing, and computer vision. These areas require more specialized libraries and techniques but open doors to exciting applications.
            
            <br/>8. Stay Updated:<br/>
            
            <br/>Machine learning is a rapidly evolving field.<br/> Stay updated with the latest advancements and research by following blogs, attending conferences, and participating in online communities.
            
            <br/>Remember, this is a roadmap, not a rigid schedule.  Feel free to adjust the pace and delve deeper into areas that pique your interest. There are many online resources, courses, and communities available to support you on your machine learning journey.`
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

export default Tool
