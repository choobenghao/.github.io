function bigimg(x){
    x.style.height = "500px";
    x.style.width = "500px";
    }
function normalimg(x){
    x.style.height = "300px";
    x.style.width = "100%";
    }

function bigimgcamp(x){
    x.style.height = "500px";
    x.style.width = "500px";
        }
function normalimg(x){
    x.style.height = "300px";
    x.style.width = "100%";
        }

function validateForm() {
    let x = document.MyFirstForm.username.value;
    if (x == "") {
        alert("Please provide your Name!");
            return False ;
            }
    
            var letters = /^[A-Za-z]/;
            if (!x.match(letters))
            {
                 alert("Please input alphabet.");
                return False;
            }
    
            if((MyFirstForm.gender[0].checked == false) && (MyFirstForm.gender[1].checked == false))
            {
             alert ("Please choose Gender: Male or Female");
            return false;
            }
    
            var group = document.MyFirstForm.fav_sub;
            for (var i=0; i<group.length; i++)
            {
                if (group[i].checked)
                break;
            }
                if (i ==group.length)
            {
                alert("No Checkbox is checked");
                return false;
            }
    
            var date1 = new Date();
            var dob= document.MyFirstForm.dob.value;
            var date2 = new Date(dob);
            var y1 = date1.getFullYear(); //getting current year
            var y2 = date2.getFullYear(); //getting dob year
            var age = y1 - y2; //calculating age
            alert("Age ; " + age); 
            return true;
        }