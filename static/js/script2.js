$("#submit-quote").click(async function () {
  let selectedOptions = [];
  $("#checkbox-container input[type='checkbox']:checked").each(function () {
      selectedOptions.push($(this).val());
  });

  let partNumber = "L-SEC24-" + selectedOptions.join("-");
  $("#part-number").text(partNumber); // Show the part number

  try {
    let response = await fetch("http://127.0.0.1:5000/get-price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ partNumber: partNumber }),
    });

    let data = await response.json();

    // Show the price (you can adjust the logic depending on the data structure)
    if (data.price) {
      let priceData = data.price;
      let displayText = "";

      // If you want to show all row prices:
      for (let rowId in priceData) {
        displayText += `Row ${rowId}: $${priceData[rowId]}<br>`;
      }

      $("#price").html(displayText); // Use .html() for line breaks
    } else {
      $("#price").text("No price data found.");
    }
  } catch (error) {
    console.error("Error fetching price:", error);
    $("#price").text("Error retrieving price.");
  }
});
