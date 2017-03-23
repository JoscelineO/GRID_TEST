### Developer Grid Test - Josceline O'Sullivan

#### Instructions

From GitHub:

* Click the clone or download button above and click the Download ZIP option. This should download a zipped version of the 'GRID-TEST-master' directory to your downloads folder.
* Unzip the file.
* Open the directory and right click on index.html and click 'open in browser'.

Right click on index.html and click 'open in browser'

#### Assumptions

* The minimum number of events is 5
* The maximum number of events is 200
* Tickets have a minimum price of $0.01
* Tickets have a maximum price of $100.00
* The maximum number of tickets per event is 100
* All x and y co-ordinates for events are whole numbers

#### Changes to support multiple events at a single location

Currently each square on the grid is an object with the properties x, y and taken. When events are assigned co-ordinates the app checks the square object with corresponding x and y values. If the property taken is false it assigns those co-ordinates to the event and changes the property taken to true. This way no additional events can have this co-ordinate.

To allow multiple events at one co-ordinate I would need to remove the condition which prevents co-ordinates being assigned to an event when the square with corresponding x and y values does not have the property false.   

Having done this the next thing I may want to think about is how to display the events. For example currently it is only possible to have a maximum of 4 events at a distance of 1 from the user. If we allowed a co-ordinate to have multiple events it would be possible to have infinite number of events at a distance of 1 from the user but only 5 of these would be displayed.  

To resolve this, instead of displaying the top five events, I could display the top five co-ordinates containing events and list all of the events happening at this co-ordinate. To do this I would need to make events a property of the square object, rather than assigning x and y properties to an event. This property would contain an array of the events at this co-ordinate. Once I had done this I could find the 5 squares with the x and y values closest to the users x and y co-ordinates and the loop through the events property array to display the events assigned to this co-ordinate.  

#### Changes for a larger world size

Currently the function which makes the grid takes the value from the variable gridSize and sets the max x and y values to equal this and the min x and y values to the negative of this. This means that by changing the value of the gridSize variable we can control the size of the grid and therefore the world size. To create a larger world size we would increase the value of the variable gridSize.   
