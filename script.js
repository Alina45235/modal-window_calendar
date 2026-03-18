//=============================================================================
const openBtn = document.querySelector(".open-btn");
const modalOverlay = document.getElementById("modalOverlay");
const closeBtn = document.querySelector(".close-btn");

function openModal() {
  modalOverlay.style.display = "flex";
}

function closeModal() {
  modalOverlay.style.display = "none";
}


openBtn.addEventListener("click", openModal);

// Закрытие по кнопке Close
closeBtn.addEventListener("click", closeModal);

// Закрытие по клику на фон
modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// Закрытие по клавише ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modalOverlay.style.display === "flex") {
    closeModal();
  }
});

setTimeout(openModal, 10000);

/*===========================================================================*/

const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const generateBtn = document.querySelector(".generate-btn");
const monthYearDisplay = document.getElementById("monthYear");
const calendarBody = document.getElementById("calendarBody");


const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function generateCalendar() {
  let month = parseInt(monthInput.value);
  let year = parseInt(yearInput.value);

  if (isNaN(month) || month < 1 || month > 12) {
    alert("Пожалуйста, введите месяц от 1 до 12");
    return;
  }

  if (isNaN(year) || year < 1900 || year > 2100) {
    alert("Пожалуйста, введите год от 1900 до 2100");
    return;
  }

  monthYearDisplay.textContent = `${monthNames[month - 1]}, ${year}`;

  const firstDay = new Date(year, month - 1, 1).getDay();

  let startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = new Date(year, month, 0).getDate();

  calendarBody.innerHTML = "";

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < startOffset) {
        // Пустые ячейки до первого дня
        cell.textContent = "";
      } else if (date > daysInMonth) {
        // Пустые ячейки после последнего дня
        cell.textContent = "";
      } else {
        cell.textContent = date;
        date++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);

    if (date > daysInMonth) {
      break;
    }
  }
}

generateBtn.addEventListener("click", generateCalendar);

generateCalendar();
