"use strict"

// Here we construct our URL
const queryURL = "https://devtest.equisolve-dev.com";

// request data 
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

// change string date to number
 //   let i;
    for (i = 0; i < response.length; i++) {
        let date = response[i].published_at;
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);
        let newDate = `${year}${month}${day}`;
        let dateNumber = parseInt(newDate);
        response[i].published_at = dateNumber;    
    }

    console.log("changed", response);

//   sort 

    response.sort(function (a, b) {
        return a.published_at - b.published_at;
    });

    console.log ("sorted", response);

// display in reverse order

    let displayDiv = $("<div>");
    for (var i = response.length-1; i > -1; i--) {
        let displayHeadline = $("<p>").text(response[i].title);
        displayDiv.append(displayHeadline);
    };


    $("#headlines").append(displayDiv);

});



