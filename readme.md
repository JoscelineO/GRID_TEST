### Developer Grid Test

#### Instructions

Right click on index.html and click 'open in browser'

#### Assumptions

* The minimum number of events is 5
* The maximum number of events is 200
* Tickets have a minimum price of $0.01
* Tickets have a maximum price of $100.00
* The maximum number of tickets per event is 100

#### Changes to support multiple events at a single location

Currently each square on the grid is an object with the properties x, y and taken. When events are assigned co-ordinates the app checks the square object with corresponding x and y values. If the property taken is false it assigns those co-ordinates to the event and changes the property taken to true. This way no additional events can have this co-ordinate.

To allow multiple events at one co-ordinate I would need to remove the condition which prevents co-ordinates being assigned to an event when the square with corresponding x and y values does not have the property false.   

Having done this the next thing I may want to think about is how to display the events. For example currently it is only possible to a maximum of 4 events at a distance of 1 from the user. If we allowed a co-ordinate to have multiple  

#### Changes for a larger world size

Currently the function which makes the grid takes the value from the variable gridSize and sets the max x and y values to equal this and the min x and y values to the negative of this. This means that by changing the value of the gridSize variable we can control the size of the grid and therefore the world size. To create a larger world size we would increase the value of the variable gridSize.   
