window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    // var button = document.getElementById("my-form-button");
    const form = document.getElementById("form");
    // const first = document.getElementById("firstChild");

    // Success and Error functions for after the form is submitted
   

    

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        showStatus("Thanks!","success");
      } else {
        showStatus("Oops! There was a problem.","error");
      }
    };
    xhr.send(data);
  }
   
  function showStatus(msg,className) {
    form.reset();
  //   button.style = "display: none ";
  //   status.innerHTML = "Thanks!";
    let div = document.createElement('div');
    div.className=className;
    div.appendChild(document.createTextNode(msg));
    // const form = document.getElementById("form");
    const first = document.getElementById("firstChild");
    form.insertBefore(div,first)
    setTimeout(function(){
        div.remove();
    },3000)
  }