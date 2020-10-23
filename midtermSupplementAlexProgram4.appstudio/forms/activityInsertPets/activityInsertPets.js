/*


btnSubmit22.onclick=function(){
    name = inptName.value
    animalType = inptType.value
    query = "INSERT INTO pets (petName,petType) VALUES ('" + name + "', '" + animalType + "')"
    // look at how the query is rendered
    alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMessage4.textContent = "You have successfully added the pet!"
        else
            lblMessage4.textContent = "There was a problem with adding the pet to the database."
    } else 
        // transit error
        lblMessage3.textContent = "Error: " + req.status

}
*/