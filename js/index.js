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

// parallelogram

document.getElementById("parallelogram-btn").addEventListener("click", function () {
  serialNO += 1;

  const inputValueB = inputValue("para-input-b");
  const inputValueH = inputValue("para-input-h");

  const area = rpGeometryCal(inputValueB, inputValueH);
  const parallelogramTitle = geometryTitleName("parall-title");

  setArea(parallelogramTitle, area);
});

// rhombus
document.getElementById("rhombus-btn").addEventListener("click", function () {
  serialNO += 1;

  const inputValueD1 = inputValue("rho-input-d1");
  const inputValueD2 = inputValue("rho-input-d2");

  const area = trpGeometryCal(inputValueD1, inputValueD2);
  const rhombusTitle = geometryTitleName("rho-title");

  setArea(rhombusTitle, area);
});

// Pentagon
document.getElementById("pentagon-btn").addEventListener("click", function () {
  serialNO += 1;

  const inputValueP = inputValue("pen-input-p");
  const inputValueB = inputValue("pen-input-b");

  const area = trpGeometryCal(inputValueP, inputValueB);
  const pentagonTitle = geometryTitleName("penta-title");

  setArea(pentagonTitle, area);
});
