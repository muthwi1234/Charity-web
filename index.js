// Declare variables for donation form elements
var donationForm = document.getElementById("donation-form");
var donationAmount = document.getElementById("donation-amount");
var paymentMethod = document.getElementsByName("payment-method");
var cardNumber = document.getElementById("card-number");
var cardExpiry = document.getElementById("card-expiry");
var cardCVC = document.getElementById("card-cvc");

// Listen for form submission event
donationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  // Validate donation amount
  if (isNaN(donationAmount.value) || donationAmount.value <= 0) {
    alert("Please enter a valid donation amount.");
    return false;
  }

  // Validate payment method
  var selectedMethod = false;
  for (var i = 0; i < paymentMethod.length; i++) {
    if (paymentMethod[i].checked) {
      selectedMethod = true;
      break;
    }
  }
  if (!selectedMethod) {
    alert("Please select a payment method.");
    return false;
  }

  // Validate credit card information (if credit card is selected)
  if (paymentMethod[1].checked) {
    if (cardNumber.value.length < 16 || isNaN(cardNumber.value)) {
      alert("Please enter a valid credit card number.");
      return false;
    }
    if (cardExpiry.value.length < 5 || cardExpiry.value.indexOf("/") == -1) {
      alert("Please enter a valid expiration date (MM/YY).");
      return false;
    }
    if (cardCVC.value.length < 3 || isNaN(cardCVC.value)) {
      alert("Please enter a valid CVC code.");
      return false;
    }
  }

  // Submit form if all validations pass
  alert("Thank you for your donation of $" + donationAmount.value + "!");
  donationForm.reset();
});
