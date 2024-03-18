// Get the element you want to add the event listener to

function clickAlert() {
    alert('I was clicked!');
  }
  
  function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', clickAlert);
  }
  
  document.addEventListener('DOMContentLoaded', addingEventListener);