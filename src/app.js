console.log('app.js check 1: %cpassed', 'color: green');
//verification row non editable
const table = document.getElementById("myTable");
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[5];
    cell.contentEditable = false;
}
for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[4];
    cell.contentEditable = false;
}
//append new members function
function addMember() {
    var addmember = document.getElementById("addmember").value;
    var verificationcell = document.getElementsByClassName("verificationcell");
    
       verificationcell.textContent += addmember;
    for (var i = 0; i < verificationcell.length; i++) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "verify";
        verificationcell[i].innerHTML += checkbox.outerHTML + " " + addmember + "<br>";
    } 
   
}
var submitmember = document.getElementById("submitNewMember");
submitmember.addEventListener("click", addMember);
submitmember.addEventListener("click", function() {
    addmember.value = "";
  });

//clear member list function
function clearMembers() {
    var verificationcell = document.getElementsByClassName("verificationcell");

    for (var i = 0; i < verificationcell.length; i++) {
        verificationcell[i].textContent = "";
    }
}
var clearbutton = document.getElementById("deleteMembers");
clearbutton.addEventListener("click", clearMembers);
//check for checkboxes yeah
function calcPts() {
    for (let i = 0, row; row = table.rows[i]; i++) {
        let checkboxes = row.cells[5].getElementsByTagName("input");

        if (checkboxes.length > 0) {
            let allChecked = true;

            for (let j = 0; j < checkboxes.length; j++) {
                if (!checkboxes[j].checked) {
                    allChecked = false;
                    break;
                }
            }
            let checkCompletion = row.cells[3].getElementsByTagName("select")[0].value === "completed";
            let dropdownValue = row.cells[1].getElementsByTagName("select")[0].value;

            if (allChecked && checkCompletion && dropdownValue) {
                row.cells[4].innerHTML = dropdownValue;
            } else {
                row.cells[4].innerHTML = "";
            }
        }
    }
}

const customrc = document.getElementById("customrc");
const rcb = document.getElementById("saverc");
const rst = document.getElementById("defaultrc");
let checkRate = 500;

rcb.addEventListener("click", function() {
  const rcValue = customrc.value.trim();
  if (!isNaN(rcValue) && rcValue !== "") {
    checkRate = parseFloat(rcValue);
    console.log("success, custom checkrate is now" + checkRate);
  } else {
    alert("you dingus it has to be a number");
  }
});
rcb.addEventListener("click", function() {
    customrc.value = ""
})
rst.addEventListener("click", function() {
    checkRate = 500;
    console.log('reset check rate')
})
setInterval(calcPts, checkRate)
// cell background according to dropdown option (todo)
// modal toggles
let usage = document.getElementById("usage");
let closeusage = document.getElementById("closeusage")
usage.addEventListener('click', function() {
    document.getElementById('usemodal').style.display='block'
});
closeusage.addEventListener('click', function() {
    document.getElementById('usemodal').style.display='none'
});

let info = document.getElementById("info");
let closeinfo = document.getElementById("closeinfo")
info.addEventListener('click', function() {
    document.getElementById('infomodal').style.display='block'
});
closeinfo.addEventListener('click', function() {
    document.getElementById('infomodal').style.display='none'
});

let bugs = document.getElementById("bugs");
let closebugs = document.getElementById("closebugs")
bugs.addEventListener('click', function() {
    document.getElementById('bugsmodal').style.display='block'
});
closebugs.addEventListener('click', function() {
    document.getElementById('bugsmodal').style.display='none'
});

let soon = document.getElementById("soon");
let closesoon = document.getElementById("closesoon")
soon.addEventListener('click', function() {
    document.getElementById('soonmodal').style.display='block'
});
closesoon.addEventListener('click', function() {
    document.getElementById('soonmodal').style.display='none'
});

console.log('app.js check 2: %cpassed', 'color: green');
