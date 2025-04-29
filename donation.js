document.getElementById("donateForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let amount = document.getElementById("amount").value.trim();
        let paymentMethod = document.getElementById("paymentMethod").value;

        if (name === "" || email === "" || amount === "" || paymentMethod === "") {
            alert("Please fill in all required details!");
            return;
        }

        if (parseFloat(amount) < 10) {
            alert("The minimum donation amount is RM10!");
                return;
        }

        alert("Thank you for your donation!");
            document.getElementById("donateForm").reset(); 
        });