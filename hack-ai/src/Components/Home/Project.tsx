import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Project= () => {

    return (
        <Container>
            <p>
            here's a basic outline for a machine learning project:<br/>
                <br/>
                1. Problem Definition: Clearly define the problem you want to solve. For example, if you're working on a dataset of housing prices, your problem could be to predict the price of a house based on its features.<br/>
                <br/>
                2. Data Collection: Gather the necessary data for your project. This can be done through various sources such as online repositories, APIs, or manual collection.<br/>
                
                3. Data Preprocessing: Prepare your data for analysis. This involves tasks such as handling missing values, dealing with outliers, encoding categorical variables, and scaling features.<br/>
                
                4. Exploratory Data Analysis (EDA): Understand your data through visualization and statistical analysis. Explore relationships between variables, identify patterns, and gain insights that could inform your modeling choices.<br/>
                
                5. Feature Engineering: Create new features or transform existing ones to improve model performance. This might involve techniques like one-hot encoding, feature scaling, or dimensionality reduction.<br/>
                
                6. Model Selection: Choose appropriate machine learning algorithms for your problem. Consider factors such as the nature of the data, the size of the dataset, and the interpretability of the models.<br/>
                
                7. Model Training: Train your chosen models on the training data. Use techniques like cross-validation to tune hyperparameters and prevent overfitting.<br/>
                
                8. Model Evaluation: Evaluate the performance of your models using appropriate metrics. Common metrics for regression tasks include mean squared error (MSE) and R-squared.<br/>
                
                9. Model Deployment: Deploy your trained model into a production environment where it can be used to make predictions on new data. This might involve creating APIs, building web applications, or integrating with existing systems.<br/>
                
                10. Monitoring and Maintenance: Continuously monitor the performance of your deployed model and update it as needed. This could involve retraining the model with new data or fine-tuning its parameters.<br/>
                
                Here's a very basic example using Python and scikit-learn for a simple linear regression model to predict house prices:<br/>
                <br/>
                python<br/>
                # Import necessary libraries<br/>
                import pandas as pd<br/>
                from sklearn.model_selection import train_test_split<br/>
                from sklearn.linear_model import LinearRegression<br/>
                from sklearn.metrics import mean_squared_error<br/>
                <br/>
                # Load the dataset<br/>
                data = pd.read_csv('housing_data.csv')<br/>
                <br/>
                # Split data into features and target variable<br/>
                X = data.drop('Price', axis=1)<br/>
                y = data['Price']<br/>
                <br/>
                # Split data into training and testing sets<br/>
                X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)<br/>
                <br/>
                # Initialize linear regression model<br/>
                model = LinearRegression()<br/>
                <br/>
                # Train the model<br/>
                model.fit(X_train, y_train)<br/>
                <br/>
                # Make predictions on the testing set<br/>
                predictions = model.predict(X_test)<br/>
                <br/>
                # Evaluate the model<br/>
                mse = mean_squared_error(y_test, predictions)<br/>
                print('Mean Squared Error:', mse)<br/>
                <br/>
                This is a very basic example and can be expanded upon in many ways, such as using more sophisticated models, performing more in-depth data preprocessing, or incorporating advanced techniques like ensemble learning or neural networks.<br/>
                
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
export default Project
