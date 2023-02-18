// Triangle
document.getElementById("triangle-btn").addEventListener("click", function () {
  serialNO += 1;

  const inputValueB = inputValue("input-tri-b");
  const inputValueH = inputValue("input-tri-h");

  if (inputValueB == "" || inputValueH == "" || isNaN(inputValueB) || isNaN(inputValueH) || inputValueB <= 0 || inputValueH <= 0) {
    return alert("Sorry,,, Please Input Valid Number");
  }

  const area = trpGeometryCal(inputValueB, inputValueH);
  const triangleTitle = geometryTitleName("tri-title");

  setArea(triangleTitle, area);
});

// rectangle
document.getElementById("rectangle-btn").addEventListener("click", function () {
  serialNO += 1;

  const inputValueW = inputValue("rec-input-w");
  const inputValueI = inputValue("rec-input-I");

  if (inputValueW == "" || inputValueI == "" || isNaN(inputValueW) || isNaN(inputValueI) || inputValueW <= 0 || inputValueI <= 0) {
    return alert("Sorry,,, Please Input Valid Number");
  }

  const area = rpGeometryCal(inputValueW, inputValueI);
  const rectangleTitle = geometryTitleName("rec-title");

  setArea(rectangleTitle, area);
});
