
async function convertCurrency() {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;

  const options = {
    method: "GET",
    url: "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest",
    params: {
      from: fromCurrency,
      to: toCurrency,
    },
    headers: {
      "X-RapidAPI-Key": "79f0558b5emshaf559b0ca6daafbp114572jsnfc3edf53dc18",
      "X-RapidAPI-Host":
        "currency-conversion-and-exchange-rates.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const rate = response.data.rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById(
      "result"
    ).innerText = `${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerText =
      "Error converting currency. Please try again.";
  }
}