document.getElementById("enquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMessage").innerText =
        "Thank you! Your enquiry has been submitted.";

    this.reset();
});
