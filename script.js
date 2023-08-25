console.log("funziona");

const URL = "https://striveschool-api.herokuapp.com/api/product/";

console.log(URL);

let primo = {
  name: "Iphone 12",
  description: "Iphone of 2012",
  brand: "apple",
  imageUrl: "https://m.media-amazon.com/images/I/71MtcgbTdXL._AC_UF1000,1000_QL80_.jpg",
  price: "100",
};
let secondo = {
  name: "Iphone 13",
  description: "Iphone of 2013",
  brand: "apple",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTSBoLMqcdQL7zC8Vw_sACNL9X1vxBlYd-0R6IVc2oovjHKpX7qrY722Ke3w6cn4ZJBM&usqp=CAU",
  price: "200",
};
let terzo = {
  name: "Samsung Galaxy",
  description: "Galaxy of 2015",
  brand: "Samsung",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTSBoLMqcdQL7zC8Vw_sACNL9X1vxBlYd-0R6IVc2oovjHKpX7qrY722Ke3w6cn4ZJBM&usqp=CAU",
  price: "200",
};
let quarto = {
  name: "One plus",
  description: "One plus of 2020",
  brand: "One plus",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTSBoLMqcdQL7zC8Vw_sACNL9X1vxBlYd-0R6IVc2oovjHKpX7qrY722Ke3w6cn4ZJBM&usqp=CAU",
  price: "250",
};

/*
{
  "name": "Iphone 12",
  "description": "Iphone of 2012",
  "brand": "apple",
  "imageUrl": "https://m.media-amazon.com/images/I/71MtcgbTdXL._AC_UF1000,1000_QL80_.jpg",
  "price": "100"
}
*/

window.onload = async () => {
  try {
    const resp = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTU5NGMwMzRmZjAwMTQwM2Y0ZGQiLCJpYXQiOjE2OTI5NDc4NjEsImV4cCI6MTY5NDE1NzQ2MX0.dABA0GwOoSSXdKiHNIIQOt0TmSdoC5oVd09Mr5hMl-U",
      },
    });
    if (resp.ok) {
      const responseData = await resp.json();
      console.log(responseData);

      const row = document.querySelector(".row");

      responseData.forEach((phone) => {
        const col = document.createElement("div");
        col.innerHTML = `
        <div dataPhoneId="${phone._id}" class="card mb-2" >
        <img src="${phone.imageUrl}" class="card-img-top" alt="..." style="height: 20%; width:auto;>
        <div class="card-body">
          <h5 class="card-title">${phone.name}</h5>
          <p> ${phone.description} </p>
          <p class="card-text">${phone.price + " Euro"}</p>
          <a href="det.html?phoneid=${phone._id}" class="btn btn-primary removeBtn">DETTAGLI</a>
        </div>
      </div>
              `;

        row.appendChild(col);

        row.addEventListener("click", (event) => {
          const targetCard = event.target.closest(".card");
          if (targetCard) {
            const phoneId = targetCard.getAttribute("dataPhoneId");
            if (phoneId) {
              window.location.href = `details.html?id=${phoneId}`;
            }
          }
        });
      });
    } else {
      console.error("Errore nella richiesta:", resp.status);
    }
  } catch (error) {
    console.error("Errore durante la richiesta:", error);
  }
};

const nameInput = document.getElementById("event-name");
const descriptionInput = document.getElementById("event-description");
const priceInput = document.getElementById("event-price");
const brandInput = document.getElementById("event-brand");
const imageInput = document.getElementById("image-selector");

const btcServer = document.getElementById("buttonBackOffice");
const btcServerReset = document.getElementById("buttonBackOfficeReset");

btcServerReset.addEventListener("click", function () {
  nameInput.value = "";
  descriptionInput.value = "";
  priceInput.value = "";
  brandInput.value = "";
  imageInput.value = "";
});

btcServer.addEventListener("click", function () {
  const nameValue = nameInput.value;
  const descriptionValue = descriptionInput.value;
  const priceValue = priceInput.value;
  const brandValue = brandInput.value;
  const imageValue = imageInput.value;

  console.log("Name:", nameValue);
  console.log("Description:", descriptionValue);
  console.log("Price:", priceValue);
  console.log("Brand:", brandValue);
  console.log("Image URL:", imageValue);
});
