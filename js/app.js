// handling info numbers

let spanNumbers = document.querySelectorAll(".info span");
let dataTitle = document.querySelector(".data .title");
let dataText = document.querySelector(".data .text");

for (let i = 0; i < spanNumbers.length; i++) {
  if (
    spanNumbers[i].classList.contains("one") &&
    spanNumbers[i].classList.contains("active")
  ) {
    dataTitle.innerHTML = "Near real time data";
    dataText.innerHTML =
      "Providing farmers with near real-time data on the condition of the trees, vegetation cover, harvest, Crop yield";
  }

  spanNumbers[i].onclick = () => {
    spanNumbers.forEach((number) => number.classList.remove("active"));
    spanNumbers[i].classList.add("active");
    if (spanNumbers[i].classList.contains("one")) {
      dataTitle.innerHTML = "Near real time data";
      dataText.innerHTML =
        "Providing farmers with near real-time data on the condition of the trees, vegetation cover, harvest, Crop yield";
    }
    if (spanNumbers[i].classList.contains("two")) {
      dataTitle.innerHTML = "Satellite and Drones";
      dataText.innerHTML =
        "Aerial survey and data capture analysis and algorithms Providing information";
    }
    if (spanNumbers[i].classList.contains("three")) {
      dataTitle.innerHTML =
        "Precise AI analytics based on high-quality satellite images,";
      dataText.innerHTML =
        "Analysing images using artificial intelligence (machine learning) technology to identify pests that affect agricultural crops in order to better manage pests and learn the best ways to combat them.";
    }
  };
}
