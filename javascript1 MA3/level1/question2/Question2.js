<!--Contact Form--> 1.	Create a contact form. It should have an input for name, last name, telephone number, email address and submit button. Validate that 'name' and 'last name' inputs are not empty and use regex expressions to validate the telephone and email addresses respectively. Call a function when the submit button is clicked to test these.
                     
       <form onsubmit="myForm()">
            <label for="firstname">First name</label>
            <input type="text" name="firstname" pattern="^[a-z A-Z]+$" id="firstname">
            
            <label for="lastname">Last name</label>
            <input type="text" name="lastname" pattern="^[a-z A-Z]+$" id="lastname">
            
            <label for="email">E-mail</label>
            <input type="text" name="email" pattern="^[a-zA-Z0-9 ._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" id="email">
            
            <label for="telephone">Telephone</label>
            <input type="text" name="telephone" pattern="^(0047|\+47|47)?[2-9]\d{7}$" id="telephone">
            
         <button type="button" name="submit" id="submit">Submit</button>   
        </form>
        
        <script>
            document.getElementById("submit").addEventListener("click", function(){
        
                var theInput = document.getElementsByTagName("input");
                
                for(var i=0; i < theInput.length; i++){
                    var theValue = theInput[i].value;
                    var theRegex = new RegExp(theInput[i].pattern);
                    var theTest = theRegex.test(theValue);
                    
                    if(theTest === false){
                        console.log(theInput[i].name + " is invalid")
                    }
                    
                    else {
                        console.log(theInput[i].name + " is valid")
                    }  
                }
            })
        </script>