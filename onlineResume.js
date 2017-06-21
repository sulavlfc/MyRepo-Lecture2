/**
 * Created by Sulav on 6/17/2017.
 */

function myFunction(){
    console.log("hello")
    var className = document.getElementsByClassName("container");
    var c = "childs";
     className[0].append(c);
};

// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log(window.innerWidth)
//     // var pinfo = document.getElementById("personalInfo");
//     // pinfo.width = window.innerWidth;
//     var pinfo = document.getElementsByClassName("container");
//     pinfo[0].width = window.innerWidth;
// })