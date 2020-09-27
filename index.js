const ngrok = require("ngrok");

ngrok
  .disconnect()
  .then(() => {
    ngrok
      .connect({
        addr: 3000,
        bind_tls: true,
      })
      .then((url) => {
        console.log(`website:`, url);
      })
      .catch(console.error);

    ngrok
      .connect({
        addr: 8081,
        bind_tls: true,
      })
      .then((url) => {
        console.log(`REALTIME API ENDPOINT DEPLOYED AT:`, url);
      })
      .catch(console.error);
  })
  .catch(console.error);
