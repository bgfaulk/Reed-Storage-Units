// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('o1aQJl10tOkbG5AfC83H7w');

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"your_email_address",
        "to":[{"email":$('#exampleInputEmail1').val()}],
        "subject": $('#subjectEmail1').val(),
        "text": $('#messageBody').val()
    }
};

function sendTheMail() {
// Send the email!

    m.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}