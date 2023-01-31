// Render Navigation
function navigationRenderer(content) {
  if (prevView !== view) {
    $(".navigation-bar").find("#left").find("button").empty();
    $(".navigation-bar").find("#center").find("button").empty();
    $(".navigation-bar").find("#right").find("button").empty();
    $(".navigation-bar").find("#left").find("button").off("click");
    $(".navigation-bar").find("#center").find("button").off("click");
    $(".navigation-bar").find("#right").find("button").off("click");
  }
  if (content[view]?.left) {
    if (content[view]?.left.function) {
      $(".navigation-bar")
        .find("#left")
        .find("button")
        .click(content[view]?.left?.function);
    }
    if (content[view]?.left.type === "text") {
      $(".navigation-bar")
        .find("#left")
        .find("button")
        .append(content[view]?.left?.content);
    } else if (content[view]?.left?.type === "image") {
      $(".navigation-bar")
        .find("#left")
        .find("button")
        .append(
          `<img src="${content[view]?.left?.content}" alt="Navigation Button" class="navigation-button-image">`
        );
    }
  }

  if (content[view]?.center) {
    if (content[view]?.center.function) {
      $(".navigation-bar")
        .find("#center")
        .find("button")
        .click(content[view]?.center?.function);
    }
    if (content[view]?.center?.type === "text") {
      $(".navigation-bar")
        .find("#center")
        .find("button")
        .append(content[view]?.center?.content);
    } else if (content[view]?.center?.type === "image") {
      $(".navigation-bar")
        .find("#center")
        .find("button")
        .append(
          `<img src="${content[view]?.center?.content}" alt="Navigation Button" class="navigation-button-image">`
        );
    }
  }

  if (content[view]?.right) {
    if (content[view]?.right?.function) {
      $(".navigation-bar")
        .find("#right")
        .find("button")
        .click(content[view]?.right?.function);
    }
    if (content[view]?.right?.type === "text") {
      $(".navigation-bar")
        .find("#right")
        .find("button")
        .append(content[view]?.right?.content);
    } else if (content[view]?.right?.type === "image") {
      $(".navigation-bar")
        .find("#right")
        .find("button")
        .append(
          `<img src="${content[view]?.right?.content}" alt="Navigation Button" class="navigation-button-image">`
        );
    }
  }
}
