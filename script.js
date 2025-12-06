const spreadsheetId = "1ph5TB8YBHi1zjA2Oxi1do8F_rLeGJIO3byOuWAzzWYI";
const range = "Sheat!B:C"; // правильное имя листа
const apiKey = "AIzaSyCqI83CM_lIMyxU-bf1LX90tBfloTEsxhg";

async function loadData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  const container = document.querySelector("#container");
  container.innerHTML = "";

  if (data.values) {
    data.values.forEach(row => {
      if (row[0] !== "Напишите текст пожелания") {
        // создаём карточку
        const card = document.createElement("div");
        card.classList.add("card");

        const name = document.createElement("quote");
        name.textContent = row[0] || "";

        const wish = document.createElement("p");
        wish.textContent = row[1] || "";

        card.appendChild(name);
        card.appendChild(wish);
        container.appendChild(card);
      }
    });
  } else {
    container.innerHTML = "<p>Нет данных</p>";
  }
}

loadData();
