# MOSAIC interface preservation plan

## Purpose

Preserve and modernize the original PowerStick MOSAIC experience using only the device's exposed browser interface and normal user-visible behavior. The user does not currently have access to internal firmware, source code, shell/console, serial interface, or internal storage contents. The project must not depend on opening the enclosure or obtaining internal access.

## Confirmed external interface

The user has reached the local interface at `http://192.168.10.1/` while connected to the MOSAIC Wi-Fi network.

Observed during testing:
- Browser authentication prompt; the user reports `admin` / `admin` dismisses it on this device.
- MOSAIC by Powerstick landing page with **Connect to Internet** and **MOSAIC Security** tiles.
- **Mosaic AP Feature** page with a **SCAN WI-FI** control, an Available Wi-Fi Connections table, security-mode labels (OPEN, SHARED, WPAPSK, WPA2PSK), channel and MAC fields, security/encryption selectors, Wi-Fi password field, and Back / Apply / Cancel controls.
- **MOSAIC Security** page explicitly describes changing security settings and the MOSAIC Wi-Fi password. It shows SSID, WPA-PSK, encryption choices TKIP/AES/TKIPAES, a password field, and Back / Apply / Cancel controls.

These are observations of visible UI, not proof of undocumented internal architecture. Exact behavior of Scan, Apply, connection modes, and security settings remains unverified. No settings have been changed as part of this research.

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
- The observed `admin` / `admin` browser login is documented in the protocol notes as a device-specific observation, not a secure credential recommendation.
- Keep the device's local administration interface off the public internet.

## Next milestone

Build a beginner-friendly **Original Interface** section in the companion website that reproduces the landing page and the two observed configuration screens using static sample values. Add clear "simulation — not connected to hardware" labels. Keep the existing media-library demo separate until real file access is independently observed.
