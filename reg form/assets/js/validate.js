

var p = {};




function full_validate()
{

  var name = document.getElementById("name_val").value;   
  var usn = document.getElementById("usn_val").value; 
  var email = document.getElementById("email_val").value;
  var pass = document.getElementById("pass_val").value; 
  var con_pass = document.getElementById("con_pass_val").value; 
  var terms= document.getElementById("term_val").checked;

  if((name&&usn&&email&&pass&&con_pass)=="")
  {
    alert("Please enter all the fealds");
    return false;
  }    

  else if(terms==false)
  {
    alert("Please accept terms and condition");
    return false;

  }

}

















function error_msg_1()
{


   var name = document.getElementById("name_val").value; 

   if(name=="")
   {

     document.getElementById("error_1").innerHTML="<p id=error1><img src=f.png></p>";
     return false;
     
   }
   else
   {
     
     document.getElementById("error_1").innerHTML="<p id=error1><img src=t.png></p>";

   }
   
}


function error_msg_2()
{


   var usn = document.getElementById("usn_val").value; 

   if(usn=="")
   {

     document.getElementById("error_2").innerHTML="<p id=error2><img src=f.png></p>";
     return false;
   }
   else
   {
     
     document.getElementById("error_2").innerHTML="<p id=error2><img src=t.png></p>";
     
   }

}



function error_msg_3()
{


   var email = document.getElementById("email_val").value; 

   if(email=="")
   {

     document.getElementById("error_3").innerHTML="<p id=error3><img src=f.png></p>";
     return false;
   }
   else
   {
     
     document.getElementById("error_3").innerHTML="<p id=error3><img src=t.png></p>";

   }

}



function error_msg_4()
{


   var pass = document.getElementById("pass_val").value; 
   p.p_val=pass;
   if(pass=="")
   {

     document.getElementById("error_4").innerHTML="<p id=error4><img src=f.png></p>";
     return false;
   }
   else
   {
     
     document.getElementById("error_4").innerHTML="<p id=error4><img src=t.png></p>";

   }
     
     


}




function error_msg_5()
{

   var pass=p.p_val;
   var con_pass = document.getElementById("con_pass_val").value; 
   
   if(con_pass==pass)
   {

     document.getElementById("error_5").innerHTML="<p id=error5><img src=t.png></p>";
   }
   else
   {
     
     document.getElementById("error_5").innerHTML="<p id=error5><img src=f.png></p>";
     return false;
    
   }
  
}
