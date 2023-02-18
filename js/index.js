// Triangle
document.getElementById("triangle-btn").addEventListener("click", function () {
  const inputValueB = inputValue("input-tri-b");
  const inputValueH = inputValue("input-tri-h");

  if (inputValueB == "" || inputValueH == "" || isNaN(inputValueB) || isNaN(inputValueH) || inputValueB <= 0 || inputValueH <= 0) {
    return alert("Sorry,,, Please Input Valid Number");
  }
  serialNO += 1;
  const area = trpGeometryCal(inputValueB, inputValueH);
  const triangleTitle = geometryTitleName("tri-title");

  setArea(triangleTitle, area);
});

// rectangle
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const inputValueW = inputValue("rec-input-w");
  const inputValueI = inputValue("rec-input-I");

  if (inputValueW == "" || inputValueI == "" || isNaN(inputValueW) || isNaN(inputValueI) || inputValueW <= 0 || inputValueI <= 0) {
    return alert("Sorry,,, Please Input Valid Number");
  }
  serialNO += 1;

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

// Ellipse

document.getElementById("ellipse-btn").addEventListener("click", function () {
  serialNO += 1;

  const inputValueA = inputValue("ell-input-a");
  const inputValueB = inputValue("ell-input-b");

  const PI = 3.14;

  const area = (PI * inputValueA * inputValueB).toFixed(2);

  const ellipseTitle = geometryTitleName("ell-title");

  setArea(ellipseTitle, area);
});

// Card BG color Change
// triangle bg
document.getElementById("bg-triangle").addEventListener("mouseenter", function () {
  bgColorCard("bg-triangle");
});
// bg rectangle
document.getElementById("bg-rectangle").addEventListener("mouseenter", function () {
  bgColorCard("bg-rectangle");
});
//  bg-parallelogram
document.getElementById("bg-parallelogram").addEventListener("mouseenter", function () {
  bgColorCard("bg-parallelogram");
});
// bg-rhombus
document.getElementById("bg-rhombus").addEventListener("mouseenter", function () {
  bgColorCard("bg-rhombus");
});
// bg-pentagon
document.getElementById("bg-pentagon").addEventListener("mouseenter", function () {
  bgColorCard("bg-pentagon");
});
// bg-ellipse
document.getElementById("bg-ellipse").addEventListener("mouseenter", function () {
  bgColorCard("bg-ellipse");
});
