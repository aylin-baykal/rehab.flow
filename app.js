const bodyData = {
  Omuz: [
    "Rotator Cuff Sendromu",
    "Donuk Omuz",
    "Omuz Sıkışma Sendromu",
    "Biceps Tendiniti"
  ],

  Dirsek: [
    "Tenisçi Dirseği",
    "Golfçü Dirseği",
    "Kubital Tünel Sendromu"
  ],

  Boyun: [
    "Servikal Disk Hernisi",
    "Düz Boyun",
    "Boyun Kas Spazmı"
  ],

  Bel: [
    "Bel Fıtığı",
    "Siyatik",
    "Mekanik Bel Ağrısı"
  ],

  Diz: [
    "ACL Yaralanması",
    "Menisküs Yaralanması",
    "Runner's Knee"
  ]
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

  for (let part in bodyData) {

    const button =
      document.createElement("button");

    button.innerText = part;

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

  bodyData[part].forEach(disease => {

    const li =
      document.createElement("li");

    li.innerText = disease;

    diseaseList.appendChild(li);
  });
}