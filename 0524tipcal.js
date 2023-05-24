
function calculate(){
    var billamount=document.getElementById("billamount").value ;
    var servicequality=document.getElementById("service_quality").value ;
    var numpeople=document.getElementById("total_people").value ;

    if(billamount==="" || servicequality == 0){
        window.alert("Please enter some values to get this baby up and running");
        return; //this will prevent the function from continuing
    }
    
    if(numpeople ==="" || numpeople <=1){
        numpeople=1;
        document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }

        var total = (billamount*servicequality)/numpeople ;
        total = Math.round(total*100)/100;
        total = total.toFixed(2);

        document.getElementById("total_tip").style.display = "block";
        document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("total_tip"). style.display ="none";
document.getElementById("each"). style.display = "none";