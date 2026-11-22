# Mosaic Powerstick Modern

A friendly, responsive browser interface inspired by the original MOSAIC Powerstream app for the Powerstick PSTR2.

## Project direction

Preserve the original app's approachable character:
- bright blue navigation/header
- soft mint, coral, and warm yellow accents
- colorful media shortcuts
- simple Mosaic / this-device navigation

Modernize it with responsive layouts, accessible controls, larger touch targets, and a cleaner media library.

## Website prototype

The repository includes a static website:
- responsive home screen and bottom navigation
- sample library and folder list (demonstration data only)
- device details transcribed from the PSTR2 label
- local video preview: choose a video file on the current device and play it in the browser
- no external libraries or build step required

## Publish with GitHub Pages

1. Open the repository's **Settings** tab.
2. Choose **Pages** in the left sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.
5. Wait for GitHub Pages to finish deploying. The Pages panel will show the live website address.

## Important: live device access is not implemented yet

This is a front-end prototype. It does **not** yet communicate with the Powerstick, list its real files, upload files, or stream videos from it. The next research step is to inspect the original app's network behavior and determine what local endpoints the PSTR2 exposes. Browser restrictions such as CORS, HTTP authentication, and mixed-content rules may require a small local companion service rather than GitHub Pages alone.

## Project structure

```text
index.html
css/styles.css
js/app.js
docs/protocol-notes.md
```

## Safety and privacy

- Do not commit the Powerstick Wi-Fi password, admin credentials, private media, or personal network details.
- The device label photo contains a Wi-Fi password. It has intentionally **not** been copied into this project.
- Do not attempt firmware changes or open the enclosure while the battery is connected. Start with read-only network research.

## Beginner-friendly code notes

The JavaScript is intentionally small and commented. `sampleFiles` is only mock content. Replace it with real device data only after the Powerstick protocol is verified.
