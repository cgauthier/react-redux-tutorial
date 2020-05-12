# React Redux Tutorial

The purpose of this repository is to create a progressive sample project that demonstrates how to work with redux and implement a react-redux project.

You will need nodejs installed for this tutorial.


## Table of Contents

- Versions of Software Used For this Tutorial
- Structure of the Tutorial
- Tutorial Breakdown
- Installation Instructions valid for all parts of the tutorial
- Overview of Tutorial Parts


## Versions of Software Used For this Tutorial

node:           12.16.2
react:          16.13.1
redux:          4.0.5
react-redux:    7.2.0
redux-thunk:    2.3.0
redux-saga:     1.1.3

Note: at the writing of this tutorial, these were all the latest versions available (05/10/2020)


## Structure of the Tutorial
The tutorial is divided into parts, each part is in it's own folder.
Any new part, unless otherwise specified will build on the previous part, there is nothing self-contained.


## Tutorial Breakdown

- Part 01 - Understanding Redux


## Installation Instructions valid for all parts of the tutorial

1) npx create-react-app xxxx <- React app scaffolding
2) cd directory to xxxx
3) in the order below, install the following (redux, react-redux and redux-thunk)

- npm i redux --save-dev
- npm i react-redux --save-dev
- npm i redux-thunk --save-dev
- npm i redux-saga --save-dev


## Overview of Tutorial Parts


### Part 01 - Understanding Redux

folder: part_01_understanding_redux

Live Link: http://www.claudegauthier.net/tutorials/react-redux/part_01_understanding_redux/

Live Link: [Link](http://www.claudegauthier.net/tutorials/react-redux/part_01_understanding_redux/ "title" target="_blank")



This gives you a high level understanding of Redux, we take a sample React app based on create-react-app and create a very basic but comprehensive scenario were you:

1) create a redux store
2) subscribe a callback to the redux store
3) add data (see the callback in action)
4) get the data in the redux store

You will use the browser's console.log to test the code


