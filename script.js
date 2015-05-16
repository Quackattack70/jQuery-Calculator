$(document).ready(function(){
     var screentxt = "";
     $("#equals").click(function(){
           $("#scrtext").append("<br \>" + eval(screentxt));
     })
     $("#one").click(function(){
          $("#scrtext").append("1");
          screentxt += "1";
     })
     $("#two").click(function(){
          $("#scrtext").append("2");
          screentxt += "2";
     })
     $("#three").click(function(){
          $("#scrtext").append("3");
          screentxt += "3";
     })
     $("#divide").click(function(){
          $("#scrtext").append("/");
          screentxt += "/";
     })
     $("#four").click(function(){
          $("#scrtext").append("4");
          screentxt += "4";
     })
     $("#five").click(function(){
          $("#scrtext").append("5");
          screentxt += "5";
     })
     $("#six").click(function(){
         $("#scrtext").append("6");
         screentxt += "6";
     })
     $("#multiply").click(function(){
         $("#scrtext").append("x");
         screentxt += "*";
     })
     $("#seven").click(function(){
         $("#scrtext").append("7");
         screentxt += "7";
     })
     $("#eight").click(function(){
         $("#scrtext").append("8");
         screentxt += "8";
     })
     $("#nine").click(function(){
         $("#scrtext").append("9");
         screentxt += "9";
     })
     $("#add").click(function(){
         $("#scrtext").append("+");
         screentxt += "+";
     })
     $("#zero").click(function(){
         $("#scrtext").append("0");
         screentxt += "0";
     })
     $("#float").click(function(){
        $("#scrtext").append(".");
        screentxt += ".";
     })
     $("#compare").click(function(){
        $("#scrtext").append("==");
        screentxt += "==";
     })
    $("#minus").click(function(){
        $("#scrtext").append("-");
        screentxt += "-";
    })
    $("#reset").click(function(){
        $("#scrtext").empty();
        screentxt = "";
    })
});
