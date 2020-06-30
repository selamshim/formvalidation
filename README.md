#what is this

this is registration form validation 

#installation 

`npm i formvalidationr --save`

Then...

```
import {formvalidation} from formvalidation
```

Then html form may contain

```
  <form name="registerform" method="post" action="" onsubmit="return formvalidation()" >  
        Name: <input type="text" name="name"><br/> 
        email: <input type="text" name="email"><br/>  
        phonenumber: <input type="text" name="phonenumber"><span id="num"></span><br/>  
        Password: <input type="password" name="password"><br/>  
        Re-enter Password:<input type="password" name="password2"/><br/>  
        <input type="submit" value="register">

    ```
