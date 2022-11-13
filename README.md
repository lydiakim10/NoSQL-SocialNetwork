# NoSQL-SocialNetwork

## Description
This homework assignment uses MongoDB, Express.js, and Mongoose packages to create a social network API.

## Table of Contents
* [Installation](#installation)
* [Test](#test)
* [Questions](#questions)

## Installation
In order to install this project, type "npm i" into your terminal to install the node packages. 

## Test
In order to test this project, type "npm start" into your terminal. 
  
Once it is running on a port, type "/api/users" as a get route to see all users. If you want to add a user, create a post route and type "{ "username": "desiredusername", "email": "emailadress@email.com" }". This will create a new user and it will show up when a get request is done. 
  
If you want to get, put, or delete a user by user ID, simply copy the userID and type "/api/users/:userId" into the URL. 
  
If you want to post or delete friends, type "/api/users/:userId/friends/:friendId" into the URL. 
  
If a user wishes to add a thought, they could create a post request by typing "/api/thoughts" into the URL and typing "{ "thoughtText": "thoughtwanted", "username": "desiredusername", "userId": "userid" }". In order to get, put, or delete a single thought, the user will input the thought ID into the URL after. 
  
If the user wishes to add a raection, type "/api/thoughts/:thoughtId/reactions" into the URL and include "{ "reactionBody" : "wantedreaction", "username": "desiredusername" }". 
  
If a user wants to delete that reaction, the user can do a delete request and type "/api/thoughts/:thoughtId/reactions/:reactionId" into the URL.

## Questions
If you have any questions, please feel free to reach out to me at:
* Github: https://github.com/lydiakim10
* Email: lydiakim10@yahoo.com

## Creating a New User Screenshot
![User](/assets/post-users.png)

## Creating a New Thought Screenshot
![Thought](/assets/post-thoughts.png)

## Video Link
[Video Link](/assets/NoSQL-SocialNetwork.webm)