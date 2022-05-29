function sendMail(contactForm) {

    var templateParams = {
        "from_name": contactForm.name.value,
        "message": contactForm.projectsummary.value,
        "from_email": contactForm.emailaddress.value,
    };

    emailjs.send('gmail', 'claudio_resume', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

    return false; // To block from loading a new page
}