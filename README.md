# hoc-wrapper-hijacking-component
hoc-wrapper-hijacking-component

PROJECT STRUCTURE : 

	• App.js thats import the dashboardWrapper function.
	• wrapperHOC that import Dashboard.js and validates if theres any logged user. If dont , the wrapper only sends a message different from that one is logged in. If validate that theres logged user, the wrapper only calls super.render(), I mean the original dashboard.js
	• DashBoard.js is a dashboard functionality. Here is just a simple example.




![image](https://user-images.githubusercontent.com/14879580/123545408-3d30ae00-d72e-11eb-8834-67d9a8e82312.png)


