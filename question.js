


/*const check = function(x){
 const trueanswer =["Markup Language","Fixed tags defined by the language","1990","HTML Tag","HyperText Markup Language","Tim Berners-Lee","img","Web Browser","Microsofts Bing","Angle"];
const score=0;
 for(i=0;i<trueanswer.length;i++){
    if (x[i] === trueanswer[i]){
         score ++;
    } 
    }
    return score;
}




//
  const body = document.querySelector("body");
    body.innerHTML = ""
    const z =[];
    console.log(z);
    for(x=1; x<=10 ; x++){
      let string=   "q" ;
  document.getElementsByName(string+x).forEach((Element,index) =>  {
      
         if(Element.checked) {
            z.push(Element);
         } 
    })

}
console.log(z);
return check(z);

*/


const result = () =>{
    const answer = [document.forms["questions"]["q1"].value,
     document.forms["questions"]["q2"].value,
     document.forms["questions"]["q3"].value,
     document.forms["questions"]["q4"].value,
     document.forms["questions"]["q5"].value,
     document.forms["questions"]["q6"].value,
     document.forms["questions"]["q7"].value,
     document.forms["questions"]["q8"].value,
      document.forms["questions"]["q9"].value,
     document.forms["questions"]["q10"].value]

    const trueanswer =["Markup Language","Fixed tags defined by the language","1990","HTML Tag","HyperText Markup Language","Tim Berners-Lee","img","Web Browser","Microsofts Bing","Angle"];
     let score = 0;
     for (let i =0 ; i < trueanswer.length ; i++){
        if (answer[i] === trueanswer[i]){
            score++
        }
       
        }
        
  if(score>=5){
    alert(score + " score is passed")
}else {
  alert(score + " score is faild");
}

    }
   
 

    
   
    


