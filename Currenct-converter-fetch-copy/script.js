

async function currencyConverter() {
    const amount = document.getElementById('amount').value;

    const url =
      "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "79f0558b5emshaf559b0ca6daafbp114572jsnfc3edf53dc18",
        "X-RapidAPI-Host":
          "currency-conversion-and-exchange-rates.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
        console.log(result);
        
        // Currency conversation

        const eurRate = result.rates.EUR;
        const inrRate = result.rates.INR;

        const convertedAmountEUR = (amount * eurRate)
        const convertAmountINR = (amount * inrRate);

        // display the result

        document.getElementById('result').innerHTML = ` <br> EUR: ${convertedAmountEUR} <br> INR: ${convertAmountINR}`

    } catch (error) {
      console.error(error);
    }
}