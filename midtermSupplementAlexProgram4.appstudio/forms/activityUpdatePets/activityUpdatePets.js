/*
Update pet name (assume pet names are unique)
ADJUST THIS ALGORITH TO FIT YOUR NEW PROBLEM USING FUZZY

  Algorithm
  1. get all the pets from the database
  2. get the name of the pet they want to update. 
  3. get the name they want to use for the new name
  3. see if there are any pets with the original name in the database
  4. if there are not any in the database, tell them so and done
  5. if there is a pet with the original name in the database, run query (ajax)
         -if transit works, see if .responseText is 500 - if it is, 
          Delete worked - tell them so
         -if .responseText is not 500, tell them delete didn't work
    > if transit didn't work, tell them transit error
*/


