---
layout: page
title: Christopher Dinh
subtitle: 
---
## Education
### University of California, Irvine
**Master of Computer Science** - GPA 3.97
Expected Graduation: December 2020

### University of Maryland - Baltimore County
**BS in Computer Science** - *Data Science Track*, Major GPA 4.0

**BS in Mathematics**, Major GPA 3.9

Graduated *magna cum laude* in Spring 2019 - Cumulative GPA 3.8

## Experience
### IBM Cloud Managed Application Services, Rochester, MN - Software Internship
#### Summer 2018
I enabled SAP build teams to track their progress and find bottlenecks by designing and implementing a Gantt chart visualization of the SAP build process using node.js, Javascript, d3.js, PUG, and CSS. Stored log data is read from a Java server and rendered using d3.js. Since there may be a large number of steps and some are automated while others are manual, I implemented custom zoom and pan functionality to allow the user to view subsets of the processes at varying timescales. As part of my internship, I learned Agile practices by participating in regular team meetings and frequently getting feedback from the people on my team who would be using the visualization I created.

##### Skills Learned
* Javascript
* d3.js
* node.js
* Agile

### UMBC Multi-Agent Planning and Learning Lab - Undergraduate Research
#### Fall 2017 - Spring 2018
I used Java to upgrade an AI hierarchical planning system to avoid unnecessary actions by adjusting to the environment in real time.

More specifically, I worked on the problem of replanning in a hierarchical planning framwork called an Abstract Markov Decision Process (AMDP). This framework simplifies tasks by splitting them up into subtasks that ignore parts of the state space. This allows the agent to make plans without needing to take unnecessary information into account. However, it makes replanning difficult because some state variables are ignored based on an expectation that they will be constant while the subtask is executed. The subtask should replan when that expectation is violated, but it doesnt't because it has ignored that part of the state. 

My solution was a "controller" that sees the whole state space and forces the agent to replan when it ignores any state change. While this solved the initial problem, there are other failure cases for AMDPs such as a failure to account for unexpected changes in state variables that the agent is aware of.

The codebases that I worked from:
* <a href="https://github.com/cqdinh/amdp-replanning">github.com/cqdinh/amdp-replanning</a>
* <a href="https://github.com/cqdinh/Maple-RAMDP">github.com/cqdinh/Maple-RAMDP</a>

#### Skills Learned
* Research
* Reinforcement Learning
* Planning
* Latex

### MantaroBot Corporation - Summer Internship
I interned at the MantaroBot Corporation in Germantown over the summers of 2014, 2015, 2016, and 2017.
#### Summer 2017
I designed and implemented a system enabling a robot to find and dock with its charging station from 7 feet away with an angular error of less than 10 degrees and a linear error of less than 3 inches.

First, I used OpenCV to find the robot's position relative to a marker placed on its charging dock. Based on this position, the robot can then dock itself for charging automatically by taking advantage of its Mecanum wheels to move sideways without losing sight of the dock so that adjustments can be made in real time. I used Python to prototype the marker detection algorithm and then used C# to integrate it into the existing Windows application and implement the program that maneuvers the robot to the dock.
##### Skills Learned
* OpenCV
* Computer Vision basics

#### Summer 2016
I worked on prototyping a system using infrared sensors and transmitters to allow a robot to dock itself into its charging station. I used Arduino to control the sensors and transmitters along with Python to record and analyze the data that were produced. The prototype system was found to only be effective at very short range, which made it unsuitable for a docking system.

Later, I implemented algorithms that minimize the stress placed on the joints of a robotic arm. There was an extra degree of freedom in the arm's movement, so I worked through the forwards kinematics and torque equations in order to determine how to position the arm given an endpoint to move to. However, based on a map of the stress on the arm that I created in MatPlotLib, I found that larger movements could not be performed reliably by moving in a straight line and a pathing algorithm was needed. In order to minimize the stress experienced throughout the path, I developed a system that determines what direction to move in at each step based on gradient descent. Both of these algorithms were prototyped in Python with NumPy and MatPlotLib and then implemented in C# as part of a Windows App that controls the robot.

##### Skills Learned
* C#
* Model-based Optimization

#### Summer 2015
I worked on using an Asus XTION to imitate LIDAR-based robotic wall detection and avoidance. I used Octave, a free equivalent to MatLab, as well as NumPy and MatPlotLib to analyze and visualize data that was collected from the sensor. In addition, I used NumPy and MatPlotlib to prototype the detection and avoidance algorithms. 

The final result was an algorithm that used covariance to cluster data points into groups that indicate the existence of a wall. Using these groups, least-squares regressions calculate the location of the wall that each group represents while reducing noise. Finally, the robot's movements are biased towards avoiding walls by finding the nearest wall and moving away from it if necessary and parallel to it otherwise.
##### Skills Learned
* Octave
* NumPy
* MatPlotLib
* Noise Reduction techniques
* Basic Clustering

#### Summer 2014
I reduced control latency for a telepresence robot by an average of 50% by implementing WebRTC as a communication protocol between the web-based <a href="http://www.mantarobot.com/telego/">controller</a> and an <a href="https://play.google.com/store/apps/details?id=com.mantaro.telemerobotappv3&hl=en">Android app</a> which relays received commands to the robot's motor controllers and other hardware.
##### Skills Learned
* HTML
* Javascript
* NodeJS
* Android Development Kit

## Projects
### Toxic Comment Classification
For my Deep Learning course project, I built a deep learning model in PyTorch that determines if an online comment is toxic according to 6 different labels. To perform the classification, I built a custom head on top of BERT that uses an attention mechanism to process comments longer than BERT's 512-token limit. The model was trained and deployed on a Google Cloud Compute instance using a custom model server that is accessed by a Streamlit.io app. After training, the model achieved an average AUC of 0.959 across the 6 toxicity labels.

#### Skills Learned
* HuggingFace's transformers library
* Kaggle API
* Streamlit.io
* Google Cloud Compute

### Homography Invariance of CapsNet vs CNN
For my Computer Vision course project, I implemented CapsNet and compared its homography invariance to that of a basic CNN with an architecture based on CapsNet but without the Capsules structure. I trained and evaluated both based on their classification accuracy on randomly tranformed logos as well as those logos placed on random backgrounds. After training both, I found that the CapsNet reached 73% accuracy on the logos without backgrounds while the CNN only managed 18%. 

#### Skills Learned
* PyTorch
* Capsule architecture

#### Repository: <a href="https://github.com/cqdinh/Pytorch-CapsNet">github.com/cqdinh/Pytorch-CapsNet</a>

### Inferring Ingredient Relationships from Recipes
For my Natural Language Processing course project, I used a recipe dataset to generate embeddings for ingredients. Just as a sentence can be seen as the context for a word, I used the recipes as contexts for the ingredients. As a baseline, I started with the co-occurrence matrix and then reduced its size with PCA. From there, I generated embeddings with a Continuous Bag-of-words model modified to use the entire ingredient list as context because the ingredient list doesn't have any meaningful order. 

#### Skills Learned
* PyTorch
* Word Embeddings

#### Repository: <a href="https://github.com/cqdinh/Ingredient_Embeddings">github.com/cqdinh/Ingredient_Embeddings</a>

#### Repository: <a href="http://github.com/cqdinh/toxic_comment_classification_274P">github.com/cqdinh/toxic_comment_classification_274P</a>
#### Kaggle: <a href="https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge/">Jigsaw Toxic Comment Classification</a>

### CycleGAN Implementation
I used <a href="https://hardikbansal.github.io/CycleGANBlog/">Hardik Bansal's tutorial</a> to implement the <a href="https://junyanz.github.io/CycleGAN/">CycleGAN</a> algorithm in Tensorflow. I tried to train a model using the sample dataset that would convert images of horses and zebras to each other, but while the cycle loss was effective at making the networks act as inverses of each other, the conversion from horse to zebra and vice versa was not successful.
#### Skills Learned
* Convolutional networks
* TensorBoard - Graph View
* Generative Adversarial Networks

#### Repository: <a href="https://github.com/cqdinh/TensorflowCycleGAN">github.com/cqdinh/TensorflowCycleGAN</a>


### Kaggle Competition: Corporación Favorita Grocery Sales Forecasting
For the Intro to Data Science class that I took in Fall 2017, I created a model for the <a href="https://www.kaggle.com/c/favorita-grocery-sales-forecasting">Corporación Favorita Grocery Sales Forecasting</a> that was evaluated to have an error of 1.067 as measured by <a href="https://www.kaggle.com/c/favorita-grocery-sales-forecasting#evaluation">Normalized Weighted Root Mean Squared Logarithmic Error</a>.

The competition's challenge is to forecast sales of individual products given past sales data. The main challenge that I found in this challenge was to manipulate the data into a form that could be processed in reasonable time. Because there was so much data, I had to essentially discard some of the information provided as part of the challenge. As a result, my model was not nearly as accurate as it could have been.
#### Skills Learned
* Pandas
* Scikit-Learn
* Data Cleaning
* Sampling

#### Repository: <a href="https://github.com/cqdinh/kaggle_corporacion_favorita">github.com/cqdinh/kaggle_corporacion_favorita</a>

### Sequence Generator
A TensorFlow-based LSTM model that can be used to mimic a sequence of any form with a common input/output method for all data types.
In essence, this is Andrej Karpathy's well-known char-rnn, modified to allow non-character inputs. 
The RNN implementation is based on <a href="https://github.com/sherjilozair/char-rnn-tensorflow">char-rnn-tensorflow</a>, but packaged into a class and modified to allow the usage of any sequence of values that can be converted into integers.
This implementation uses a modified LSTM class from TensorFlow to output the trained model in a simple text format, making cross-platform usage of the model simpler.

I trained a model on the collected works of Shakespeare and I have a demo of it <a href="https://cqdinh.github.io/projects/sequence_generator/">here</a>.
#### Skills Learned
* Tensorflow
* LSTM architecture

#### Repository: <a href="https://github.com/cqdinh/SequenceGenerator">github.com/cqdinh/SequenceGenerator</a>

### Health Professional Time Scheduling
For my Software Engineering course, I worked in a team of 5 to develop a desktop application that generates a shift schedule for doctors and nurses subject to various constraints. The Frontend GUI is built in Electron and Vue and when generating the schedule, it calls a Java backend that uses Optaplanner to generate the schedule.

#### Skills Learned
* UML
* Agile
* Maven
* Constraint Definition

#### Repository: <a href="https://github.com/philliard3/CMSC447-application">github.com/philliard3/CMSC447-application</a>

### Google CodeU
I participated in Google's CodeU program in the spring of 2017.

The primary focus of the program was a group project where I worked in a team with two other students to implement new features for a basic chat application that we were given in Java. Throughout the program, we had several code reviews with a Google engineer who acted as our project advisor, which helped me improve my knowledge of industry best practices such as unit testing and trunk-based development.

One of the features that I worked on was update polling. The original chat app didn't update the messages on-screen until the user manually requested them, which made it nearly unusable. To fix this, I used Java multithreading to update the messages every second as an interrupt-based updating scheme would require rewriting significant portions of the chat server implementation.

I also worked on making the chat server persistent across tests. Initially, all data was lost when the server shut down because it didn't have any mechanism for data storage. In the end, I used Java's JDBC database access system to store the chat data in an SQLite database and retrieve it on server startup.

Finally, I attended an event at Google's headquarters in Mountain View that included some of the talks and exercises that are used to introduce new Google employees to the company as well as talks geared more explicitly towards students.
#### Skills Learned
* Java Database Access
* Java Multithreading
* Trunk-based development
* Unit testing

#### Repository: <a href="https://github.com/cqdinh/codeu_project_2017">github.com/cqdinh/codeu_project_2017</a>

