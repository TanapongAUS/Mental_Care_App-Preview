const my_patients = [
  {
    id: 1,
    name: "Ethan Mitchell",
    age: 38,
    gender: "Male",
    stateOfMind: "Frustrated",
    disease: "-",
    imgSrc: "../../../public/images/pexels-klaus-nielsen-6303797.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    age: 58,
    gender: "Male",
    stateOfMind: "Frustrated",
    disease: "-",
    imgSrc: "../../../public/images/pexels-pixabay-262391.jpg",
  },
  {
    id: 3,
    name: "Jenna Rodrigo",
    age: 44,
    gender: "Female",
    stateOfMind: "Depressed",
    disease: "-",
    imgSrc: "../../../public/images/pexels-olly-774909.jpg",
  },
  {
    id: 4,
    name: "Fiona Harvey",
    age: 66,
    gender: "Female",
    stateOfMind: "OCD",
    disease: "-",
    imgSrc: "../../../public/images/pexels-andersonguerra-1197132.jpg",
  },
  {
    id: 5,
    name: "Johnny Hawking",
    age: 71,
    gender: "Male",
    stateOfMind: "Depressed",
    disease: "-",
    imgSrc: "../../../public/images/pexels-linkedin-2182970.jpg",
  },
];

// Pagination variables
const patientsPerPage = 4;
let currentPage = 1;

function renderPatients(patientList) {
  const patientContainer = document.querySelector(".patients-container");
  patientContainer.innerHTML = "";

  // Calculating  start and end index for the current page
  const startIndex = (currentPage - 1) * patientsPerPage;
  const endIndex = Math.min(startIndex + patientsPerPage, patientList.length);

  // Slice the patient list for the current page
  const filteredPatients = patientList.slice(startIndex, endIndex);

  // Render patients
  filteredPatients.map((patient, index) => {
    const patientCard = document.createElement("div");
    patientCard.classList.add("patient-card");

    patientCard.innerHTML = `
      <div class="patient-header">
        <div class="image-patient">
          <img src="${patient.imgSrc}" alt="patientimg" />
          <p>${patient.name}</p>
        </div>
        <div>
          <a href="./patient_notes.html">
            <button class="butn btn-add">Notes</button>
          </a>
          <a href="./patient_details.html">
            <button class="butn btn-view"><i class="fa-solid fa-eye"></i></button></button>
          </a>
          
        </div>
      </div>
      <div class="patient-detail">
        <p>Preferred Name: <span>${patient.name.split(" ")[0]}</span></p>
        <p>Age: <span>${patient.age}</span></p>
        <p>Gender: <span>${patient.gender}</span></p>
        <p>State of Mind: <span>${patient.stateOfMind}</span></p>
        <p>Congenital Disease: <span>${patient.disease}</span></p>
        <label>
          <input type="checkbox" class="follow-up-checkbox"> Follow up
        </label>
      </div>
    `;
    patientContainer.appendChild(patientCard);
    addFollowUpListeners();
    renderPaginationControls(patientList.length);
  });
}

// Function to delete a note by id
function deletePatientById(id) {
  const patientIndex = my_patients.findIndex((patient) => patient.id === id);

  if (patientIndex !== -1) {
    my_patients.splice(patientIndex, 1);
    renderPatients(my_patients);
  } else {
    console.log("Note not found:", id); // Debugging
  }
}

// Function to render pagination controls
function renderPaginationControls(totalPatients) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(totalPatients / patientsPerPage);

  // Previous button
  const prevButton = document.createElement("button");
  prevButton.textContent = "« Previous";
  prevButton.classList.add("pagination");
  if (currentPage === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.addEventListener("click", () => {
      currentPage--;
      renderPatients(my_patients);
    });
  }
  paginationContainer.appendChild(prevButton);

  // Page buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("pagination", "page-number");
    pageButton.dataset.page = i;
    if (i === currentPage) {
      pageButton.classList.add("active");
    }
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderPatients(my_patients);
    });
    paginationContainer.appendChild(pageButton);
  }

  // Next button
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next »";
  nextButton.classList.add("pagination");
  if (currentPage === totalPages) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.addEventListener("click", () => {
      currentPage++;
      renderPatients(my_patients);
    });
  }
  paginationContainer.appendChild(nextButton);
}
// Search function
document.querySelector("#searchInput").addEventListener("input", (e) => {
  const searchItems = e.target.value.toLowerCase();
  const filteredPatients = my_patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchItems)
  );
  currentPage = 1; // Reset to first page
  renderPatients(filteredPatients);
});

// Highlight Follow-up patients
function addFollowUpListeners() {
  document.querySelectorAll(".follow-up-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const patientCard = checkbox.closest(".patient-card");
      if (checkbox.checked) {
        patientCard.classList.add("highlight");
      } else {
        patientCard.classList.remove("highlight");
      }
    });
  });
}

// Initial render
renderPatients(my_patients);
