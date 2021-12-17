// Process contact form
$("#contact-form").submit(function (event) {
  event.preventDefault();
  $("#form-form-feedback").html("");
  setTimeout(function () {
    // Get data
    var data = {
      "entry.2003193277": $("#form-name").val(),
      "entry.241612218": $("#form-email").val(),
      "entry.1846443364": $("#form-subject").val(),
      "entry.416243322": $("#form-message").val(),
    };

    // Validate form
    var formSuccess = true;
    Object.keys(data).forEach(function (key, index) {
      if (!data[key]) {
        formSuccess = false;
        $("#form-feedback").html(
          '<label class="text-danger">Please complete all fields</label>'
        );
      }
    });

    if (formSuccess) {
      // Send request
      $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeZL9alHC3ohE2M_rNR6jykQxqZP2ZJ8OJPsIPnaqx5ihp2RQ/formResponse",
        type: "POST",
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function (jqXHR, textStatus, errorThrown) {
          console.log("Enter on success");
          $("#form-feedback").html(
            '<label class="text-success">Message sent!</label>'
          );
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Enter on error");
          $("#form-feedback").html(
            '<label class="text-success">Message not sent!</label>'
          );
        },
      });
    }
  }, 300);
});
