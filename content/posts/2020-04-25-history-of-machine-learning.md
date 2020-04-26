---
title: "The Deep Learning Series: History of Machine Learning"
date: "2020-04-25T12:00:00.000Z"
template: "post"
usesKatex: true
draft: false
slug: "/blog/history-of-machine-learning/"
img: https://github.com/gautamtata/blog/blob/master/static/media/deeplearning/deep2.jpg?raw=true
isML: true
category: "Deep Learning"
tags:
  - "Neural Networks"
  - "Deep Learning"
  - "Machine Learning"
  - "For Beginners"
description: A brief introduction to the history of Machine Learning.
prev: "/blog/what-is-deep-learning/"
next: "/blog/get-a-job-3/"
discussLinkReddit: https://www.reddit.com/r/cscareerquestions/comments/fwg4xe/feedbackadvice_on_blog/
discussLinkHN: https://news.ycombinator.com/item?id=22801084

---
![Learning](https://github.com/gautamtata/blog/blob/master/static/media/deeplearning/learning2.jpg?raw=true)

# History of Machine Learning

Deep Learning has now reached a place where it is used widely, with industries investing huge amounts of time and money into it. While it is safe to say that the industry has been shifting to using a lot of Machine Learning algorithms, It has not been all Deep Learning.

> Think of Deep Learning as a hammer to hit a problem with. We can use many different hammers, but we need to find the right hammer to solve our problem easier and more efficiently. 
>
> -- Nikhil Dev Deshmudre

Deep Learning is not always the right approach to solve a problem. Think about the issues: sometimes we do not have a large enough dataset, we do not have the computing power, or there is a better algorithm. 

If we have started by learning Deep Learning before learning Machine Learning, we would think of Deep Learning as the hammer, and every ML problem starts to look like a nail. We must find the right hammer. Although, we will not be going over a full course on Machine Learning (maybe later; who knows?), we will go over some classical algorithms to better understand where Deep Learning stands in the broader context of Machine Learning and Artificial Intelligence.

## Early Machine Learning Algorithms

### Naive-Bayes Theorem

This theorem uses the principles of statistics for Data Analysis. It is one of the earliest forms of ML and is still used today.

Naive-Bayes is a type of Machine Learning classifier based on applying [Bayes Theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem) while assuming that the features in the input are all independent ( A naive assumption). This analysis started even before the time of computers and was done manually, dating back to the 1950s.

A related model to the Bayes theorem is called [**logreg**](https://www.rdocumentation.org/packages/LogicReg/versions/1.6.2/topics/logreg) (Logistic Regression). This is actually a classification algorithm rather than a regression one. Usually, a Data-Scientist would use logreg to get a feel of the classification problem at hand.

### Support Vector Machines (SVM's)

As Neural Networks became more popular, a new approach called [**support vector machines**](https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47) came into the scene and destroyed the concept of Neural networks.

SVM's solve classification problems by finding a good decision boundary between two sets of points. A decision boundary can be thought of as a line that separates training data into two spaces. To classify, we just need to check which side of the decision boundary the data point is located.

![Decision Boundary -- Towards Data Science](https://github.com/gautamtata/blog/blob/master/static/media/deeplearning/decisionBoundary.png?raw=true)

This technique of classifying problems may look good but in real life, our data-points are much more complicated and hard to do. A hack here would be to use Kernel functions

> The function of the kernel is to take data as input and transform it into the required form. Different SVM algorithms use different types of kernel functions. These functions can be of different types. **For example, linear, nonlinear, polynomial, radial basis function (RBF), and sigmoid.**
>
> -- Data Flair (https://data-flair.training/blogs/svm-kernel-functions/)

At the time of SVM's, they were state of the art and were widely popular, which were backed by extensive theory and backed by math. But over time, SVM's proved hard to scale to large datasets and did not provide good results for Image Classification. SVM is what is called a shallow method, which means applying it to perceptual problems would require having to extract features manually(Also called Feature Engineering).

### Decision Trees, Random Forests and Gradient Boosting Machines

![Decision Trees](https://github.com/gautamtata/blog/blob/master/static/media/deeplearning/decisionTree.png?raw=true)

Decision Trees are flowchart like structures or Tree structures which let us classify input data points or predict outputs given the values of input. They are easy to visualize and interpret.

In particular, the **Random Forest algorithm** introduced a more robust, efficient, and practical take on decision tree learning. It involves building a large number of specialized decision trees and then ensembling their outputs. Random forests are known to be the second-best algorithm for a shallow task. 

In 2014, Gradient Boosting Machines started being more favored over Random Forest Algorithms. Gradient Boosting Machine is a machine learning technique that is also based on ensembling weak prediction models, but the difference being this algorithm uses [**Gradient Boosting**](https://towardsdatascience.com/understanding-gradient-boosting-machines-9be756fe76ab). Gradient Boosting is a way to improve the Machine Learning model by iteratively training new models that specialize in addressing the weak points of the previous models. It is probably one of the best algorithms for dealing with non-perceptual problems today.

## Conclusion

Now that we have a basic understanding of Machine Learning algorithms, we are ready to dive deeper into Deep Learning. As always, Thank you for making it this far, and I hope to see you in the next article where we talk about the Mathematical Blocks of Neural Networks. 

See you there! 


