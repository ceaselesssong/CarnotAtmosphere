
# Background
The game is based on a set of connected rooms with simulated atmosphere.

# 1 - make air 

Create a class for Air as an immutable value type. Air has two properties for Quality and Amount. Air has a Class method called Combine, which takes two Air objects and returns the sum of their qualities.

# 2 - create visual repesentation of a room

Create a react component with an Room prop to represent a room. I want it to be a rectangle 200 pixels tall and 400 pixels wide. Make the rectangles color depend on the quality of the rooms air, interpolating between brown for 0 quality and light blue for 1 quality.