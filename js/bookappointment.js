$(document).ready(function () {
    $('.contact-form').on('submit', function (e) {
      var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
       e.preventDefault();
       var doctor_id = 5;
       var name = $.trim($('input[name="name"]').val());
       var email = $.trim($('input[name="email"]').val());
       var phone = $.trim($('input[name="phone"]').val());
       var age = $.trim($('input[name="age"]').val());
       var city = $.trim($('input[name="field1"]').val());
       var additional_phone = $.trim($('input[name="field2"]').val());
       // Validate the email using a regular expression
       var doctorToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTY3OWIzNGFjOGIwNDQyMDkyZGJkYTc5NmMyODE4ZTkwYjJkNDA1OTA2ZDBjMzVhYzM1ZTljODFhYzQ4YjdkZTEzYmE4ZDIxYTM3NDc3MDIiLCJpYXQiOjE3MDI5OTgzODYuOTk4MjM2LCJuYmYiOjE3MDI5OTgzODYuOTk4MjM4LCJleHAiOjE3MzQ2MjA3ODYuOTgxODI5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.oQK58sMfJA09f4W8KWucHLIrfMYSc_o_myNOm8XQq5disF-LCDt8uIqgx7dyZ77FgUVEf56_HMlvdfwTuQQZxYDL3qB25BMHobVal4_yYn92nL81Jgi_JqnRjK1imI-GWRqmI8g_S4Fd7zbCftx2layhQpGzPRrh7rwchMPVPw3lHdJa1FdjH28HkxY_tKZt6XTseJeQuLQhsNWj5QroaDqxMgaPutreUqvF_MJzynI6RdrCiJGr5FEaEmhUaDmcMRno8WDPNAJCDk_-hUgG5yhfmXQ9WAVgF1K83_jYtsQcoFy4qmEhUUyNznareWmFo0kbvk3bZubu0mfPiulPnHZtsBnxdZo_9UIwNpAooOKGL9hiYOsxDe7rfD0BWwccpZwnYdqBcxQAYwF0b9cI0wie7epkOIrv4Um_g5RTEeLOYY0Bnti06TM-cL_lvt5YqFBMJ81eXVs8AQP8vxi3CJaxJQCmGu5W5BA1TGTGd-Htg4uK-0pzbnUWTztD_y5sI04N6TVs6yhnC_8EVYDuqA4-7yeE5WNV9JiIoQC_m7FTBlOjIbopYD1IDUokrL8TASZddD0D8xuMYlBwRaEnIGROgtf1ki9pk0p5M2kSaHgboJ6qutaFK9uCZug6uutv-3hyMKl75eycOkLlL8DrsgROLc9sI6F0p6AwDz4ku5E';
       var formData = {
         doctor_id:doctor_id,
         name:name,
         email:email,
         contact_no:phone,
         age:age,
         field1:city,
         field2:additional_phone
       }

       $.ajax({
          url: 'https://doctordunia.com/api/book_appointment', // Change this URL to match your route
          type: 'POST',
         //  data: JSON.stringify(formData),
          data: JSON.stringify(formData),
          contentType: 'application/json', 
          headers: {
            'X-CSRF-TOKEN': csrfToken,
            'Authorization': 'Bearer ' + doctorToken,
         },

          success: function (response) {

            $('#customModal').css('display', 'block');

            // Hide the modal after 2 seconds
            setTimeout(function () {
                $('#customModal').fadeOut();
                location.reload();
            }, 2000);

                console.log('Form submitted successfully:', response.message);
          },
          error: function (error) {
                console.error('An error occurred:', error);
          }
       });
       // Function to validate phone number using a regular expression for exactly 10 digits

    });
 });