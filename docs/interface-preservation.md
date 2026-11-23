# MOSAIC interface preservation plan

## Purpose

Preserve and modernize the original PowerStick MOSAIC experience using only the device's exposed browser interface and normal user-visible behavior. The user does not currently have access to internal firmware, source code, shell/console, serial interface, or internal storage contents. The project must not depend on opening the enclosure or obtaining internal access.

## Confirmed external interface

The user has reached the local interface at `http://192.168.10.1/` while connected to the MOSAIC Wi-Fi network.

Observed during testing:
- **Web login credentials discovered and tested:** the user successfully authenticated to this specific unit with its default administrator credential pair. The exact password is intentionally omitted from this public repository.
- MOSAIC by Powerstick landing page with **Connect to Internet** and **MOSAIC Security** tiles.
- **Mosaic AP Feature** page with a **SCAN WI-FI** control, an Available Wi-Fi Connections table, security-mode labels (OPEN, SHARED, WPAPSK, WPA2PSK), channel and MAC fields, security/encryption selectors, Wi-Fi password field, and Back / Apply / Cancel controls.
- **MOSAIC Security** page explicitly describes changing security settings and the MOSAIC Wi-Fi password. It shows SSID, WPA-PSK, encryption choices TKIP/AES/TKIPAES, a password field, and Back / Apply / Cancel controls.

These are observations of visible UI, not proof of undocumented internal architecture. Exact behavior of Scan, Apply, connection modes, and security settings remains unverified. No settings have been changed as part of this research.

## Confirmed app-side storage browsing

The user confirms that the original MOSAIC PowerStream iOS app can connect to the device and show four content categories: **Videos, Photos, Music, and Documents**. The user also recalls built-in test films and documentation stored on the device. This is direct user observation of the app's visible behavior, not a protocol-level finding.

This is an important separate discovery from the browser administration UI: the original app can browse a categorized media/document library, while the browser page at the local gateway has so far shown network/security administration. The file-access service/API used by the app remains unidentified. Do not assume that the admin web server itself exposes the library.

Historical reference: [Apple App Store listing for MOSAIC PowerStream](https://apps.apple.com/us/app/mosaic-powerstream/id1016446202) and [AIVAnet review](https://www.aivanet.com/2015/12/charge-store-and-more-with-the-mosaic-review/).

## Confirmed wireless video playback

The user has played a built-in movie successfully in the original MOSAIC PowerStream iOS app while connected to the device. This confirms working app-side wireless video retrieval/playback in addition to the four visible library categories. The underlying transport and streaming method remain unknown; do not label it HTTP, WebDAV, SMB, or a proprietary protocol until observed.

This makes a modern media-browser recreation a more concrete goal, but the companion site's current media demo must remain clearly separate from real hardware streaming until the protocol is identified and tested.

## What we can do without internal access

1. Maintain a screenshot-based catalog of every visible screen.
2. Record exact labels, selectable options, displayed status, and navigation paths.
3. Explore ordinary navigation and safe read-only actions only.
4. Recreate the original visual experience in our companion website as a **simulation**.
5. Clearly label simulated controls as non-connected until an actual protocol is observed and tested.
6. If the interface later exposes a normal file browser, document its visible behavior without modifying or deleting data.

## What we cannot claim yet

- Which operating system or firmware is installed.
- That the device runs Linux or OpenWrt.
- Which file-sharing protocol or API it uses.
- That the browser interface exposes file browsing or media streaming.
- That the AP feature definitely connects as a Wi-Fi client, operates as a repeater, or supports a particular bridge mode.
- What the Apply buttons do internally.

## Safety and privacy

- Do not press Apply while exploring configuration screens.
- Do not change the SSID, wireless password, security mode, or encryption until recovery steps are known.
- Changing Wi-Fi security settings may disconnect every currently connected device.
- Do not factory-reset, flash firmware, or send guessed requests.
- The user's screenshot exposed a Wi-Fi password. It is intentionally omitted from this repository; do not reproduce it in code, documentation, issues, or commits.
- The successful default administrator login is documented as a device-specific finding in the protocol notes. The exact password is omitted from this public repository; do not reuse the credential or expose the local admin interface to the public internet.
- Keep the device's local administration interface off the public internet.

## Next milestone

Build a beginner-friendly **Original Interface** section in the companion website that reproduces the landing page and the two observed configuration screens using static sample values. Add clear "simulation — not connected to hardware" labels. Keep the existing media-library demo separate until real file access is independently observed.
