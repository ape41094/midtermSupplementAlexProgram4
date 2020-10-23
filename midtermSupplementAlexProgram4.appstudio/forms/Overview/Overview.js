// global variables for database calls
let req = ""
let query = ""
let results = ""
let pw = "BIA375!"  // put your database password here
let userName = "clc90595"
let allPetDate = []

/*
*** Slowest thing your app will do it talk to the Database. So minimize 
contact with it. 

Steps to interact with a database: 
1. create a query.
2. use AJAX call to run a .php program on the DB server that does the 
   following: 
   > logs into your database account on the database server.
   > runs the sql query you sent. 
   > packages the results of the query and other information 
     (ie status code) into an object (large variable) and returns the 
     object to your app. 
3. see if the AJAX transit trip over the Internet to the database server 
   and back worked correctly and make sure that the server was running. 
   > Check the status code that is returned in the object: 200 means the 
     transit was successful and without error.
4. if the transit trip was successful, now see if the query worked. 
   > check what was returned in the object - in the property '.responseText'. 
   > the results returned depend on the query: 
      - SELECT query - returns data 
      - DELETE or UPDATE: returns code 500 - on our database server, 
        this means that you successfully ran a query that doesn't 
        return data.

HINTS for writing database code correctly:  
1. *** PLAN *** - write an algorithm first before starting to code!
2. Test your query in the database to see if it returns the results you want. 
   If it works correctly, copy and paste it into appStudio and adjust 
   it as needed.
3. Use standard variable names like req and query and result in your JS code. 
4. Declare the variables you are using in the code at the very top of the 
   form so you can use them throughout the entire project (eg. 'req'). 
5. Best practice: retrieve data you need when the form loads (.onshow) so
   your program runs faster.
       
FORMAT OF QUERIES IN YOUR JAVASCRIPT CODE
The query has to be adjusted in your code from the standard form. 
   Examples: 
     Database: SELECT * from MyStuff;
     Javascript: let query = "SELECT * from MyStuff"
         
    Database: SELECT firstName from MyStuff WHERE firstName = "Jane";
    Javascript: 
        let fname = inptName.value
        let query = "SELECT firstName from myStuff WHERE firstName =" + '"' + fname + '"' 
    
// ********************************************************

WRITING CODE

// ********************************************************

1. SELECT query - Lets you get data from the database during runtime.
        
DO TOGETHER 
> Run the project - pick'DemoSelectPetTypes' from the menu  
> Walk through the code to see what it does. 
  and then run it. 


// #########################################################
ACTIVITY 1: practice doing a SELECT query at runtime
  
  Go to the 'activitySelectPetTypes' form. Adjust the 
  code to work with your database account. Then add code  
  so the user enters a pet type to display, 
  clicks a button and the program gets all of the 
  pets of that type from your 'pets' table and displays their 
  names in a textarea control. 

// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************

2. INSERT - insert a new pet into the database at runtime.

DO TOGETHER: INSERT
> pick 'DemoInsertPets' from the menu
> Walk through the code and then run it. 

// #########################################################
ACTIVITY 2: practice doing an INSERT at runtime
  Go to the 'activityInsertPets' form. 
  There are two errors in the event handler code. Fix them and 
  then use this to add a pet into your pets table. 

// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************


3. DELETE is a bit of a special case because you can't delete 
a pet that isn't in the database. So you must make sure the 
item the user wants to delete is in the database before you 
ask to delete it. 

DO TOGETHER: DELETE
> pick 'DemoDelPets' from the menu
> Walk through the code and then run it. 

// #########################################################
ACTIVITY 3: 
  In the 'activityDelPets' form, make it interact with your 
  pets database. 
  Then change the code so it gets a 'type' from the user, 
  then deletes all pets of that type. 
  ** Only use only 2 ajax calls. 

// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************


4. UPDATE - Like the DELETE, you can't update/change a pet 
that isn't in the database. So you must make sure the pet 
the user wants to update is in the database. 

TOGETHER: UPDATE
Together go to 'DemoUpdatePets' form
Walk through the code and then run it. 

// #########################################################
ACTIVITY 4: 
  In the activityUpdatePets form, use your new 'petInventory' 
  database. 
  Change the program so it changes the petName field for all
  cats to 'Fuzzy' (a mean thing to do - just proof of concept!)

// *********************************************************
*/


btnDemoSelectPetTypes.onclick=function(){
  ChangeForm(DemoSelectTypePets)
}
btnActivitySelectPetTypes.onclick=function(){
    ChangeForm(activitySelectTypePets)
}
btnDemoInsertPets.onclick=function(){
  ChangeForm(DemoInsertPets)
}
btnActivityInsertPets.onclick=function(){
  ChangeForm(activityInsertPets)
}
btnDemoDeletePets.onclick=function(){
  ChangeForm(DemoDelPets)
}
btnActivityDeletePets.onclick=function(){
  ChangeForm(activityDelPets)
}
btnDemoUpdatePets.onclick=function(){
  ChangeForm(DemoUpdatePets)
}
btnActivityUpdatePets.onclick=function(){
    ChangeForm(activityUpdatePets)
}
