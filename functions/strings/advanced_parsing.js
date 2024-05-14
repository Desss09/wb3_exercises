"use strict"

function parseAndDisplayName(someName) {
    //create a variable to hold the first name
    let fullName = someName;
    //find the postion of the first space
    let spacePostion = fullName.indexOf("");
    
    //create variables for the first and last name
    
    
    //for the first name we start at postion 0 and go to the space
    //since it does not include the character in the last postion, we get the first name
    let firstName = fullName.substring(0, spacePostion);
    
    //if we start at the space postion and do not supply and ending postion, it
    //gives us the charcters from the space until the end.
    //since we dont want the space, we add to the starting move us past the space
    let lastName = fullName.substring(spacePostion + 1)
    
    console.log(`
    Name: ${fullName}
    First name: ${firstName}
    Last name: ${lastName}
    `)
    }

   parseAndDisplayName("Cher");
   parseAndDisplayName("Brenda Kaye");
   parseAndDisplayName(" Dana Lynn Wyatt");