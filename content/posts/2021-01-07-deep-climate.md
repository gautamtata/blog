---
title: "Analyzing Applications of Deep Learning in Aquaculture"
date: "2021-01-07T12:00:00.000Z"
dateModified: "2021-01-07T12:00:00.000Z"
template: "post"
draft: false
slug: "/blog/deep-culture/"
img: ./media-link/deeplearning/mnist.png
isML: true
category: "Machine Learning"
tags:
  - "Machine Learning"
  - "Neural Networks"
description: Deep Computer Vision to protect the Ocean and feed humanity sustainably
prev: "/blog/history-of-machine-learning/"
next: "/blog/get-a-job-3/"
---

![Interpreting feeding behavior by tracking objects in the water -- Courtesy Tidal](./media-link/deeplearning/tidal_desktop.gif)

## Abstract

With rapid development in deep learning technology, it has resulted in the technology being used in several fields, including fish-farming. Deep Learning creates new opportunities to automate and improve traditional fish-farming methods, which were previously done mostly manually. Various scientific papers show that Deep Learning offers breakthroughs in addressing the processing of complex data-pipelines in aquaculture.


## Introduction
Each year, the need for fish is growing by 6%. This has been the most rapid growth in the meat industry. With such high demand, there is a need for fish-farming to meet the population's growing needs. In modern fish farming, data is quintessential. Advanced analytics from the massive amount of accumulated data can significantly improve the thruput of fish-farms. This blog summarizes the problems and the possible solutions faced in aquaculture, with the blog's core being in the main applications of deep learning in aquaculture.

## Applications of Deep Learning for Smarter Fish-Farming
![A rough version of DL applications](./media-link/deeplearning/fishFarm1-3.jpg)

### Sea-Lice Detection 
Fish farms worldwide are being infested by Lepeiopthteirus salmonis, a form of sea-lice that feeds on fish skin and blood to survive. These parasites need to attach themselves to a fish host in order to survive, and with dense fish-farms, they not only survive but thrive. Currently, the most common treatment for sea-lice is chemicals. Although this method is effective, it has adverse effects on the fish and prevents the Salmon from being sold for several weeks after treatment. A deep learning solution would require using Convolutional Neural Networks (CNNs) to detect and identify sea-lice before they spread over to the other fish. This would save farmers time, money, and allow consumers to consume chemical treatment free fish.

### Behavioral Analysis of Fish 
Fishes react very rapidly to small environmental changes. For example, stressed fish produce high quantities of Cortisol (a stress hormone), which changes the fish's taste. There have been many challenges to monitoring fish behavior, but deep learning approaches have been successful. IdTracker.ai is a model that uses two different CNNs and can track all individual fish behaviors in small and large groups. The challenge remains enormous since tracking individual fish behaviors involves non-rigid deformations, low image quality, and frequent occlusions. Another possible solution tried by {x} shows more promising results by using a modified motion influence map and Recurrent Neural Networks (RNNs) to systematically detect, localize and recognize unusual behaviors of a fish school.

### Fish Appetite detection
In aquaculture, the fish's feeding directly correlates to the production efficiency and breeding cost. Fisheries account for feeding to be more than 60% of operating cost, and thus, excessive feeding will reduce production efficiency, and insufficient feeding will affect fish breeding and growth. Exessive feeding also pollutes the surrounding environment. Traditionally, the decision to feed fish is based on a simple timer and experience. However, many factors affect when to feed fish, such as environmental and nutritional factors. By using computer vision, a more efficient strategy can be developed for feeding. Maloy et al. used a temporal and spatial flow by combining a 3D-CNN and RNN. This dual-network could capture a spatial and temporal sequence of information and, therefore, capture both feeding and non-feeding behaviors.

### Biomass Estimation
Estimating size/biomass is essential to continuously observe fish parameters such as quantity, size, and weight when managing a fish-farm. Quantifying fish biomass forms the basis of conservation strategies for sustainable fish production. It is challenging to estimate fish biomass without human intervention because fish move freely in an environment where lightning and visibility conditions change due to depth and cannot be controlled. To estimate biomass, we look at two possible solutions: Biomass is usually tracked using SONAR images mapped to optical images. If we can train a deep learning algorithm to learn the mapping between sonar and optical images, we can automate it. Another possible solution is to segment each image of the fish and estimate volume and weight over time. This can be done by estimating the depth of an object within a frame.

### Mesh Integrity Detection
For fish-farms, the integrity of the mesh nets is paramount. Since special mesh nets fence off a portion of water to keep the farmed fish in a confined area, it is of utmost importance that the fish do not escape into the surrounding environments. This would not only be disastrous for the farm but the ecosystem as well. Currently, divers perform a "net integrity check," but this process is time-consuming, expensive, and presents a safety risk. A neural network approach here requires training the network to recognize nodes in the netting, and a rule for the location of node points is developed.

### Predicting Water Quality
Predicting water quality is essential to prevent diseases and reduce risks to fish behaviors. Dissolved oxygen (DO) is considered to be one of the essential parameters for intelligent fish-farming. The prediction of DO and other parameters is closely related to time. In recent years, Deep Learning has achieved good results in short and long-term water quality monitoring. Attention equipped LSTMs (Long Short Term Memory Networks), and RNNs can capture and predict time-sequence information with good results.

### Preventing Diseases