// Hide Splash Screen
setTimeout(() => {
  $(".splashscreen").addClass("fade-out");
  setTimeout(() => {
    $(".splashscreen").addClass("hidden");
  }, 500);
}, 2500);

// State Management for Options
let showOptions = false;
let setShowOptions = (newShowOptions) => {
  showOptions = newShowOptions;
};

let type = "flash";
let prevType;
let setType = (newType) => {
  prevType = type;
  type = newType;
};

let selectedItem = 1;
let setItem = (newItem) => {
  selectedItem = newItem;
};

// Content for Options
let optionsContent = [
  {
    type: "flash",
    image: "./images/Options-Flash.png",
    function: () => {
      setType("flash");
      setItem(1);
      render();
    },
    items: [
      {
        id: 1,
        text: "On",
        radio: true,
        function: () => {
          setItem(1);
          render();
        },
      },
      {
        id: 2,
        text: "Off",
        radio: true,
        function: () => {
          setItem(2);
          render();
        },
      },
      {
        id: 3,
        text: "Automatic",
        radio: true,
        function: () => {
          setItem(3);
          render();
        },
      },
    ],
  },
  {
    type: "help",
    image: "./images/Options-Help.png",
    function: () => {
      setType("help");
      setItem(1);
      render();
    },
    items: [
      {
        id: 1,
        text: "How to Use QR Scan Me",
        radio: false,
        function: () => {
          setItem(1);
          setShowOptions(false);
          setView("howToUse");
          render();
        },
      },
      {
        id: 2,
        text: "Supported Codes",
        radio: false,
        function: () => {
          setItem(2);
          render();
        },
      },
      {
        id: 3,
        text: "Tips for Scanning",
        radio: false,
        function: () => {
          setItem(3);
          render();
        },
      },
    ],
  },
];

// State Management for How To Use Section
let howToUseData = 1;
let prevHowToUseData;
let setHowToUseData = (newHowToUseData) => {
  prevHowToUseData = howToUseData;
  howToUseData = newHowToUseData;
};

// Content for How To Use Section
let howToUseContent = [
  {
    id: 1,
    image: "./images/QRScanMeLogo-GIF.gif",
    title: "Welcome",
    content:
      "Scanning QR codes with <span>QR Scan Me</span> is designed to be super fast for your KaiOS device.",
  },
  {
    id: 2,
    image: "./images/QRScanMeLogo-GIF.gif",
    title: "Scanning",
    content:
      "Point the camera to the QR code so it fills up the square in the middle of the screen until the app automatically recognises it. No need to press any buttons.",
  },
  {
    id: 3,
    image: "./images/QRScanMeLogo-GIF.gif",
    title: "Scan History",
    content: "You can reopen, copy, or share previously scanned QR codes.",
  },
];

function howToUseRenderer(contents) {
  if (prevHowToUseData !== howToUseData) {
    $(".qrscanme-logo-container").empty();

    $("#howToUse-text-title").empty();
    $("#howToUse-text-subtitle").empty();
    $("#howToUse-radio").empty();
  }

  contents.map((content) => {
    if (content.id === howToUseData) {
      $(".qrscanme-logo-container").append(`<img
id="howToUse-gif"
src=${content.image}
alt="How To Use QR Scan Me"
/>`);

      $("#howToUse-text-title").append(content.title);
      $("#howToUse-text-subtitle").append(content.content);
    }
  });

  contents.map((content) => {
    if (content.id === howToUseData) {
      $("#howToUse-radio").append(`
      <div class="howToUse-radio-item active" id="${content.id}"/>`);
    } else {
      $("#howToUse-radio").append(`
      <div class="howToUse-radio-item" id="${content.id}"/>`);
    }
  });

  if (howToUseData === 1 && view === "howToUse") {
    $(".navigation-bar").find("#left").find("button").empty();
    $(".navigation-bar").find("#left").find("button").off("click");
  }
  if (howToUseData === contents.length && view === "howToUse") {
    $(".navigation-bar").find("#right").find("button").empty();
    $(".navigation-bar").find("#right").find("button").off("click");
  }
}

// State Management for Navigation Bar
let view = "main";
let prevView;
let setView = (newView) => {
  prevView = view;
  view = newView;
};

// Content of Navigation Bar
const navigationContent = {
  main: {
    left: {
      type: "text",
      content: "History",
      function: () => {
        setView("history");
        render();
      },
    },
    center: null,
    // {
    //   type: "image",
    //   content: "./images/Switch-Camera.png",
    //   function: null,
    // }
    right: {
      type: "text",
      content: "Options",
      function: () => {
        setView("options");
        setShowOptions(true);
        render();
      },
    },
  },
  history: {
    left: {},
    center: 
    null
    // {
    //   type: "text",
    //   content: "SELECT",
    //   function: null,
    // }
    ,
    right: {
      type: "text",
      content: "Back",
      function: () => {
        setView("main");
        render();
      },
    },
  },
  options: {
    left: {},
    center: {
      type: "text",
      content: "SELECT",
      function: null,
    },
    right: {
      type: "text",
      content: "Back",
      function: () => {
        setView("main");
        setShowOptions(false);
        render();
      },
    },
  },
  howToUse: {
    left: {
      type: "text",
      content: "Prev",
      function: () => {
        setHowToUseData(howToUseData - 1);
        render();
      },
    },
    center: {
      type: "text",
      content: "SCAN",
      function: () => {
        setView("main");
        render();
      },
    },
    right: {
      type: "text",
      content: "Next",
      function: () => {
        setHowToUseData(howToUseData + 1);
        render();
      },
    },
  },
  scanResult: {
    left: null,
    center: {
      type: "text",
      content: "OPEN",
      function: () => {
        setView("main");
        render();
      },
    },
    right: {
      type: "text",
      content: "Back",
      function: () => {
        setView("main");
        render();
      },
    },
  },
};
