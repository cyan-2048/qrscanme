
function optionsRenderer(contents) {
    // Show Options
    if (showOptions) {
      $(".options-container").addClass("active");
    } else $(".options-container").removeClass("active");
  
    // Option Title
    $(".options-title").text(type);
  
    // Option Item Selector
    if (prevView !== view) {
      $(".options-item-container").empty();
    }
  
    contents.map((content) => {
      if (content.type === type) {
        content.items?.map((item) => {
          if (item.radio) {
            $(".options-item-container").append(
              `<button id=${item.id}>${item.text}
              <div class="options-radio-outer">
              <div class="options-radio-inner"/>
            </div></button>`
            );
          } else {
            $(".options-item-container").append(
              `<button id=${item.id}>${item.text}</button>`
            );
          }
  
          $(".options-item-container").find(`#${item.id}`).click(item.function);
        });
      }
    });
  
    contents.map((content) => {
      if (content.type === type) {
        content.items?.map((item) => {
          if (item.id === selectedItem) {
            $(".options-item-container").find(`#${item.id}`).addClass("active");
            $(".options-item-container")
              .find(`#${item.id}`)
              .find(".options-radio-inner")
              .addClass("active");
          } else {
            $(".options-item-container")
              .find(`#${item.id}`)
              .removeClass("active");
            $(".options-item-container")
              .find(`#${item.id}`)
              .find(".options-radio-inner")
              .removeClass("active");
          }
        });
      }
    });
  
    // Option Type Selector
    if ($(".options-type-container").children().length === 0) {
      contents.map((content) => {
        $(".options-type-container").append(
          `<button id=${content.type}><img src="${content.image}" alt="Options Type Button" class="options-type-image"><div class="options-type-underline"/></button>`
        );
  
        $(".options-type-container")
          .find(`#${content.type}`)
          .click(content.function);
      });
    }
  
    contents.map((content) => {
      if (content.type === type) {
        $(".options-type-container")
          .find(`#${content.type}`)
          .find(".options-type-underline")
          .addClass("active");
      } else {
        $(".options-type-container")
          .find(`#${content.type}`)
          .find(".options-type-underline")
          .removeClass("active");
      }
    });
  }
  