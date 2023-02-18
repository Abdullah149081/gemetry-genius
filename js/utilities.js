document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// Utility function
let serialNO = 0;

// input Field get function
function inputValue(inputFieldId) {
  const inputValueGet = document.getElementById(inputFieldId).value;
  return inputValueGet;
}

// Title Get function
function geometryTitleName(titleName) {
  const titleNameGet = document.getElementById(titleName).innerText;
  return titleNameGet;
}

// Triangle , Rhombus , Pentagon Calculation
function trpGeometryCal(inputA, inputB) {
  const cal = (0.5 * inputA * inputB).toFixed(2);
  return cal;
}

// Rectangle , Parallelogram calculation
function rpGeometryCal(inputA, inputB) {
  const Calculation = (inputA * inputB).toFixed(2);
  return Calculation;
}

// Area Set function
function setArea(titleName, areaCal) {
  const tbodyContainer = document.getElementById("tbody-container");
  const trTag = document.createElement("tr");

  trTag.innerHTML = `
              <td>${serialNO}</td>
              <td>${titleName}</td>
              <td>${areaCal}cm<sup>2</sup></td>
              <td><button class="btn lowercase">convert to m <sup>2</sup></button></td>
  `;

  tbodyContainer.appendChild(trTag);
}
