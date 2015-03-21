# create-edit-update-and-delete-application-in-node.js-with-mysql
Create Edit update and delete application in node.js and mysql 

Create Edit update and delete application in node.js and mysql 

Instruction 

How to install it 

First need to create the mysql database and then create the table. This is entity for tables. 

Create database via command line 
mysql -u root -phone -p 
enter your mysql password

Create database 
create database nameofdatabase;

Select that database 
Use nameofdatabase;

Create table 

CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;


Install nodejs 

further instruction about nodejs installation https://nodejs.org/

Then install npm https://www.npmjs.com/

then run npm command - npm install 

after run the application in nodejs command line - node app.js

thes pls check your brower with 4300 port. 

like localhost:4300 or http://yourio:4300

Thank you 

