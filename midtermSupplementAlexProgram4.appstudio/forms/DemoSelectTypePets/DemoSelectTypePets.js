/*
SELECT from database (assume pet names are unique)
 Algorithm
 1. create global variables req and query and results if not already done
 2. create SELECT query
 3. look at query
 4. test SELECT query in Database
 5. run ajax call (which runs the query)
    > if transit works, parse results. 
      > if results is empty, means no pets of that type in DB and tell user
      > if results has something in it, show results
         - build a message with each name
         - output the message into a control
    > if transit didn't work, tell user error in transit
*/
DemoSelectTypePets.onshow=function(){
    // set height property of textarea control 
    // - special code
    txtResults_contents.style.height = "100px"
}

btnSeePets.onclick=function(){
    query = "SELECT * FROM pets"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit trip worked.
        // Reminder
        // > req1.responseText is a JSON object with the results of the query in it.
        // > convert it to a format that you can work with
        // > parse it from a JSON object (JS Object Notaton) into an array that holds
        //   each row as an array in it. So a big array that holds small arrays, each 
        //   of which is a row from the query results returned. 
        
        console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)

        results = JSON.parse(req.responseText)
        // see if results are correct
        console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
        
    if (results.length == 0)    // no results were returned by the query
        lblMessage1.textContent = "There are no pets in the database."
    else {        // query results were returned
        // this is what the results look like: 
        // [[47,"Paul","dog"],[23,"Marty","dog"],[34,"Jack","horse"]]  
        //    0                 1                    2
        // The first row,index 0 in the big array is an array: 
        //     [47,"Paul","dog"]
        //       0    1      2
        // so to get name of first pet:  arrayName[0][1]


        // Take a closer look:
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
        console.log(`to get to Paul, need results[0][1]: ${results[0][1]}`)


        // Now output the names of all the dogs into the textArea control:
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtResults.value = message
     } // end else

  } else   // the transit didn't work - bad wifi? server off?
        //transit error - Handle that with an error message.
        lblMessage1.textContent = "Error code: " + req.status
}

