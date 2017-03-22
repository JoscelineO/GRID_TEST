#### Instructions

Right click on index.html and click 'open in browser'

#### Assumptions

* The minimum number of tickets is 5
* The maximum number of tickets is 200
* Tickets have a minimum price of $0.01
* Tickets have a maximum price of $100.00

#### Changes to support multiple events at a single location

Currently each square on the grid is an object with the properties x, y and taken. When events are assigned co-ordinates the app checks the square object with corresponding x and y values. If the property taken is false it assigns those co-ordinates to the event and makes changes taken to true. This way no additional events can have this co-ordinate. 

#### Changes for a larger world size
