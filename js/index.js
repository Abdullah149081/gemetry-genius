let serialNO = 0;

document.getElementById("triangle-btn").addEventListener("click", function () {
  serialNO += 1;

  const inputValueB = inputValue("input-tri-b");
  const inputValueH = inputValue("input-tri-h");

  if (inputValueB == "" || inputValueH == "" || isNaN(inputValueB) || isNaN(inputValueH) || inputValueB <= 0 || inputValueH <= 0) {
    return alert("Sorry,,, Please Input Valid Number");
  }

  const area = 0.5 * inputValueB * inputValueH;
  const triangleTitle = geometryTitleName("tri-title");

  setArea(triangleTitle, area);
});







// Utility function

function inputValue(inputFieldId) {
  const inputValueGet = document.getElementById(inputFieldId).value;
  return inputValueGet;
}

function geometryTitleName(titleName) {
  const titleNameGet = document.getElementById(titleName).innerText;
  return titleNameGet;
}

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
