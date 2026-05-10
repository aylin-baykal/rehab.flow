const appData = {

  Omuz: {
    "Rotator Cuff Sendromu": [
      "Pendulum Egzersizi",
      "İç Rotasyon Band Egzersizi",
      "Dış Rotasyon Egzersizi",
      "Scapula Stabilizasyonu"
    ],

    "Donuk Omuz": [
      "Duvar Tırmanma",
      "Sopa Egzersizi",
      "Pendulum",
      "Omuz Mobilizasyonu"
    ],

    "Omuz Sıkışma Sendromu": [
      "Scaption",
      "Postür Egzersizleri",
      "Theraband Rotasyon",
      "Serratus Aktivasyonu"
    ]
  },

  Dirsek: {
    "Tenisçi Dirseği": [
      "Wrist Extension Stretch",
      "Eksantrik Bilek Egzersizi",
      "Kavrama Güçlendirme"
    ],

    "Golfçü Dirseği": [
      "Flexor Stretch",
      "Pronasyon Egzersizi",
      "Direnç Bandı Çalışması"
    ]
  },

  "El Bileği": {
    "Karpal Tünel Sendromu": [
      "Median Sinir Gliding",
      "Bilek Fleksör Stretch",
      "Tendon Kaydırma"
    ],

    "De Quervain": [
      "Başparmak Stretch",
      "İzometrik Güçlendirme",
      "Mobilizasyon"
    ]
  },

  Boyun: {
    "Servikal Disk Hernisi": [
      "Chin Tuck",
      "Boyun İzometrik",
      "Postür Eğitimi"
    ],

    "Düz Boyun": [
      "Derin Fleksör Aktivasyonu",
      "Scapula Retraksiyonu",
      "Göğüs Stretch"
    ]
  },

  Sırt: {
    "Kifoz": [
      "Thoracic Extension",
      "Foam Roller Mobilizasyonu",
      "Postür Egzersizi"
    ],

    "Skolyoz": [
      "Core Stabilizasyon",
      "Nefes Egzersizi",
      "Asimetrik Güçlendirme"
    ]
  },

  Bel: {
    "Bel Fıtığı": [
      "McKenzie Extension",
      "Core Stabilizasyon",
      "Pelvik Tilt"
    ],

    "Siyatik": [
      "Sinir Mobilizasyonu",
      "Piriformis Stretch",
      "Hamstring Stretch"
    ],

    "Mekanik Bel Ağrısı": [
      "Bridge",
      "Bird Dog",
      "Dead Bug"
    ]
  },

  Kalça: {
    "Piriformis Sendromu": [
      "Piriformis Stretch",
      "Glute Bridge",
      "Clamshell"
    ],

    "Trokanterik Bursit": [
      "Yan Yatma Abduksiyon",
      "IT Band Stretch",
      "Kalça Stabilizasyon"
    ]
  },

  Diz: {
    "ACL Yaralanması": [
      "Quad Set",
      "Straight Leg Raise",
      "Denge Egzersizi"
    ],

    "Menisküs Yaralanması": [
      "Mini Squat",
      "Hamstring Curl",
      "Step Up"
    ],

    "Patellofemoral Ağrı": [
      "VMO Aktivasyonu",
      "Terminal Knee Extension",
      "Kalça Güçlendirme"
    ]
  },

  "Ayak Bileği": {
    "Ayak Bileği Burkulması": [
      "Denge Tahtası",
      "Theraband Egzersizi",
      "Tek Ayak Duruş"
    ],

    "Aşil Tendiniti": [
      "Eksantrik Heel Raise",
      "Calf Stretch",
      "Ayak Bileği Mobilizasyonu"
    ]
  },

  Ayak: {
    "Plantar Fasiit": [
      "Plantar Fasya Stretch",
      "Towel Curl",
      "Calf Stretch"
    ],

    "Düz Tabanlık": [
      "Short Foot Exercise",
      "Ayak Ark Güçlendirme",
      "Denge Çalışması"
    ]
  }
};

function selectRole(role) {

  document.getElementById("body-section")
    .classList.remove("hidden");

  loadBodyParts();
}

function loadBodyParts() {

  const container =
    document.getElementById("body-parts");

  container.innerHTML = "";

  for (let part in appData) {

    const button =
      document.createElement("button");

   const icons = {
  Omuz: "🦾",
  Dirsek: "💪",
  "El Bileği": "✋",
  Boyun: "🧠",
  Sırt: "🔙",
  Bel: "🦴",
  Kalça: "🦵",
  Diz: "🦿",
  "Ayak Bileği": "👣",
  Ayak: "🦶"
};

button.innerText =
  `${icons[part] || "📍"} ${part}`;

    button.onclick = () =>
      showDiseases(part);

    container.appendChild(button);
  }
}

function showDiseases(part) {

  document.getElementById("disease-section")
    .classList.remove("hidden");

  const diseaseList =
    document.getElementById("disease-list");

  diseaseList.innerHTML = "";

  for (let disease in appData[part]) {

    const button =
      document.createElement("button");

    button.innerText = disease;

    button.onclick = () =>
      showExercises(part, disease);

    diseaseList.appendChild(button);
  }
}

function showExercises(part, disease) {

  let oldSection =
    document.getElementById("exercise-section");

  if (oldSection) {
    oldSection.remove();
  }

  const section =
    document.createElement("div");

  section.id = "exercise-section";

  section.innerHTML = `
    <h2>Egzersizler</h2>
    <div id="exercise-cards"></div>
  `;

  document.querySelector(".container")
    .appendChild(section);

  const cards =
    document.getElementById("exercise-cards");

  appData[part][disease].forEach(exercise => {

    const card =
      document.createElement("div");

    card.className = "exercise-card";

    card.innerHTML = `
      <h3>${exercise}</h3>
      <p>
        Bu egzersiz ${disease}
        rehabilitasyonu için önerilir.
      </p>
    `;

    cards.appendChild(card);
  });
}
function selectBodyPart(part) {
  showDiseases(part);
}
function openPanel(panelId) {

  // tüm panelleri kapat
  document.getElementById("hastaPanel").style.display = "none";
  document.getElementById("fizyoterapistPanel").style.display = "none";

  // seçileni aç
  document.getElementById(panelId).style.display = "block";
}
let patients = [];

function openPanel(panelId) {

  const hasta = document.getElementById("hastaPanel");
  const fizyo = document.getElementById("fizyoterapistPanel");

  if (hasta) hasta.style.display = "none";
  if (fizyo) fizyo.style.display = "none";

  document.getElementById(panelId).style.display = "block";
}
function createPatient() {

  let name = prompt("Hasta adı gir:");

  if (!name) return;

  patients.push({
    name: name,
    exercises: []
  });

  renderPatients();
}

function renderPatients() {

  const list = document.getElementById("patientList");

  list.innerHTML = "";

  patients.forEach((p, index) => {

    const div = document.createElement("div");

    div.innerHTML = `
      <p><b>${p.name}</b></p>
      <button onclick="selectPatient(${index})">
        Seç
      </button>
    `;

    list.appendChild(div);
  });
}
let selectedPatient = null;

function selectPatient(index) {

  selectedPatient = patients[index];

  alert(selectedPatient.name + " seçildi");
}
function addExerciseToPatient(exercise) {

  if (!selectedPatient) {
    alert("Önce hasta seç");
    return;
  }

  selectedPatient.exercises.push(exercise);

  alert("Egzersiz eklendi: " + exercise);
}
