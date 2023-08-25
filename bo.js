/*const btcServer = document.getElementById("buttonBackOffice");*/

btcServer.addEventListener("click", async function () {
  const nameValue = nameInput.value;
  const descriptionValue = descriptionInput.value;
  const priceValue = priceInput.value;
  const brandValue = brandInput.value;
  const imageValue = imageInput.value;

  const eventData = {
    name: nameValue,
    description: descriptionValue,
    price: priceValue,
    brand: brandValue,
    imageUrl: imageValue,
  };
  console.log(eventData);

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTU5NGMwMzRmZjAwMTQwM2Y0ZGQiLCJpYXQiOjE2OTI5NDc4NjEsImV4cCI6MTY5NDE1NzQ2MX0.dABA0GwOoSSXdKiHNIIQOt0TmSdoC5oVd09Mr5hMl-U",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Dati inviati al server:", responseData);
    } else {
      console.error("Errore nella richiesta:", response.status);
    }
  } catch (error) {
    console.error("Errore durante la richiesta:", error);
  }
});
