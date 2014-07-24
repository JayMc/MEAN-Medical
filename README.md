MEAN-Medical
============
Example medical clinic patient CRM using the MEAN stack

Objectives
==========

- Manage patient details
- Manage appointments for each patient and all patients for the entire day

Technologies Used
=================

	Overview
	--------
	- <database> (unsure at this stage: Mongo(with Mongoose) / MySQL (with Sequelize) / FireBase)
	- Express
	- AngularJS 1.2
	- Node.js

	Server side
	-----------
	- Node.js
	- Express
	- lodash

	Client side
	-----------
	- Angular 1.2
	- UI router
	- Restangular
	- lodash.js
	- moment.js
	- Bootstrap CSS (with collapse)
	- ng-Grid

	Tools
	-----
	- bower (for client side package management)
	- npm (for server side package management)
	- grunt (for work flow tasks: js & css minify, css less, nodemon, reduce Angular structure to single js file, live reload)

Directory structure
===================
/ (MEAN-Medical root)
| app/ (Node files)
  |routes.js (configure URLs for REST and static content)
| node_modules
| public/ (Node serves this dir to client)
  |dist/ 
  |src/ 
  |css/ 
  |js/ 
| views/ (Angular views - managed with UI-Router)

Get started
===========
- git clone
- npm install
- bower install
- grunt