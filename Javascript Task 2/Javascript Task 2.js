var data = [
            {principal:2500,time:1.8},
            {principal:1000,time:5},
            {principal:3000,time:1},
            {principal:2000,time:3}
            
             ];
             

function interestCalculator(myArray){

var interestData = [];

    for(var i =0; i < myArray.length; i+=1)
    {
            var principal = myArray[i].principal;
 var time = myArray[i].time;
 var rate;
 var interest;
 
     if(principal >= 2500 && (time > 1 && time < 3)){
     rate = 3;
      }
             
     else if(principal >= 2500 && time>=3){
     rate = 4;
      } 
             
     else if(principal < 2500 || time <=1){
     rate = 2;
      }
             
     else{
    rate = 1;
    }
             
      interest = (principal * time * rate)/100;
      
         interestData.push({principal:principal, rate:rate, time:time, interest:interest }); 
            
    }
    
    
    for(var i = 0; i <interestData.length; i+=1){
    console.log("Principal: " + interestData[i].principal);
    console.log("Time: " + interestData[i].time);
    console.log("Rate: " + interestData[i].rate);
    console.log("Interest: " + interestData[i].interest +  "\n");
    }
    return interestData;
}

interestCalculator(data);
