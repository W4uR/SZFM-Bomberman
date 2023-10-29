function validateForm() {
    // Get the bug description text area
    var bugDescriptionTextarea = document.getElementById('textArea');
    
    // Check if the bug description text area is empty
    if (bugDescriptionTextarea.value === '') {
      // The bug description text area is empty, so display an error message
      alert('The bug description cannot be empty.');
  
      // Return false to prevent the form from being submitted
      return false;
    }
    alert('Sending data is successfull.');

    // The bug description text area is not empty, so return true to allow the form to be submitted
    return true;
}

function closeWindow(){
    window.close();
}

