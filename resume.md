---
layout: page
title: Christopher Dinh
subtitle: 
---
## Education
### University of Maryland - Baltimore County
Expected Graduation: Spring 2019
#### Degrees
BS in Computer Science - Data Science Track

BS in Mathematics
#### Grade Point Average
4.0 in Computer Science Courses

3.889 in Mathematics Courses

3.771 Overall
#### Honors
Merit Scholar

President's List 2017-2018
## Experience
### IBM Cloud Managed Application Services - Software Internship
#### Summer 2018
#### Rochester, Minnesota
##### Work Done
The team that I worked on was focused on building SAP systems for various clients. I used Node.js, Javascript, d3.js, PUG, and CSS to design and implement a Gantt chart visualization of the build process. It uses stored log data to determine when each step was worked on and how long it took. Using that information, it uses d3.js to render a chart that the user can view at different points and scales. 
##### Skills Learned
* Javascript
* d3.js
* node.js

### UMBC's MAPLE Lab - Undergraduate Research
#### Fall 2017 - Spring 2018
##### Work Done
In the Multi-Agent Planning and Learning (MAPLE) lab at the University of Maryland Baltimore County (UMBC), I worked on the problem of replanning in a hierarchical planning framwork called an Abstract Markov Decision Process (AMDP). This framework simplifies tasks by splitting them up into subtasks that ignore parts of the state space. This allows the agent to make plans without needing to take unnecessary information into account. However, it makes replanning difficult because some state variables are ignored based on an expectation that they will be constant while the subtask is executed. The subtask should replan when that expectation is violated, but it doesnt't because it has ignored that part of the state. 

My solution was a "controller" that sees the whole state space and forces the agent to replan when it ignores any state change. While this solved the initial problem, there are other failure cases for AMDPs such as a failure to account for unexpected changes in state variables that the agent is aware of.

The codebases that I worked from:
* <a href="https://github.com/cqdinh/amdp-replanning">github.com/cqdinh/amdp-replanning</a>
* <a href="https://github.com/cqdinh/Maple-RAMDP">github.com/cqdinh/Maple-RAMDP</a>

####Skills Learned
* Research
* Reinforcement Learning
* Planning
* Latex

### MantaroBot Corporation - Summer Internship
I interned at the MantaroBot Corporation in Germantown over the summers of 2014, 2015, 2016, and 2017.
#### Summer 2017
##### Work Done
I designed and implemented an algorithm that uses OpenCV to find the robot's position relative to a marker placed on its charging dock. Based on this position, the robot can then dock itself for charging automatically. The marker is made up of three triangles which are key to the algorithm. First, the algorithm finds a group of triangles that match the overall profile of the marker image. Once the triangles are found, their sizes and relative positions are used to determine how far away the marker is and its angle relative to the robot. To dock, the robot uses its mecanum wheels to move sideways and rotate so that it is directly in front of the charging station and can then simply move straight forward to dock. I used the Python version of OpenCV to speed up development of the marker detection algorithm and then used a C# wrapper of OpenCV to integrate it into the Windows controller app.
##### Skills Learned
* OpenCV
* Computer Vision basics

#### Summer 2016
##### Work Done
I worked on prototyping a system using infrared sensors and transmitters to allow a robot to dock itself into its charging station. I used Arduino to control the sensors and transmitters along with Python to record and analyze the data that were produced. The prototype system was found to only be effective at very short range, which made it unsuitable for a docking system.

Later, I implemented algorithms that minimize the stress placed on the joints of a robotic arm. There was an extra degree of freedom in the arm's movement, so I worked through the forwards kinematics and torque equations in order to determine how to position the arm given an endpoint to move to. However, based on a map of the stress on the arm that I created in MatPlotLib, I found that larger movements could not be performed reliably by moving in a straight line and a pathing algorithm was needed. In order to minimize the stress experienced throughout the path, I developed a system that determines what direction to move in at each step based on gradient descent. Both of these algorithms were prototyped in Python with NumPy and MatPlotLib and then implemented in C# as part of a Windows App that controls the robot.
##### Skills Learned
* C#
* Model-based Optimization

#### Summer 2015
##### Work Done
I worked on using an Asus XTION to imitate LIDAR-based robotic wall detection and avoidance. I used Octave, a free equivalent to MatLab, as well as NumPy and MatPlotLib to analyze and visualize data that was collected from the sensor. In addition, I used NumPy and MatPlotlib to prototype the detection and avoidance algorithms. 

The final result was an algorithm that used variance to cluster data points into groups that indicate the existence of a wall. Using these groups, least-squares regressions calculate the location of the wall that each group represents while reducing noise. Finally, the robot's movements are biased towards avoiding walls by finding the nearest wall and moving away from it if necessary and parallel to it otherwise.
##### Skills Learned
* Octave
* NumPy
* MatPlotLib
* Noise Reduction techniques
* Basic Clustering

#### Summer 2014
##### Work Done
I implemented Pusher and WebRTC as additional methods by which commands from the <a href="http://www.mantarobot.com/telego/">TeleGo Controller</a> could reach the <a href="https://play.google.com/store/apps/details?id=com.mantaro.telemerobotappv3&hl=en">TeleMe Robot App</a>, which would relay those commands to the robot's motor controllers and other hardware. Pusher was implemented entirely in Java using the Android Development Kit, while WebRTC required HTML and Javascript as well as NodeJS for a server that was used to set up the peer-to-peer connection.
##### Skills Learned
* HTML
* Javascript
* NodeJS
* Android Development Kit

## Projects

### Google CodeU - Career Development Program
I participated in Google's CodeU career development program in the spring of 2017.

The primary focus of the program was a group project where I worked in a team with two other students to implement new features for a basic chat application that we were given in Java. Throughout the program, we had several code reviews with a Google engineer who acted as our project advisor, which helped me improve my knowledge of industry best practices such as unit testing and trunk-based development.

One of the features that I worked on was update polling. The original chat app didn't update the messages on-screen until the user manually requested them, which made it nearly unusable. To fix this, I used Java multithreading to update the messages every second as an interrupt-based updating scheme would require rewriting significant portions of the chat server implementation.

I also worked on making the chat server persistent across tests. Initially, all data was lost when the server shut down because it didn't have any mechanism for data storage. In the end, I used Java's JDBC database access system to store the chat data in an SQLite database and retrieve it on server startup.

In addition to this group project, I attended YouTube Live Career Series talks, which were livestreams hosted by Google recruiters and engineers covering industry and carrer preparation topics. Several mock interviews were also conducted in order to give participants in CodeU extra interview experience and feedback from people who conduct those interviews regularly.

Finally, I attended an event at Google's headquarters in Mountain View that included some of the talks and exercises that are used to introduce new Google employees to the company as well as talks geared more explicitly towards students. Along with these talks, we were given time to network with Google employees who worked to create CodeU and with our fellow students.
#### Skills Learned
* Java Database Access
* Java Multithreading
* Trunk-based development
* Unit testing

#### Repository: <a href="https://github.com/cqdinh/codeu_project_2017">github.com/cqdinh/codeu_project_2017</a>

### Homography Invariance of CapsNet
For my Computer Vision course project, I implemented CapsNet and compared its homography invariance to that of a basic ConvNet with an architecture based on CapsNet but without the Capsules structure. I trained and evaluated both based on their classification accuracy on randomly tranformed logos as well as those logos placed on random backgrounds. After training both, I found that the CapsNet reached 73% accuracy on the logos without backgrounds while the ConvNet only managed 18%. 

#### Skills Learned
* PyTorch
* Capsule architecture

#### Repository: <a href="https://github.com/cqdinh/Pytorch-CapsNet">github.com/cqdinh/Pytorch-CapsNet</a>


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

### CycleGAN
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
