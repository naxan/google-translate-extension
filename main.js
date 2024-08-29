document.addEventListener("DOMContentLoaded", () => {
  function translate(languageOne, languageTwo, message) {
    fetch("https://google-translate113.p.rapidapi.com/api/v1/translator/html", {
      method: "POST",
      headers: {
        "x-rapidapi-key": "aadb6acc34msh6272feb2f72e989p196c32jsne8b54135d6ea",
        "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: languageOne,
        to: languageTwo,
        html: message,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // get the div by id
        // insert the response.trans text into the div innerHTML
        console.log(response);
        const output = document.getElementById("translatedText");
        console.log(output);
        output.innerHTML = response.trans;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  // translate("en", "fr", "hello world!");

  document.addEventListener("submit", (e) => {
    e.preventDefault();

    const message = document.getElementById("message").value;
    const langOne = document.getElementById("langOne").value;
    const langTwo = document.getElementById("langTwo").value;
    translate(langOne, langTwo, message);
  });
});

// async function createExt() {
//   const url =
//     "https://google-translate113.p.rapidapi.com/api/v1/translator/html";
//   const options = {
//     method: "POST",
//     headers: {
//       "x-rapidapi-key": "aadb6acc34msh6272feb2f72e989p196c32jsne8b54135d6ea",
//       "x-rapidapi-host": "google-translate113.p.rapidapi.com",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       from: "en",
//       to: "vi",
//       html: "Hello, This is Translate HTML endpoint",
//     }),
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log("result", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// createExt().then((data) => {
//   console.log("test", data);
// })

/*
en: English
es: Spanish
fr: French
de: German
it: Italian
zh: Chinese (Simplified)
ja: Japanese
ko: Korean
ru: Russian
ar: Arabic
pt: Portuguese
hi: Hindi
bn: Bengali
vi: Vietnamese
th: Thai
tr: Turkish
nl: Dutch
pl: Polish
sv: Swedish
*/
