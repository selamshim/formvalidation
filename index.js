function formvalidation(){  
    var name=document.registerform.name.value;  
    var phonenumber=document.registerform.phonenumber.value;  
    var email=document.registerform.email.value;  
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    var password=document.registerform.password.value;  
    var password2=document.registerform.password2.value; 
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if (isNaN(phonenumber)){  
        document.getElementById("num").innerHTML="Enter Numeric value only";  
        return false;  
    }else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;     
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  

    } else if(password==password2){  
        return true;  
        }  
        else{  
        alert("password must be same!");  
        return false;  
        
    }
}
module.exports.formvalidation = formvalidation;