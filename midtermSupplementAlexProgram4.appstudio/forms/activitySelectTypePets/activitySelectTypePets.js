/*
Algorithm
1. set up the req and query global variables
2. set up height of the textarea control: 
    txtResults_contents.style.height = "200px"
3. get the type the user entered
4. create a query using this type
5. test the query on the database server
6. set up the AJAX call
7. get results - see if status = 200
8. if OK transit, get results and parse from JSON
   string to a JS object (array of little arrays, one per
   row returned)
9. if the array length is not 0, means results came back. So
   go through the results array and build a message that contains each name returned that you can output.
10. output the message with the names of the pets into
    control.
11. add else error messages (output into the label)
*/

