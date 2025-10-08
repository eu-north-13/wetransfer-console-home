// SET YOUR EXPIRY HERE (UTC): year, month (1-12), day, hour (0-23), minute, second
    // Example: Year, Date, Month 2025 00:00:00 UTC
    const expiryUTC = Date.UTC(2025, 29, 10, 0, 0, 0);

    function showExpired() {
      const app = document.getElementById('app');
      app.innerHTML = `
	  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      background-color: #f1f1f1;
      margin: 0;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-align: center;
      color: rgba(0, 0, 0, 0.8);
    }

    .container {
      margin: 50px auto;
      max-width: 600px;
      padding: 0 20px;
    }

    h1 {
      letter-spacing: -1px;
      line-height: 1.1;
      font-size: 60px;
      font-weight: 100;
      margin: 0 0 30px 0;
      text-shadow: 0 1px 0 #fff;
    }

    p {
      color: rgba(0, 0, 0, 0.5);
      margin: 20px 0;
      line-height: 1.6;
      font-size: 16px;
    }

    a {
      color: #4183c4;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    ul {
      list-style: none;
      margin: 25px 0;
      padding: 0;
    }

    li {
      display: inline-block;
      font-weight: bold;
      margin: 0 10px;
    }

    .logo {
      display: inline-block;
      margin-top: 35px;
    }

    .logo-img-2x {
      display: none;
    }

    /* Retina images */
    @media
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
      .logo-img-1x { display: none; }
      .logo-img-2x { display: inline-block; }
    }

    #suggestions {
      margin-top: 35px;
      color: #ccc;
    }

    #suggestions a {
      color: #666;
      font-weight: 200;
      font-size: 14px;
      margin: 0 10px;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      .container {
        margin: 30px auto;
      }

      h1 {
        font-size: 40px;
      }

      p {
        font-size: 15px;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 32px;
      }

      p {
        font-size: 14px;
      }

      li {
        display: block;
        margin: 8px 0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Host expired</h1>
    <p><strong>This Account has been suspended.</strong></p>
    <p>This site is no longer available.</p>
  </div>
</body>
</html>
`;
      // OPTIONAL: redirect to another page after X ms (comment out if not wanted)
      // setTimeout(() => window.location.href = "https://example.com", 4000);
    }

    // Check once (you can also setInterval to update live)
    if (Date.now() > expiryUTC) {
      showExpired();
    } else {
      // If you want a live countdown, uncomment the block below
      /*
      const content = document.getElementById('content');
      function updateCountdown() {
        const diff = expiryUTC - Date.now();
        if (diff <= 0) return showExpired();
        const days = Math.floor(diff / (1000*60*60*24));
        const hrs  = Math.floor((diff / (1000*60*60)) % 24);
        const mins = Math.floor((diff / (1000*60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        content.textContent = `Host active — expires in ${days}d ${hrs}h ${mins}m ${secs}s (UTC)`;
      }
      updateCountdown();
      setInterval(updateCountdown, 1000);
      */
    }
