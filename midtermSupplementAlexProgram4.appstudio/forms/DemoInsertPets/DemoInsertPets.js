/*
INSERT a pet into the database (assume it is not already in the database)
  Algorithm
  1. get the name and type of the pet they want to insert into the database.
  2. create insert query
  3. test the query in the database
  4. run query (ajax call)
    > if transit worked, check .responseText for query results
         - if .responseText is 500, means the insert worked - tell user so
         - if .responseText is not 500, means the insert did not work - tell user so
    > if transit didn't work, tell user error in transit
*/

btnSubmit.onclick=function(){
    let name = inptName.value
    let animalType = inptType.value
    let query = "INSERT INTO pets (petName,petType) VALUES ('" + name + "', '" + animalType + "')"
    // look at how the query is rendered
    alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMessage3.textContent = "You have successfully added the pet!"
        else
            lblMessage3.textContent = "There was a problem with adding the pet to the database."
    } else 
        // transit error
        lblMessage3.textContent = "Error: " + req.status
}


