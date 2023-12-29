
async function convertCurrency() {
    const amount = document.getElementById("amount").value;

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
        const result = await response.json()
        console.log(result);
        
        // Perform the currency conversation

        const eurRate = result.rates.EUR;
        const gbpRate = result.rates.GBP;
        const audRate = result.rates.AUD;
        const inrRate = result.rates.INR;

        const convertedAmountEUR = (amount * eurRate).toFixed(2)
        const convertedAmountGBP = (amount * gbpRate).toFixed(2)
        const convertedAmountAUD = (amount * audRate).toFixed(2)
        const convertedAmountINR = (amount * inrRate).toFixed(2)


        // Display the result

        document.getElementById('result').innerHTML = `Converted Amount: <br>EUR: ${convertedAmountEUR} <br> GBP: ${convertedAmountGBP}
        <br> AUD: ${convertedAmountAUD} <br> INR: ${convertedAmountINR}
        `
    

    } catch (error) {
      console.error(error);
    }
}