 document.getElementById("contactForm").addEventListener("submit", async function(e) {
      e.preventDefault(); // Prevent normal form submission
      
      const form = e.target;
      const recaptchaResponse = grecaptcha.getResponse();

      if (!recaptchaResponse) {
        document.getElementById("response").innerText = "Please complete the reCAPTCHA.";
        return;
      }

      const formData = new FormData(form);
      formData.append("g-recaptcha-response", recaptchaResponse);

      const res = await fetch("/api/contact", {  // your API endpoint
        method: "POST",
        body: formData
      });

      const text = await res.text();
      document.getElementById("response").innerText = text;
      grecaptcha.reset(); // reset reCAPTCHA after submit
    });
