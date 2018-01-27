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

3.82 in Mathematics Courses

3.718 Overall
#### Honors
Merit Scholar

Dean's List
## Experience
### UMBC's MAPLE Lab - Undergraduate Research
I am currently working on the problem of replanning in Abstract Markov Decision Processes (AMDPs) in the Multi-Agent Planning and Learning (MAPLE) lab at the University of Maryland Baltimore County (UMBC). 

AMDPs are a hierarchical planning system, so it takes some task and breaks it down into several sub-tasks to make it easier to solve. Each task then determines how to arrange those sub-tasks so that it can achieve its goal. This is done until the task to solve is more easily solved with a traditional algorithm such as A\* for pathing. This system can either be used online, meaning that as each step is determined, it is carried out, or offline, meaning that the plan is generated but not necessarily acted on.

The problem that I am working on shows up when AMDPs are used online. Each sub-task is self-contained and only given the information necessary to reach its goal, so it doesn't always have enough information to determine when something has gone wrong and it is doing something incorrect. As a result, the task reaches its goal and then needs to be performed again since it went wrong the first time.

As an analogy, I will use the task of going out for dinner. This can be broken down into such sub-tasks as "go to car", "drive to restaurant X", and "eat dinner". An offline usage of an AMDP would simply result in all of the steps needed to reach the car, how to drive to the restaurant, and how to eat. An online usage, however, would result in a system that tells you what to do step-by-step until you are done with your meal. A problem would arise if you decided on your way to restaurant X that you wanted to go to restaurant Y instead. Under the current system, you would be directed all the way to restaurant X before the AMDP realizes that you need to be taken to restaurant Y and then takes you there. My work is focused on fixing this problem so that as soon as you changed your mind, you are navigated to restaurant Y rather than needing to backtrack for no reason.

### Google CodeU - Career Development Program
I participated in Google's CodeU career development program in the spring of 2017.

The primary focus of the program was a group project where I worked in a team with two other students to implement new features for a basic chat application that we were given in Java. Throughout the program, we had several code reviews with a Google engineer who acted as our project advisor, which helped me improve my knowledge of industry best practices such as unit testing and trunk-based development.

One of the features that I worked on was update polling. The original chat app didn't update the messages on-screen until the user manually requested them, which made it nearly unusable. To fix this, I used Java multithreading to update the messages every second as an interrupt-based updating scheme would require rewriting significant portions of the chat server implementation.

I also worked on making the chat server persistent across tests. Initially, all data was lost when the server shut down because it didn't have any mechanism for data storage. In the end, I used Java's JDBC database access system to store the chat data in an SQLite database and retrieve it on server startup.

In addition to this group project, I attended YouTube Live Career Series talks, which were livestreams hosted by Google recruiters and engineers covering industry and carrer preparation topics. Several mock interviews were also conducted in order to give participants in CodeU extra interview experience and feedback from people who conduct those interviews regularly.

Finally, I attended an event at Google's headquarters in Mountain View that included some of the talks and exercises that are used to introduce new Google employees to the company as well as talks geared more explicitly towards students. Along with these talks, we were given time to network with Google employees who worked to create CodeU and with our fellow students.
#### Skills Learned
* Java Database Access
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
