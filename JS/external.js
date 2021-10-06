// Introduction: - show time / time refresh / time removal
const d = new Date();
document.getElementById("dateToday").innerHTML = d;

function refreshFunction() {
  document.getElementById("dateToday").innerHTML = new Date();
}

function removeFunction() {
  document.getElementById("blockRemove").remove("blockRemove");
}


// Project: load / Scroll / mouse over

// load
function loadFunction() {
  alert("Page is loaded");
}

// scroll to specific block
function goPrintFunction() {
  var elmnt = document.getElementById("printProjects");
  elmnt.scrollIntoView();
}

function goDigitalFunction() {
  var elmnt = document.getElementById("digitalProjects");
  elmnt.scrollIntoView();
}

//mouse over change pic
	function MouseRollover(changeFit) {
       	 changeFit.src="Special2.jpg";
    }
	function MouseOut(changeFit) {
        	changeFit.src="Special1.jpg";
    }