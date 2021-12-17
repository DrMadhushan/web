const afterMessage = () => {
  document.contactForm.submit();
  console.log("sending data");
  let result = document.getElementById("res-msg");
  var ifConnected = window.navigator.onLine;
  if (ifConnected) {
    result.innerHTML = `
        <div class="alert alert-success" role="alert">
          Message sent successfully!
        </div>
      `;
  } else {
    result.innerHTML = `
        <div class="alert alert-warning" role="alert">
          Message not sent!<br>
          Check your internet connection.
        </div>
      `;
  }
  //console.log(document.getElementById("my-response-iframe").contentWindow.location.href);
  //console.log(document.getElementsByClassName('freebirdFormviewerViewResponseMessage').innerHTML);
  // console.log(document.contactForm.response);
  document.contactForm.reset();
};
