/*
Delete from database (assume pet names are unique)
  Algorithm
  1. get all the pets from the database
  2. get the name of the pet they want to delete. 
  3. see if that name is in the database
  4. if it is not in the database, tell them so and done
  5. if it is in the database, run query (ajax)
        - if transit worked, see if .responseText is 500 - if it is, 
          Delete worked - tell them so
        - if .responseText is not 500, tell them delete didn't work
    > if transit didn't work, tell them transit error
*/

DemoDelPets.onshow=function(){
     // get all the pet data from the database when program loads
    query = "SELECT * FROM pets"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit worked.
        allPetData = JSON.parse(req.responseText)
        console.log(results)
    } else {
        // transit error
        lblMessages5 = `Error: ${req.status}`
    }  
}


btnDelete.onclick=function(){
    let petNameDel = inptNameDel.value
    
    // make sure the pet name is in the database before you try to delete it
    let found = false
    for (i = 0; i <= allPetData.length - 1; i++) {
        if (petNameDel == allPetData[i][1])
            found = true
            break // if found the item in the database jump out of loop
    }
    if (found == false) 
       lblMessage5.textContent = "That pet name is not in the database."
    else if (found == true) {
      query = "DELETE FROM pets WHERE petName = " + '"' + petNameDel + '"'
      alert(query)
      
      // replace my netID with yours
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    // means the insert succeeded
                lblMessage5.textContent = `You have successfully deleted the pet named ${petNameDel}`
            else
                lblMessage5.textContent = `There was a problem deleting ${petNameDel} from the database.`
      else
        // transit error
        lblMessage5.textContent = `Error: ${req.status}`
      } // found isi true
}






