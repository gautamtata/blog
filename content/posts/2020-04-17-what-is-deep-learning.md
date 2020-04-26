---
title: "The Deep Learning Series: What is Deep Learning?"
date: "2020-04-17T12:00:00.000Z"
template: "post"
usesKatex: true
draft: false
slug: "/blog/what-is-deep-learning/"
img: https://github.com/gautamtata/blog/blob/master/static/media/deep1.jpg?raw=true
isML: true
category: "Deep Learning"
tags:
  - "Neural Networks"
  - "Deep Learning"
  - "Machine Learning"
  - "For Beginners"
description: Understanding what Deep Learning is all about.
prev: "/blog/get-a-job-1/"
next: "/blog/get-a-job-3/"
discussLinkReddit: https://www.reddit.com/r/cscareerquestions/comments/fwg4xe/feedbackadvice_on_blog/
discussLinkHN: https://news.ycombinator.com/item?id=22801084
---
# What is Deep learning?

## Before we get started: The difference between Artificial Intelligence, Machine Learning, and Deep Learning

No, these terms cannot be used interchangeably as they are often done in today's media. 

### Artificial Intelligence 

We can think of AI as the Umbrella that -- encapsulates the effort to automate tasks which would usually be done by Human beings and that includes the fields of Machine Learning and Deep Learning.

![Umbrella Encapsulation](https://github.com/gautamtata/blog/blob/master/static/media/deeplearning/Umbrella.png?raw=true)



### Machine Learning

Machine Learning answers one question: Can a computer go beyond what was asked of it to perform? Can the computer "learn" on it is own and answer questions? This is a different approach: Instead of explicitly programming the computer to do a task, can we **train** the computer to do some tasks on its own?

In our old paradigm, the structure used to be: Rules + Data --> Answers.

The Machine Learning paradigm, the structure is: Data + Answers --> Rules.

A Machine Learning algorithm transforms its input data to spit out some meaningful output, a process that is **learned** from exposure to different kinds of expected answers. Ex: To build an algorithm that predicts numbers, the algorithms first needs to learn what numbers are how they look like.

Imagine a graph of X and Y coordinates where X is grades and Y is test-scores. The students who get into college are the ones who have at least half the max score of X and half the max score of Y. Here, **learning** is defined as a systematic search for different possible coordinate changes and using feedback, the number of points being correctly classified as a rating of how well the algorithm is doing. Learning is an automatic search to find better slopes that classify our data correctly.

### Deep Learning

So, what is Deep Learning? Deep Learning is a sub-field of Machine Learning. It is a new way of learning representations of data that puts more weight on having multiple layers of **More Meaningful** representation. The deep in Deep Learning refers to the number of layers that are used to achieve better representations of data points.

In Deep Learning, the layered representations are mimicked versions of nature called: **Neural Networks**. As fancy as that term sounds, Neural Networks are extremely simple, and we will learn more about them in the next chapter. However, something to remember, for now, Neural Network is meant to be (from a neurobiological perspective) a version of **Neurons** in our brain. These Neurons in a simplified version, take in a single input and spit out a single input. Multiple connections of these neurons are called a Neural Network. 



![Deep Representations learned by a digit classification model - Francois Chollet](https://github.com/gautamtata/blog/blob/master/static/media/deeplearning/digit-classification.jpg?raw=true)

As we can see in the image above, the input is our number. This input gets morphed and broken down into increasingly more meaningful representations of data until it reaches a stage where our computer can **predict** what it thinks is the right digit. 

> Deep Learning is a multistage way to learn data representations. -- Francois Chollet, Author of Keras*

## The Process Of Deep Learning


![Stages of Learning](https://github.com/gautamtata/blog/blob/master/static/media/deeplearning/flow.png?raw=true)

What a **layer** of neurons do to the inputs is stored in it's **weights**, which are for our concept just numbers which are initialized randomly. Its weights parameterize the transformation implemented by a layer. In this context, learning means finding the right set of values for weights such that the input is mapped correctly to it is output. The problem is that when there are millions of parameters finding the right weights is hard. Modifying the values of on weight also modifies the behavior of others, which makes it harder to find the right values.

**So, how do we control the values?** 

To have control over something, we need to be able to observe what is happening. We need to be able to measure how far is the output value from the expected output value. Ex: If we want to classify a number as four, but the network spits out a 3, we need to know how that is happening and how far away is the expected value.

For this, we introduce a concept called the **loss function**. This function takes the predictions of the network and a target value and computes what is called a distance score (How far away the actual output is to the expected output) and prints out a score that we can call the **loss score**.

The trick now is to use this loss score as a feedback mechanism. We feed the loss score into an algorithm called **BACKPROPOGATION** (We will go further into what backprop is). 

After every epoch (iteration), the objective is to minimize the loss score. After all, the lower the loss score is, the better we know that the network is performing optimally!

Here are the cliff notes for what happens when we try to train a deep learning network:

1. The weights are randomly initialized and are computed with the layers for a given output.
2. This spits out a prediction that is compared with expected outputs and fed into a loss function.
3. The loss function compares the outputs and spits out a loss score. The more the score, the worse the network is.
4. This loss score is fed into our Backpropagation algorithm, which reinitializes our weights with a different set of values.
5. This is done over and over again until we reach our optimal loss score

## What can be done using Deep Learning?

I am glad that you asked. Deep Learning has been nothing but a revolution in the field of Computer Science. We can solve problems that come quickly for humans but were near-impossible for machines.

Some examples are:

* Accurate Image Classification
* Reading Human transcribed notes
* Understanding Human Speech (Siri, Alexa)
* Ad targeting 
* Amazing results on Autonomous driving.

At the point of writing, we are still unsure of the full capabilities of Deep Learning. We are applying the tool for a wide range of problems and are learning as we go. Now, it is a better time than ever to enter this field!

Thank you for coming this far. I will see you in the next chapter, where we discuss a brief history of Machine Learning.

See you there!
