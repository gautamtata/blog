---
title: "Analyzing Applications of Deep Learning in Aquaculture"
date: "2021-01-01T12:00:00.000Z"
dateModified: "2021-01-01T12:00:00.000Z"
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

Authors: [Gautam Tata](www.gautamtata.com) and [Jay Lowe](mailto:ogjaylowe@gmail.com)

![Interpreting feeding behavior by tracking objects in the water -- Courtesy Tidal](./media-link/deeplearning/tidal_desktop.gif)


## WHY SHOULD WE SPEND TIME MAKING AQUACULTURE SMARTER? 🤯

The demand for fish as a source of meat increases by an average of 6% each year--making it the most rapidly growing food in the meat industry. This demand has doubled since the start of the 2000s and will double again by 2050 if the current growth rate holds.

Fish-farming has been expanding to meet this demand by increasing the number of fish within their facilities. However, as the fish become more closely packed: their quality of life decreases.

Maintaining a high quality-of-life requires the following needs to be met:

 - A low rate of sea-lice (Lepeiopthteirus Salmonis) infestation
 - low levels of the stress hormone Cortisol
 - The ideal level of food (and timed food delivery) 
 - An appropriate biomass size
 - Well maintained mesh nets that keep the fish enclosed (and predators out)
 - A careful water quality balance 
 - low rates of disease

Unfortunately, quality-of-life decreases exponentially as fish-farms become depleted. This is because of the relationship between these factors and space (less space = more transference of sea-lice, disease, etc.)

## WHY WILL THIS BENEFIT THE FISH FARMS? 💰

- Feeding costs 60% of fisheries revenue. Unreasonable feeding can be a significant factor in revenue [de Verdal et al., 2017](https://onlinelibrary.wiley.com/doi/abs/10.1111/raq.12202)
- Manually selecting features is a laborious, heuristic approach, and the effects highly dependent on both luck and experience (Mohanty et al., 2016)
- DL models have shown strong stability under challenging conditions such as low light and high noise, and they perform better than do traditional artificial feature extraction methods (Sun et al., 2018)

## HOW DO WE DO EXECUTE? 🤔

Most fish farms have little, if any, technological support and tight budgets. Therefore, any solution must be easy to install and low cost.

Our Deep Learning solution requires only one piece of equipment--a camera with measurement instruments integrated into it. One well place instrument in the center of a fish farm can collect and aggregate all of the data required to monitor the seven quality-of-life metrics mentioned above. When combined, these metrics can also produce a single overall health value of the fish farm, representing a holistic at-a-glance health rating.

Using the aforementioned aggregated data along with computer vision, we can develop the following Deep Learning applications:
- Sea-Lice Detection
- Behavioral Analysis of Fish
- Dynamic Fish Appetite Estimation and Delivery 
- Biomass Measurement
- Mesh Integrity Monitoring
- Water Quality Monitoring and Control
- Disease Identification and Prevention

![A rough version of DL applications](./media-link/deeplearning/farm-architecture-9.jpg)

## WHY THIS APPROACH WORKS ✅
Let us briefly breakdown everything so far before we jump into the applications:

  1. we can utilize aggregated data from a single piece of equipment in seven different applications--each dedicated to a critical factor in fish quality-of-life
  2. each application uses similar Deep Learning technologies but results in a unique reporting value that fish farmers can take action on
  3. the outputs can be combined in one final Deep Learning application, which represents the overall health of the farm

Now imagine these seven metrics, related measurements, and overall health evaluation displayed in real-time via a beautiful dashboard! 📈


# The APPLICATIONS


### Sea-Lice Detection 🐟

![Sea lice of Salmon](./media-link/deeplearning/fishLice.jpg)
##### PROBLEM IT SOLVES

Fish farms worldwide suffer from infestations of sea-lice. These parasites attach themselves to a fish host and feed off their skin/blood. The denser the fish farm--the easier it becomes for sea-lice to spread. 

##### HOW IT SOLVES THE PROBLEM

Harsh chemical treatments have become the most common method of sea-lice removal. While effective at removing sea-lice, the chemical treatment has adverse effects on the fish (**such as what**). It also prevents the Salmon from being sold for several weeks while they detox. 

A deep learning solution utilizing Convolutional Neural Networks (CNNs) and computer vision to detect/identify sea-lice before they spread over to the other fish enable farmers to take actions such as (**what, moving fish populations or temporarily reducing density?**) before critical population levels of sea-lice trigger a complete chemical flush. 

##### SUMMARY
Sea lice can cause catastrophic damage to commercial fish-farms. If not kept in check, fish can not be sold due to lesions caused by the parasites, and in some extreme cases, lice can also cause the fish to die. Early prevention using the deep learning system can prevent harmful chemicals and keep the lice population in check.


### Behavioral Analysis of Fish 🦈
![Fish Behavior analysis](./media-link/deeplearning/fish-swimming.gif)

##### PROBLEM IT SOLVES
Small environment changes can rapidly increase stress levels for fish, thereby increasing quantities of the stress hormone Cortisol inside them. Cortisol alters the taste of the fish and has negative ramifications (**such as what**) for the consumer.

##### HOW IT SOLVES THE PROBLEM
The IdTracker.ai model leverages two different CNNs to provide the capability for tracking all individual fish behaviors in small and large groups--allowing farmers to detect behavior anomalies associated with increased Cortisol. However, the challenge remains enormous since tracking individual fish behaviors involves non-rigid deformations, low image quality, and frequent occlusions.

Zhao et al. (2018a) has demonstrated another solution that utilizes **modified motion influence maps** and **Recurrent Neural Networks (RNNs)** to systematically detect, localize, and recognize unusual behaviors within a fish school.

##### SUMMARY

Fishes react rapidly to the smallest changes in their environment, such as Dissolved Oxygen, algae, phytoplankton, etc. If the fishes are stressed, they can produce cortisol, which affects fish meat quality. Analyzing behavior and fish swimming patterns help farmers make smarter decisions.

Related Citations: [Saberioon et al., 2017](https://www.researchgate.net/publication/288516072_Application_of_Machine_Vision_Systems_in_Aquaculture_with_Emphasis_on_Fish_State-of-the-Art_and_Key_Issues), [Papadakis et al., 2012](https://www.researchgate.net/publication/235007076_A_computer-vision_system_and_methodology_for_the_analysis_of_fish_behavior), [Romero-Ferrero et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30643215/), [Zhao et al., 2018a](https://www.researchgate.net/publication/310661111_Robust_tracking_of_fish_schools_using_CNN_for_head_identification)


### Fish Appetite Detection 🐡

##### PROBLEM IT SOLVES
No metric has a stronger correlation to production efficiency and breeding cost than fish feeding. Feeding accounts for 60% of the average fish farm's operations budget.

Insufficient feeding drastically lowers the fish breeding/biomass growth rates, while overfeeding results in wasted costs and pollution of the surrounding water environment.

##### HOW IT SOLVES THE PROBLEM
Nailing the optimal feeding times and delivery size can be challenging. Traditionally, farmers use simple timers and intuitive experience to make their decisions--which does not consider important environmental and nutritional factors.

Aggregated data containing visual information, water measurements, and historical data on fish responses to past feedings can be combined with 3D-CNN and RNN models geared for temporal/spatial data flow to generate drastically more efficient feeding. Maloy et a. utilized this dual-network approach to choose optimal feeding times that accounted for feeding and non-feeding behaviors.

##### SUMMARY

Many aquaculture farms have random times for feeding. Some farmers use feed based on intuition. When this happens, fish can be over or underfed. Overuse of feed leads to wasted costs and pollution of the environment, and underfeeding lower growth rates. Detecting appetite lets farmers control when to feed the fish.

Related Citations: [Måløy et al. (2019)](https://www.sciencedirect.com/science/article/pii/S0168169919313262), [Chen et al., 2017](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5856631/)



### Biomass Estimation 🐠

##### PROBLEM IT SOLVES
Estimating biomass forms the basis for sustainably managing a fish-farm as provides farmers an insight into the quantity, size, and weight of the current fish. These crucial data points also drive decision making related to feeding and behavioral management.

Measuring biomass can be challenging without human intervention as the fish move freely in an environment where lighting and visibility conditions can not be controlled. Depending on the depth of the fish, different degrees of occlusion and light change need to be accounted for.

##### HOW IT SOLVES THE PROBLEM
Two possible solutions can come together to accurately estimate biomass:

  1. Train a Deep Learning algorithm to understand the mapping between sonar and optical images
  2. Segment images of individual fish, track them over time, and continuously estimate volume and weight through changes in the fish using the depth of the object within the frame. 

##### SUMMARY

Estimating Biomass helps Farmers make better decisions about the size, quality, and weight of fish. Currently, this process is done manually and is labor/cost-intensive. Automating this process will save farmers time and money.

Related Citations: [Terayama et al., 2019](https://www.researchgate.net/publication/334450150_Integration_of_sonar_and_optical_camera_images_using_deep_neural_network_for_fish_monitoring), [Moen et al., 2018](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0204713), [Zhang et al., 2020](https://www.researchgate.net/publication/343500391_R_34_Zhang_et_al_2020_Rev_Fish_Biol_Fisheries_online-101007_s11160-020-09614-y)


### Mesh Integrity Detection 🐙

![Mesh Detection - courtesy of Petrov et al.](./media-link/deeplearning/ mesh-detection.png)

##### PROBLEM IT SOLVES
Specially designed mesh nets fence the farmed fish into a confined area and ensure their safety/health. Farmed fish escaping the farm would be disastrous for the farm as well as the nearby ecosystem.

##### HOW IT SOLVES THE PROBLEM
Currently, divers perform a "net integrity check" in which they SCUBA around the farm's perimeter and check nodes in the netting for signs of wear. Hiring professional divers or owning the equipment to perform the dives can be an arduous/expensive process.

A deep learning neural network trained to recognize nodes in the netting can easily create rules for placement and monitoring of the mesh nets.

##### SUMMARY
Current Fjords and other aquaculture nets can be broken. If this happens, hundreds of thousands of fish will escape into the nearby environment devastating the ecosystem. Divers currently routinely inspect mesh nets but automating net break detection will save the farms much money and save the ocean from further harm.

Related Citations: [Odey Et al](https://www.researchgate.net/publication/247160483_AquaMesh_-_Design_and_Implementation_of_Smart_Wireless_Mesh_Sensor_Networks_for_Aquaculture), [Yun-Peng et al.](https://link.springer.com/article/10.1007/s41095-020-0174-8)

### Predicting Water Quality 🐋

##### PROBLEM IT SOLVES
High levels of dissolved oxygen (DO) and other natural elements lead to lower stress and disease levels and increased levels of breeding. Quality monitoring requires accurate measurements of parameters related to elements in the water over a long period.

##### HOW IT SOLVES THE PROBLEM
 Deep learning has achieved great results in both short and long-term water quality monitoring using attention-equipped Long Short Term Memory Networks (LSTMs) and RNNs to capture/predict time-sequence information related to water elements.

##### SUMMARY
As in the paragraph mentioned above, fish react to the smallest water changes such as Dissolved Oxygen. Having a stable water quality throughout the farm is paramount for the long term health of the fish.


[Rahman et al., 2019](https://www.researchgate.net/publication/236007029_Impact_of_Water_Quality_on_Fish_Growth_and_Production_in_Semi-Intensively_Managed_Aquaculture_Farm), [Hu et al., 2019](https://arxiv.org/pdf/1809.00794.pdf), [Liu et al](https://arxiv.org/pdf/1601.01530.pdf)

### Defect Fish-Pellets Detection  🐳

![Fish feeding using Pellets](./media-link/deeplearning/pellets.jpeg)

##### PROBLEM IT SOLVES
The detection, recognition, and localization of food defects have proven extremely challenging in food manufacture. For fish fillets, blood spots are detrimental to their quality and reduce their market value. The manual classification method has not met the needs of modern industry. The modern industry requires a robust, rapid, effective, automated, non-invasive, and low-cost method to classify normal and defective fish fillets.

##### HOW IT SOLVES THE PROBLEM
Misimi et al.  used pre-trained CNN and SVM models for accuratesegmentation and localization of blood spots and the classification of defective cod fish fillets. A noveldata augmentation method was proposed in this study that desensitized the CNN for shape and focusedonly on color features for the classification between normal and defective fish fillets. The 3D informationwas used to localize the blood spots and calculate the relevant gripper vectors, as an input to robotic processing.

##### SUMMARY
Defects in fish pellets can be detrimental to their health and lower their market value. Automating the process of detecting defective fish pellets would be healthy for the fish.
  

### Other Areas of Research

- Automatic Disease Identification and Detection
- Phytoplankton and Algal Bloom Detection
- Temperature Prediction 
- AUVs for autonomous detection in open seas
- Chlorophyll-A content prediction
- Obstacle and Occlusion avoidance in marine ecosystems
  
-------

## Moonshot Summary  🌒

> The Ocean is a precious resource to humanity. It covers 70% of the land and provides food, oxygen, and livelihoods to most of the planet. Aquaculture is just one aspect of what can improve the Ocean's health. If we as researchers can do so much to improve the Ocean with just a camera, imagine what we can achieve when we apply our brains and research to the other problems that the Ocean faces?
>
> "People can set their minds to magical seemingly impossible ideas and through science and technology bring them to reality and that then sets other people on fire to do other things that seemed impossible." - Astro Teller
>
> [What is Moonshot Thinking?](https://www.youtube.com/watch?v=pEr4j8kgwOk)



-------
