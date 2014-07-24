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
	- Angular 1.2
	- Node
	- Express
	- 

	Server side
	-----------
	- bower (for client side package management)
	- npm (for server side package management)
	- grunt (for work flow tasks: js & css minify, css less, nodemon, reduce Angular structure to single js file)

	Client side
	-----------
	- Angular 1.2
	- UI router
	- Restangular
	- lodash.js
	- moment.js
	- Bootstrap CSS (with collapse)

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