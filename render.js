function viewRenderer() {
  view === "main" || view === "options" || view === "scanResult"
    ? $(".main").addClass("active")
    : $(".main").removeClass("active");
  view === "howToUse" ? [$(".howToUse").addClass("active")] : $(".howToUse").removeClass("active");
  view === "history" ? [$(".history").addClass("active")] : $(".history").removeClass("active");
}

function historyRenderer() {
  if ($(".history-item-container").children().length > 0) {
    $(".history-item-container").empty();
  }

  history.map((item) => {
    $(".history-item-container").append(`
    <div class="history-item">${item}</div>`);
  });
}

function render() {
  navigationRenderer(navigationContent);
  optionsRenderer(optionsContent);
  howToUseRenderer(howToUseContent);
  scanResultRenderer(scanResult);
  historyRenderer();
  viewRenderer();
}
render();
