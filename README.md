# Algorithm exercises
This repo contains a selection of algorithm implementations in JavaScript, for the purpose of subject grading.
## How to run
To install required dependencies:

	npm install
To run the included test suites:

	npm test
or

	npm test (name of algorithm)
to run tests for only a single algorithm.
## Implemented algorithms:
### fib:
Returns the n-th number of the fibonacci sequence by using three variables to store the current number of the sequence, the previous one, and the one before that, and incrementing through them until the loop reaches the desired position.
### fromlast:
Returns the n-th from last element of a given list, without the use of the "size" function. Instead, it moves two pointers across the lists, one to reach the last element, and the other to return the proper element based on the last one.
### matrix:
Returns a spiral 2D matrix of n elements by iterating through a loop of four loops moving through rows and columns in both directions.
### sorting:
Contains four functions implementing simple sorting algorithms: bubble sort, selection sort, merge sort, and a helper function to the merge sort which merges two arrays.
### vowels:
Returns the amount of vowels present in a given string by iterating through the string and comparing the lowercase-converted character of the string to a list of vowels, incrementing a counter and returning that counter after the loop is done.
