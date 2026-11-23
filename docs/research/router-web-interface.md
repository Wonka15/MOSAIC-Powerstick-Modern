# MOSAIC local web interface investigation

**Status:** Initial source review documented; battery telemetry not found yet.

This note records the local web-interface material supplied during the external, read-only investigation of the MOSAIC PowerStick PSTR2. It distinguishes what the supplied files show from what remains unknown.

## Confirmed observations

- The device's local administration interface is reached at `http://192.168.10.1/`.
- The supplied homepage HTML identifies the page as **Wireless Router** and loads `/quick/common.css` and `/lang/b28n.js`.
- The homepage links to:
  - `/quick/apcli.asp` — the user identified this as the Wi-Fi scan / connect-to-network screen.
  - `/quick/wifi_basic.asp` — the MOSAIC wireless security screen.
- The user supplied the contents of `/lang/b28n.js`. It is a modified Butterfat/Butterlate-style localization script. It reads a `language` cookie, defaults to English, and loads language message XML from `/lang/<language>/messages.xml` using XMLHttpRequest.
- The user supplied `/quick/common.css`. It styles the router-style interface and includes MOSAIC-specific classes for the Wi-Fi repeater, Wi-Fi security, and Wi-Fi scan screens.
- The stylesheet contains firmware-related presentation selectors, including `.firmware`, `#versionfounded`, `light1_tips`, and `upgradedig_txt`. These indicate that the stylesheet anticipates firmware/version UI elements; CSS alone does **not** prove that an updater is active, reachable, or safe to use.
- A request to `/cgi-bin/` returned an error stating that the CGI process file does not exist at that path.
- A request to `/status.asp` returned a page-not-found error. These two results only rule out those tested paths; they do not establish that no other status or API endpoint exists.

## Interpretation (not a hardware identification)

The supplied HTML, CSS, and localization script are consistent with an embedded router-style administration interface. The Butterlate/Ralink attribution in the localization script suggests a Ralink-derived software lineage, but this is not enough to identify the exact chipset, operating system, firmware version, or vendor implementation.

The `apcli.asp` page is for Wi-Fi scanning/connection configuration. It is not evidence of a battery-monitoring screen or battery API.

## Battery-monitoring findings

No battery percentage, state-of-charge value, battery voltage, charging state, BMS data, or battery telemetry endpoint has been identified in the supplied homepage HTML, localization script, or common stylesheet.

This does not prove that the hardware cannot provide battery data. The information may be exposed through the original PowerStream app, a separate device service, or hardware not represented in the router web UI.

A voltage reading alone would not automatically provide an accurate percentage. A reliable estimate may require battery chemistry and pack configuration, a suitable discharge curve, and/or data from the battery-management electronics.

## Next read-only investigation steps

1. Inspect the actual HTML source of `/quick/wifi_basic.asp` and any script files it references.
2. Inspect the actual HTML source of `/quick/apcli.asp` and its referenced scripts, focusing on form actions, JavaScript function names, and read-only request paths. The page's Wi-Fi scan function is already understood at a high level; do not submit configuration changes.
3. Follow only resource paths discovered in the supplied HTML or scripts rather than guessing endpoint names.
4. Separately investigate the original PowerStream app's device communication, without publishing passwords, session tokens, private filenames, media URLs, or authenticated request captures.
5. Record any battery-related field only after observing an actual response or app display that supports it.

## Safety and scope

- Keep the device on its local Wi-Fi; do not expose its administration interface to the public internet.
- Do not press Apply, Save, Reset, or Upgrade during this read-only investigation.
- Do not attempt firmware flashing, credential bypass, brute force, or enclosure opening as part of this work.
- Never commit Wi-Fi passwords, administrator credentials, session cookies, tokens, or private media information.
- Treat all battery telemetry and undocumented endpoints as **unknown** until directly observed.

## Evidence boundary

This document is based on user-supplied page source, CSS, and observed responses from the local device. The repository does not contain a direct capture of the device's firmware, a complete endpoint inventory, or proof of battery telemetry support.
