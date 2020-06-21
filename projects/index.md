---
layout: page
title: Projects
subtitle:
---
### AI / Data Science / ML

#### Toxic Comment Classification
For my Deep Learning course project, I built a deep learning model in PyTorch that determines if an online comment is toxic according to 6 different labels. To perform the classification, I built a custom head on top of BERT that uses an attention mechanism to process comments longer than BERT's 512-token limit. The model was trained and deployed on a Google Cloud Compute instance using a custom model server that is accessed by a Streamlit.io app. After training, the model achieved an average AUC of 0.959 across the 6 toxicity labels.

##### Skills Learned
* HuggingFace's transformers library
* Kaggle API
* Streamlit.io
* Google Cloud Compute

##### Repository: <a href="http://github.com/cqdinh/toxic_comment_classification_274P">github.com/cqdinh/toxic_comment_classification_274P</a>
##### Kaggle: <a href="https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge/">Jigsaw Toxic Comment Classification</a>

#### Inferring Ingredient Relationships from Recipes
For my Natural Language Processing course project, I used a recipe dataset to generate embeddings for ingredients. Just as a sentence can be seen as the context for a word, I used the recipes as contexts for the ingredients. As a baseline, I started with the co-occurrence matrix and then reduced its size with PCA. From there, I generated embeddings with a Continuous Bag-of-words model modified to use the entire ingredient list as context because the ingredient list doesn't have any meaningful order. 

##### Skills Learned
* PyTorch
* Word Embeddings

##### Repository: <a href="https://github.com/cqdinh/Pytorch-CapsNet">github.com/cqdinh/Pytorch-CapsNet</a>



#### Homography Invariance of CapsNet vs ConvNet
For my Computer Vision course project, I implemented CapsNet and compared its homography invariance to that of a basic ConvNet with an architecture based on CapsNet but without the Capsules structure. I trained and evaluated both based on their classification accuracy on randomly tranformed logos as well as those logos placed on random backgrounds. After training both, I found that the CapsNet reached 73% accuracy on the logos without backgrounds while the ConvNet only managed 18%. 

##### Skills Learned
* PyTorch
* Capsule architecture

##### Repository: <a href="https://github.com/cqdinh/Pytorch-CapsNet">github.com/cqdinh/Pytorch-CapsNet</a>



#### CycleGAN Implementation
I used <a href="https://hardikbansal.github.io/CycleGANBlog/">Hardik Bansal's tutorial</a> to implement the <a href="https://junyanz.github.io/CycleGAN/">CycleGAN</a> algorithm in Tensorflow. I tried to train a model using the sample dataset that would convert images of horses and zebras to each other, but while the cycle loss was effective at making the networks act as inverses of each other, the conversion from horse to zebra and vice versa was not successful.
##### Skills Learned
* Convolutional networks
* TensorBoard - Graph View
* Generative Adversarial Networks

##### Repository: <a href="https://github.com/cqdinh/TensorflowCycleGAN">github.com/cqdinh/TensorflowCycleGAN</a>



#### Kaggle Competition: Corporación Favorita Grocery Sales Forecasting
For the Intro to Data Science class that I took in Fall 2017, I created a model for the <a href="https://www.kaggle.com/c/favorita-grocery-sales-forecasting">Corporación Favorita Grocery Sales Forecasting</a> that was evaluated to have an error of 1.067 as measured by <a href="https://www.kaggle.com/c/favorita-grocery-sales-forecasting#evaluation">Normalized Weighted Root Mean Squared Logarithmic Error</a>.

The competition's challenge is to forecast sales of individual products given past sales data. The main challenge that I found in this challenge was to manipulate the data into a form that could be processed in reasonable time. Because there was so much data, I had to essentially discard some of the information provided as part of the challenge. As a result, my model was not nearly as accurate as it could have been.

##### Skills Learned
* Pandas
* Scikit-Learn
* Data Cleaning
* Sampling

##### Repository: <a href="https://github.com/cqdinh/kaggle_corporacion_favorita">github.com/cqdinh/kaggle_corporacion_favorita</a>



#### Sequence Generator
A TensorFlow-based LSTM model that can be used to mimic a sequence of any form with a common input/output method for all data types.
In essence, this is Andrej Karpathy's well-known char-rnn, modified to allow non-character inputs. 
The RNN implementation is based on <a href="https://github.com/sherjilozair/char-rnn-tensorflow">char-rnn-tensorflow</a>, but packaged into a class and modified to allow the usage of any sequence of values that can be converted into integers.
This implementation uses a modified LSTM class from TensorFlow to output the trained model in a simple text format, making cross-platform usage of the model simpler.

I trained a model on the collected works of Shakespeare and I have a demo of it <a href="https://cqdinh.github.io/projects/sequence_generator/">here</a>.
##### Skills Learned
* Tensorflow
* LSTM architecture

##### Repository: <a href="https://github.com/cqdinh/SequenceGenerator">github.com/cqdinh/SequenceGenerator</a>



### Other

#### Google CodeU
I participated in Google's CodeU program in the spring of 2017.

The primary focus of the program was a group project where I worked in a team with two other students to implement new features for a basic chat application that we were given in Java. Throughout the program, we had several code reviews with a Google engineer who acted as our project advisor, which helped me improve my knowledge of industry best practices such as unit testing and trunk-based development.

One of the features that I worked on was update polling. The original chat app didn't update the messages on-screen until the user manually requested them, which made it nearly unusable. To fix this, I used Java multithreading to update the messages every second as an interrupt-based updating scheme would require rewriting significant portions of the chat server implementation.

I also worked on making the chat server persistent across tests. Initially, all data was lost when the server shut down because it didn't have any mechanism for data storage. In the end, I used Java's JDBC database access system to store the chat data in an SQLite database and retrieve it on server startup.

Finally, I attended an event at Google's headquarters in Mountain View that included some of the talks and exercises that are used to introduce new Google employees to the company as well as talks geared more explicitly towards students.
##### Skills Learned
* Java Database Access (JDBC)
* SQLite
* Java Multithreading
* Trunk-based development
* Unit testing

##### Repository: <a href="https://github.com/cqdinh/codeu_project_2017">github.com/cqdinh/codeu_project_2017</a>



#### Health Professional Time Scheduling
For my Software Engineering course, I worked in a team of 5 to develop a desktop application that generates a shift schedule for doctors and nurses subject to various constraints. The Frontend GUI is built in Electron and Vue and when generating the schedule, it calls a Java backend that uses Optaplanner to generate the schedule.

##### Skills Learned
* UML
* Agile
* Maven
* Constraint Definition

##### Repository: <a href="https://github.com/philliard3/CMSC447-application">github.com/philliard3/CMSC447-application</a>
