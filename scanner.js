let history = [];
let scanResult;
let currentResult;
let prevResult;

const qrCodeSuccessCallback = ({ data: decodedText }, decodedResult) => {
  console.log(decodedText);
  prevResult = currentResult;
  currentResult = decodedText;
  scanResult = currentResult;
  if (prevResult !== currentResult) {
    history.push(currentResult);
    console.log(history);
  }
  render();
};

const qrScanner = new QrScanner(document.querySelector("#reader"), qrCodeSuccessCallback, {
  preferredCamera: "environment",
  maxScansPerSecond: 25,
});

qrScanner.start();

function scanResultRenderer(result) {
  if (view === "scanResult") {
    $(".scan-result").text(result);
    $(".scan-result").addClass("active");
  } else {
    $(".scan-result").removeClass("active");
  }

  if (scanResult && view !== "scanResult") {
    setView("scanResult");
    render();
  } else {
    scanResult = null;
  }
}
