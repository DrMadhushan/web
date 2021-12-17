// const sendMessage = (name, email, subject, message) => {
const sendMessage = (form) => {
  console.log("sending data");
  let result = document.getElementById("res-msg");

  if (
    !form.fname.value ||
    !form.email.value ||
    !form.subject.value ||
    !form.message.value
  ) {
    result.innerHTML = `
        <div class="alert alert-warning" role="alert">
            Required input fields empty!
        </div>
    `;
    return;
  }
  //   var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  let mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!mail_format.test(form.email.value)) {
    result.innerHTML = `
        <div class="alert alert-warning" role="alert">
            Invalid email address!
        </div>
    `;
    return;
  }

  const xhr = new XMLHttpRequest();
  const form_url =
    "https://docs.google.com/forms/d/e/1FAIpQLSeZL9alHC3ohE2M_rNR6jykQxqZP2ZJ8OJPsIPnaqx5ihp2RQ/formResponse";
  xhr.open("POST", form_url);

  let data = new FormData();

  data.append("entry.2003193277", form.fname.value);
  data.append("entry.241612218", form.email.value);
  data.append("entry.1846443364", form.subject.value);
  data.append("entry.416243322", form.message.value);

  // set headers
  xhr.setRequestHeader("Content-Type", "text/html");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "");

  try {
    xhr.send(data);
    // listen for `load` event
    xhr.onload = () => {
      result.innerHTML = `
          <div class="alert alert-success" role="alert">
              Message sent successfully!
          </div>
        `;

      console.log(xhr.responseText);
      console.log("message sent");
    };
    xhr.onerror = () => {
      result.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Message sending failed!<br>
                Something went wrong
            </div>
        `;
    };
  } catch (error) {
    result.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Message sending failed!<br>
            Check your internet connection
        </div>
    `;
    console.log(xhr.responseText);
    console.log("message not sent");
  }
};
