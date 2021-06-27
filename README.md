# hoc-wrapper-hijacking-component
hoc-wrapper-hijacking-component

PROJECT STRUCTURE : 

	• App.js thats import the dashboardWrapper function.
	• wrapperHOC that import Dashboard.js and validates if theres any logged user. If dont , the wrapper only sends a message different from that one is logged in. If validate that theres logged user, the wrapper only calls super.render(), I mean the original dashboard.js
	• DashBoard.js is a dashboard functionality. Here is just a simple example.







__________________________________________________________________________________________

Running code in the browser with a logged user : (passing property user = "Tommy")


Output is : 

Wrapper function : 




___________________________________________________________________________________________

Running code in the browser without a logged user : 



Output is : 


Wrapper function : 





Simple conclusion

Now we have a component that wrapps (HiJacking) the Dashboard component. Lets suppose we have a complex dashboard component or we have a lot of dashboard components extending a lot of requirements. Its not a good idea to  start changing each one.
This way we can wrapper the dashboard component like did in the examples above.

We can work in the wrapper component and let the dashboard the way it is.


![image](https://user-images.githubusercontent.com/14879580/123545408-3d30ae00-d72e-11eb-8834-67d9a8e82312.png)


