/* =========================================================
   🟦 #APP_OVERVIEW — MOSAIC POWERSTICK MODERN
   This file controls navigation and the small demo media player.

   IMPORTANT:
   - This is a front-end prototype, not a live Powerstick connection.
   - The sample files below are made-up demonstration entries.
   - Do not add Wi-Fi passwords or private media to this file.
   ========================================================= */


/* 🟩 #DEMO_LIBRARY — Replace these examples only after real file access is verified. */
const sampleFiles = [
  { name: "Family Videos", type: "folder", meta: "8 items", icon: "▱" },
  { name: "Vacation Photos", type: "folder", meta: "42 items", icon: "▧" },
  { name: "Welcome.mp4", type: "video", meta: "MP4 video · sample", icon: "▶" },
  { name: "Favorite Songs", type: "folder", meta: "12 items", icon: "♫" },
  { name: "Notes.pdf", type: "document", meta: "PDF document · sample", icon: "▤" }
];


/* 🟦 #PAGE_ELEMENTS — Find the page areas that JavaScript needs to update. */
const contentView = document.getElementById("contentView");
const viewTitle = document.getElementById("viewTitle");
const viewEyebrow = document.getElementById("viewEyebrow");
const viewContent = document.getElementById("viewContent");
const videoPicker = document.getElementById("videoPicker");
const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");

/* 🟨 #VIDEO_MEMORY — Holds a temporary browser-only URL for the chosen video. */
let currentVideoUrl = null;


/* 🟦 #NAVIGATION — Show the home screen and mark Home as selected. */
function showHome() {
  contentView.classList.add("hidden");
  updateActiveNavigation("home");
}

/* 🟦 #NAVIGATION — Keep the bottom navigation highlight in sync with the current view. */
function updateActiveNavigation(activeView) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    const isActive = button.dataset.view === activeView;
    button.classList.toggle("active", isActive);

    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

/* 🟦 #VIEW_ROUTER — Choose which section should appear when a button is pressed. */
function showView(view) {
  if (view === "home") {
    showHome();
    return;
  }

  const viewNames = {
    mosaic: "Mosaic library",
    iphone: "This device",
    photos: "Photos",
    videos: "Videos",
    music: "Music",
    files: "Documents",
    favorites: "Favorites",
    recent: "Recently viewed",
    device: "Powerstick details"
  };

  contentView.classList.remove("hidden");
  viewTitle.textContent = viewNames[view] || "Your library";
  viewEyebrow.textContent = view === "device" ? "ABOUT YOUR DEVICE" : "YOUR LIBRARY";
  updateActiveNavigation(view);

  // 🟨 #VIEW_RENDERING — Each view has its own small rendering function.
  switch (view) {
    case "videos":
      renderVideo();
      break;
    case "device":
      renderDevice();
      break;
    case "iphone":
      renderEmpty("This is a prototype view. A future companion service can help the browser access files on this phone or computer.");
      break;
    case "favorites":
    case "recent":
      renderEmpty("Nothing here yet. Favorites and recently opened items will appear when a real library is connected.");
      break;
    case "photos":
      renderEmpty("Your photo albums will appear here when Mosaic's file access is connected.");
      break;
    case "music":
      renderEmpty("Your music folders will appear here when Mosaic's file access is connected.");
      break;
    case "files":
      renderList(sampleFiles.filter((file) => file.type === "document" || file.type === "folder"));
      break;
    default:
      renderList(sampleFiles);
  }

  contentView.scrollIntoView({ behavior: "smooth", block: "start" });
}


/* 🟩 #EMPTY_STATE — Show a clear explanation when a section has no real data yet. */
function renderEmpty(message) {
  const note = document.createElement("div");
  note.className = "empty-note";
  note.textContent = message;

  // replaceChildren removes the previous view without leaving old elements behind.
  viewContent.replaceChildren(note);
}


/* 🟩 #FILE_LIST — Build file rows using textContent instead of inserting file names as HTML. */
function renderList(items) {
  const list = document.createElement("div");
  list.className = "file-list";

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "file-row";

    const icon = document.createElement("span");
    icon.className = "file-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = item.icon;

    const info = document.createElement("span");
    info.className = "file-info";

    const name = document.createElement("b");
    name.textContent = item.name;

    const meta = document.createElement("small");
    meta.textContent = item.meta;

    const openButton = document.createElement("button");
    openButton.className = "file-action";
    openButton.type = "button";
    openButton.textContent = "Open";

    // 🟨 #FILE_ACTION — Demo folders show a note; the sample video opens the player.
    openButton.addEventListener("click", () => {
      if (item.type === "video") {
        showView("videos");
      } else {
        renderEmpty("This is sample content. Live folder navigation will be added after the Powerstick file protocol is confirmed.");
      }
    });

    info.append(name, meta);
    row.append(icon, info, openButton);
    list.appendChild(row);
  });

  viewContent.replaceChildren(list);
}


/* 🟩 #VIDEO_PLAYER — Play a video selected from this phone, tablet, or computer. */
function renderVideo() {
  const playerCard = document.createElement("div");
  playerCard.className = "player-wrap";

  const video = document.createElement("video");
  video.id = "localVideo";
  video.controls = true;
  video.playsInline = true;

  const tools = document.createElement("div");
  tools.className = "player-tools";

  const label = document.createElement("span");
  label.textContent = "MP4 video player";

  const chooseButton = document.createElement("button");
  chooseButton.className = "file-action";
  chooseButton.type = "button";
  chooseButton.textContent = "Choose a video";
  chooseButton.addEventListener("click", () => videoPicker.click());

  tools.append(label, chooseButton);
  playerCard.append(video, tools);
  viewContent.replaceChildren(playerCard);

  if (currentVideoUrl) {
    video.src = currentVideoUrl;
    return;
  }

  const note = document.createElement("div");
  note.className = "empty-note";
  note.style.marginTop = "12px";
  note.textContent = "Choose an MP4 from this device to test the player. Direct Powerstick streaming will be added after its local API and browser-access rules are understood.";
  viewContent.appendChild(note);
}


/* 🟨 #VIDEO_FILE_PICKER — Create a temporary local URL when the user chooses a video. */
videoPicker.addEventListener("change", () => {
  const selectedFile = videoPicker.files[0];

  if (!selectedFile) {
    return;
  }

  // Release the previous temporary URL so the browser can reclaim its memory.
  if (currentVideoUrl) {
    URL.revokeObjectURL(currentVideoUrl);
  }

  currentVideoUrl = URL.createObjectURL(selectedFile);
  showView("videos");
});


/* 🟦 #DEVICE_DETAILS — Show only the hardware facts confirmed from the device label. */
function renderDevice() {
  const details = [
    ["Model", "PSTR2"],
    ["Product family", "Mosaic Powerstream"],
    ["Battery capacity", "4,500 mAh"],
    ["Gateway address", "192.168.10.1"],
    ["Input", "5V · 1,500 mA"],
    ["USB output", "5V · 1,000 mA"]
  ];

  const grid = document.createElement("div");
  grid.className = "device-details";

  details.forEach(([label, value]) => {
    const card = document.createElement("div");
    card.className = "detail";

    const labelElement = document.createElement("small");
    labelElement.textContent = label;

    const valueElement = document.createElement("b");
    valueElement.textContent = value;

    card.append(labelElement, valueElement);
    grid.appendChild(card);
  });

  const note = document.createElement("p");
  note.className = "empty-note";
  note.style.gridColumn = "1 / -1";
  note.textContent = "Hardware details are transcribed from the device label. Connection and storage status will only appear when the device provides reliable information.";

  grid.appendChild(note);
  viewContent.replaceChildren(grid);
}


/* 🟦 #EVENT_HANDLERS — One shared listener handles all buttons with a data-view attribute. */
document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");

  if (viewButton) {
    showView(viewButton.dataset.view);
  }
});

/* 🟦 #EVENT_HANDLERS — Small buttons that do not use the shared data-view listener. */
homeButton.addEventListener("click", showHome);
menuButton.addEventListener("click", () => showView("device"));


/* 🟥 #FUTURE_DEVICE_API
   Do not connect to guessed URLs or invent endpoints.
   First confirm the PSTR2's real read-only API, authentication,
   and browser-access behavior. See docs/protocol-notes.md.
*/


/* 🟦 #GATEWAY_SHORTCUT — Copy the number-only address when opening the local admin page.
   The browser handles its own HTTP sign-in prompt; this page cannot fill that prompt. */
const gatewayButton = document.getElementById("gatewayButton");
const gatewayCopyStatus = document.getElementById("gatewayCopyStatus");

gatewayButton.addEventListener("click", () => {
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    gatewayCopyStatus.textContent = "Gateway opening. If needed, copy the address shown above.";
    return;
  }

  navigator.clipboard.writeText("192.168.10.1")
    .then(() => {
      gatewayCopyStatus.textContent = "Copied 192.168.10.1. The gateway is opening in a new tab.";
    })
    .catch(() => {
      gatewayCopyStatus.textContent = "Gateway opening. Clipboard access was unavailable; the address is shown above.";
    });
});
