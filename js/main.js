$("#danger-alert").hide();

function addDataNow() {
    if (inputData.value == "" || inputLabel.value == "") {
        $("#danger-alert").show(300);
    } else {
        addData(myChart, inputLabel.value, inputData.value, inputColor.value);       
        $("#danger-alert").hide(30);
    }
}


function removeDataNow() {
    removeData(myChart);
  }
  
  btn.addEventListener('click', addDataNow);
  removeBtn.addEventListener('click', removeDataNow);
  // Get the input field


    // Execute a function when the user releases a key on the keyboard
    inputColor.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("add-data").click();
        }
      });