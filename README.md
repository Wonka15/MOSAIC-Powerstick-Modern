# Mosaic Powerstick Modern

A friendly, responsive browser interface inspired by the original MOSAIC Powerstream app for the Powerstick PSTR2.

## Project direction

See the [MOSAIC modernization roadmap](docs/roadmap.md) for the phased plan, safety rules, current status, and next milestone. The current research is focused on preserving the original browser interface using external access only; internal firmware access is not required.

Keep the original app's approachable character:
- Bright blue navigation/header
- Soft mint, coral, and warm yellow accents
- Colorful media shortcuts
- Simple Mosaic / this-device navigation

Modernize it with responsive layouts, accessible controls, larger touch targets, and a cleaner media library.

## MOSAIC Wi-Fi launch experience

The home page now includes a gateway launcher for users who have manually joined the PSTR2 Wi-Fi. It opens the known gateway address (`http://192.168.10.1/`) in a separate tab so the companion page stays open. This is a first-step navigation aid, **not automatic Wi-Fi detection or a live file connection**. See [the Wi-Fi launch and captive-portal feasibility notes](docs/research/wifi-launch-and-captive-portal.md).

## What currently works

- Responsive home screen and bottom navigation
- Sample library and folder list (**demonstration data only**)
- Device details transcribed from the PSTR2 label
- Local video preview: choose a video file on the current device and play it in the browser
- No external libraries or build step required

## What is not connected yet

This is a front-end prototype. It does **not** yet communicate with the Powerstick, list its real files, upload files, or stream videos from it.

The next research step is to inspect the original app's network behavior and determine what local endpoints the PSTR2 exposes. Browser restrictions such as CORS, HTTP authentication, and mixed-content rules may require a small local companion service rather than GitHub Pages alone.

## Project map

```text
index.html                         Companion app prototype and home page
research.html                      Standalone, mobile-friendly history archive
css/styles.css                     Colors, spacing, cards, and responsive layout
js/app.js                          Navigation, demo files, and local video player
docs/protocol-notes.md             Confirmed facts, observed web UI, and unknown device behavior
docs/interface-preservation.md     External-only research plan and UI recreation strategy
docs/roadmap.md                    Phased hardware and software modernization plan
docs/hardware-and-company-history.md  RT5350F board evidence, Power7 comparison, Ottawa history and FCC context
docs/code-map.md                   Beginner guide to the code and comment labels
docs/history-and-credits.md        Product history, company, people, and video sources
docs/research/README.md            Research archive guide and evidence standards
docs/research/ios-app-analysis.md   Original iOS app investigation notebook
docs/research/wifi-launch-and-captive-portal.md  Wi-Fi launch flow and browser limitations
docs/research/kickstarter-and-timeline.md  Campaign record, chronology, and spec comparisons
```

## Beginner-friendly comment colors and hashtags

The comments use colored emoji labels and searchable hashtags. These labels are documentation markers; they do not change how the browser runs the code.

| Label | Meaning |
| --- | --- |
| 🟦 `#PAGE_STRUCTURE` / `#NAVIGATION` | Main page layout and movement between screens |
| 🟩 `#COMPONENT` / `#FILE_LIST` | Visible interface pieces and how they are built |
| 🟨 `#DEMO` / `#FUTURE_DEV` | Example data, temporary behavior, and future work |
| 🟥 `#SAFETY` / `#DEVICE_API` | Important limitations and areas needing extra care |

Search the repository for a hashtag to find related code. See [docs/code-map.md](docs/code-map.md) for a gentle walkthrough.

## Publish with GitHub Pages

1. Open the repository's **Settings** tab.
2. Choose **Pages** in the left sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.
5. Wait for GitHub Pages to finish deploying. The Pages panel will show the live website address.

## Safety and privacy

- Never commit the Powerstick Wi-Fi password, private media, session tokens, or personal network details.
- The observed local browser login (`admin` / `admin`) is documented as a device-specific research finding in `docs/protocol-notes.md`; do not reuse it elsewhere or expose the administration interface to the public internet.
- A user screenshot exposed the device's Wi-Fi password. It has intentionally **not** been copied into this project.
- Do not attempt firmware changes or open the enclosure while the battery is connected. Start with read-only network research.

## How to make a safe change

1. Open the file that matches the part you want to change.
2. Read the nearby comment and hashtag first.
3. Make one small change at a time.
4. Preview the website on a phone-sized screen and a desktop-sized screen.
5. Check the browser console if something stops working.
6. Do not remove a safety note or mark a demo feature as live unless it has been tested with the actual Powerstick.

## History, Kickstarter & engineering credits

The companion app links to a separate, mobile-friendly research page (`research.html`) with clear entry points for the campaign timeline, company background, engineering credits, and three embedded source videos. The research notes separate campaign-era advertising, later hands-on reporting, the physical PSTR2 label, current company information, and verified versus unverified engineering credits.

Start with [docs/research/README.md](docs/research/README.md), then read [the Kickstarter record and product timeline](docs/research/kickstarter-and-timeline.md) and [history and credits](docs/history-and-credits.md). Funding totals, backer counts, video metadata, and MOSAIC-specific individual contributions remain open until confirmed by primary sources.
