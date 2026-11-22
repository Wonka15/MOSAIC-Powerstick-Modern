// Friendly front-end prototype. The sample items below are demonstration data, not a live device listing.
const sampleFiles=[
 {name:"Family Videos",type:"folder",meta:"8 items",icon:"▱"},
 {name:"Vacation Photos",type:"folder",meta:"42 items",icon:"▧"},
 {name:"Welcome.mp4",type:"video",meta:"MP4 video · sample",icon:"▶"},
 {name:"Favorite Songs",type:"folder",meta:"12 items",icon:"♫"},
 {name:"Notes.pdf",type:"document",meta:"PDF document · sample",icon:"▤"}
];
const contentView=document.getElementById("contentView");
const viewTitle=document.getElementById("viewTitle");
const viewEyebrow=document.getElementById("viewEyebrow");
const viewContent=document.getElementById("viewContent");
const videoPicker=document.getElementById("videoPicker");
let currentVideoUrl=null;
function showHome(){contentView.classList.add("hidden");document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view==="home"))}
function showView(view){
 if(view==="home"){showHome();return}
 contentView.classList.remove("hidden");
 const titles={mosaic:"Mosaic library",iphone:"This device",photos:"Photos",videos:"Videos",music:"Music",files:"Documents",favorites:"Favorites",recent:"Recently viewed",device:"Powerstick details"};
 viewTitle.textContent=titles[view]||"Your library";
 viewEyebrow.textContent=view==="device"?"ABOUT YOUR DEVICE":"YOUR LIBRARY";
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
 if(view==="videos")renderVideo();
 else if(view==="device")renderDevice();
 else if(view==="iphone")renderEmpty("This is a prototype view. A future companion service can help the browser access files on this phone or computer.");
 else if(view==="favorites"||view==="recent")renderEmpty("Nothing here yet. Favorites and recently opened items will appear when a real library is connected.");
 else if(view==="photos")renderEmpty("Your photo albums will appear here when Mosaic's file access is connected.");
 else if(view==="music")renderEmpty("Your music folders will appear here when Mosaic's file access is connected.");
 else if(view==="files")renderList(sampleFiles.filter(f=>f.type==="document"||f.type==="folder"));
 else renderList(sampleFiles);
 contentView.scrollIntoView({behavior:"smooth",block:"start"});
}
function renderEmpty(message){const note=document.createElement("div");note.className="empty-note";note.textContent=message;viewContent.replaceChildren(note)}
function renderList(items){
 const list=document.createElement("div");list.className="file-list";
 items.forEach(item=>{
  const row=document.createElement("div");row.className="file-row";
  row.innerHTML='<span class="file-icon"></span><span class="file-info"><b></b><small></small></span><button class="file-action">Open</button>';
  row.querySelector(".file-icon").textContent=item.icon;row.querySelector("b").textContent=item.name;row.querySelector("small").textContent=item.meta;
  row.querySelector("button").addEventListener("click",()=>item.type==="video"?showView("videos"):renderEmpty("This is sample content. Live folder navigation will be added after the Powerstick file protocol is confirmed."));
  list.appendChild(row);
 });
 viewContent.replaceChildren(list);
}
function renderVideo(){
 const wrap=document.createElement("div");wrap.className="player-wrap";
 wrap.innerHTML='<video id="localVideo" controls playsinline></video><div class="player-tools"><span>MP4 video player</span><button class="file-action" id="chooseVideo">Choose a video</button></div>';
 viewContent.replaceChildren(wrap);wrap.querySelector("#chooseVideo").addEventListener("click",()=>videoPicker.click());
 if(currentVideoUrl)wrap.querySelector("video").src=currentVideoUrl;
 else {const note=document.createElement("div");note.className="empty-note";note.style.marginTop="12px";note.textContent="Choose an MP4 from this device to test the player. Direct Powerstick streaming will be added after its local API and browser-access rules are understood.";viewContent.appendChild(note)}
}
videoPicker.addEventListener("change",()=>{const file=videoPicker.files[0];if(!file)return;if(currentVideoUrl)URL.revokeObjectURL(currentVideoUrl);currentVideoUrl=URL.createObjectURL(file);showView("videos")});
function renderDevice(){
 const grid=document.createElement("div");grid.className="device-details";
 [["Model","PSTR2"],["Product family","Mosaic Powerstream"],["Battery capacity","4,500 mAh"],["Gateway address","192.168.10.1"],["Input","5V · 1,500 mA"],["USB output","5V · 1,000 mA"]].forEach(([label,value])=>{const d=document.createElement("div");d.className="detail";const small=document.createElement("small");small.textContent=label;const b=document.createElement("b");b.textContent=value;d.append(small,b);grid.appendChild(d)});
 const note=document.createElement("p");note.className="empty-note";note.style.gridColumn="1 / -1";note.textContent="Hardware details are transcribed from the device label. Connection and storage status will only appear when the device provides reliable information.";grid.appendChild(note);viewContent.replaceChildren(grid);
}
document.addEventListener("click",e=>{const target=e.target.closest("[data-view]");if(target)showView(target.dataset.view)});
document.getElementById("homeButton").addEventListener("click",showHome);
document.getElementById("menuButton").addEventListener("click",()=>showView("device"));