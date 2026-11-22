# Beginner code map

Welcome! This page explains where things live in Mosaic Powerstick Modern. You do not need to understand the whole project before making a small change.

## Start here

| If you want to... | Open this file |
| --- | --- |
| Change words, buttons, or page sections | `index.html` |
| Change colors, spacing, or mobile layout | `css/styles.css` |
| Change what buttons do | `js/app.js` |
| Understand the Powerstick itself | `docs/protocol-notes.md` |

## How the website fits together

1. **HTML** (`index.html`) is the page's structure. It contains the header, welcome section, category buttons, navigation, and empty content area.
2. **CSS** (`css/styles.css`) is the visual design. It controls colors, fonts, card shapes, spacing, and how the page rearranges on phones.
3. **JavaScript** (`js/app.js`) makes the page interactive. It switches views, creates sample file rows, and opens the local video player.

A useful way to remember it:

- HTML = what is on the page
- CSS = what it looks like
- JavaScript = what it does

## Comment color legend

These labels are there to help people navigate the source code. They are ordinary comments, not special programming instructions.

- 🟦 **Blue — structure and navigation:** page sections, shared setup, and event handlers.
- 🟩 **Green — interface components:** visible cards, file lists, device details, and empty states.
- 🟨 **Yellow — examples and future work:** demonstration data, local-only behavior, and planned improvements.
- 🟥 **Red — safety and important limitations:** areas that must not be treated as complete or connected without testing.

## Hashtag guide

Search for these tags in GitHub's code search or your editor:

| Hashtag | Use |
| --- | --- |
| `#APP_OVERVIEW` | What the JavaScript file is responsible for |
| `#PAGE_METADATA` | Browser title, viewport, and page description |
| `#WELCOME_PANEL` | Main home-screen introduction |
| `#LIBRARY_SHORTCUTS` | Buttons for photos, videos, music, and documents |
| `#NAVIGATION` / `#VIEW_ROUTER` | Switching between the app's screens |
| `#DEMO_LIBRARY` | Sample entries that are not real device files |
| `#FILE_LIST` | How file and folder rows are drawn |
| `#VIDEO_PLAYER` | Local video playback |
| `#DEVICE_DETAILS` | Hardware information shown in the app |
| `#RESPONSIVE_PHONE` | CSS rules for narrow phone screens |
| `#DEVICE_API` | Future work involving the real Powerstick connection |

## Important prototype limitation

The current sample library is not connected to the Powerstick. The video player opens a file selected from the phone, tablet, or computer running the website. It does not stream an MP4 from the Powerstick yet.

Before implementing a real connection, document the actual device requests and verify the device's read-only behavior. Do not guess endpoint names, authentication, or upload methods. Keep passwords and private media out of GitHub.

## A safe first edit

Try changing the home-screen headline in `index.html`. Save the file, refresh the website, and see the change. This is a simple way to learn how the HTML file controls visible text without changing the app's behavior.
