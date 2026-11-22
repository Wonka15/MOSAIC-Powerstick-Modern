# Wi-Fi launch and captive-portal feasibility

## Goal

Make the GitHub Pages companion the friendly entry point for a person who has manually joined the MOSAIC Powerstream PSTR2 Wi-Fi network.

Desired user journey:

1. User joins the PSTR2 Wi-Fi from the operating system's Wi-Fi settings.
2. User opens the MOSAIC GitHub Pages companion.
3. The companion helps the user reach the PSTR2 gateway.
4. Once the actual protocol and browser access rules are understood, the companion can show the real device library.

## Implemented first step

The home page includes an **Open MOSAIC gateway** link to the gateway address printed on the owner's PSTR2 label: `http://192.168.10.1/`. It opens in a separate tab so the companion remains available.

This link only tests whether a browser can navigate to the gateway. It does not establish that the gateway hosts a web UI, prove that the user is connected to the PSTR2, or connect the companion to device files.

## Why automatic detection and redirection are not implemented yet

- Ordinary websites cannot read the connected Wi-Fi SSID or tell the browser which access point the user joined.
- A website cannot silently switch a phone or computer onto the PSTR2 network.
- GitHub Pages is served over HTTPS. Browser mixed-content rules can block JavaScript requests from that HTTPS page to an HTTP-only local device.
- Even if the device is reachable, browser CORS and private-network access restrictions may prevent JavaScript from reading its responses.
- A captive-portal pop-up that appears immediately after joining Wi-Fi is normally initiated by the access point/router's captive-portal configuration and operating-system connectivity checks. A GitHub Pages site cannot independently trigger that system behavior.

## Investigation plan

1. Keep the original app and physical PSTR2 available as the reference implementation.
2. Join the PSTR2 Wi-Fi and manually open `http://192.168.10.1/` in a browser.
3. Record whether the address loads, redirects, requests authentication, or returns an error. Do not publish passwords, tokens, or private file names.
4. Compare the browser result with the original app's connection behavior.
5. Identify the actual read-only file-listing endpoint, response format, authentication, and any CORS headers before writing a browser client.
6. Test on desktop and mobile browsers. If browser restrictions prevent direct access, evaluate a local companion service or a device-side captive-portal/web-server feature only if the hardware supports it.

## Evidence labels

- **Implemented:** the companion has a link that opens the printed gateway address in a new tab.
- **Known limitation:** the website cannot read the Wi-Fi SSID or silently join the network.
- **Unknown:** whether the PSTR2 gateway serves a browser UI, what API the original app uses, and whether browser access is possible without a local helper.
- **Not implemented:** automatic network detection, automatic redirect, captive-portal registration, real file browsing, upload, and streaming.

## Safety

Start with read-only navigation and observation. Do not guess API endpoints for write operations, alter firmware, or commit Wi-Fi credentials, authentication details, private file names, or media URLs.
