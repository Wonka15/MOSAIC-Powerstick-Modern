# PSTR2 research notes

## Confirmed from the device label
- Product name: MOSAIC POWERSTREAM
- Manufacturer branding: Powerstick.com
- Model number: PSTR2
- Part number: ECSL-801800
- Battery capacity: 4,500 mAh
- Input: +5V, 1,500 mA
- Output: +5V, 1,000 mA
- Gateway IP printed on label: 192.168.10.1
- Made in Canada

## Confirmed from the user's network test
- The device's Wi-Fi network appeared as **MOSAIC-1DE0**.
- The connected phone received IP address **192.168.10.2**.
- The phone's router/gateway value was **192.168.10.1**.
- Subnet mask shown: **255.255.255.0**.
- The phone remained connected to the MOSAIC Wi-Fi while testing the gateway.
- Browsing to `http://192.168.10.1/` produced a browser username/password authentication prompt.
- The user reports that **username `admin` and password `admin`** dismissed the prompt.
- The user later supplied a screenshot of the authenticated page at **192.168.10.1**. It shows a branded **MOSAIC by Powerstick** landing page with two large selectable tiles:
  - **Connect to Internet** (orange tile with a globe icon)
  - **MOSAIC Security** (teal tile with a padlock icon)
- The screenshot's browser address bar shows **192.168.10.1**. This confirms that the local gateway serves a graphical MOSAIC landing page after authentication.
- The earlier report that only the IP address appeared was an incomplete/temporary observation; the later screenshot is stronger evidence of the actual landing page.
- The screenshot does not show what either tile does. Their workflows and effects remain unverified.

### Important interpretation
The login prompt and its dismissal are useful evidence that a service at the local gateway is requesting HTTP-style browser authentication. The bare IP text displayed afterward does **not** establish that file browsing, streaming, or a complete web administration interface is available at the root path. The exact server software, authentication realm, and other endpoints remain unknown.

### Credential safety
The user observed `admin` / `admin` working to dismiss the local prompt on this unit. Treat this as a weak/default local-device credential, not as proof that every PSTR2 uses it. Keep the device on its isolated local Wi-Fi; do not expose its administration interface to the public internet. Do not reuse this password elsewhere. If a supported settings page later allows changing it, consider doing so only after documenting the original behavior and recovery method. This repository is public, so publishing the default may make other owners aware of it; never add the device's Wi-Fi password, private files, tokens, or captured authenticated requests.

## Confirmed from the user's app description
- The device creates an ad-hoc Wi-Fi network.
- The original app can browse the Mosaic folder structure.
- The device can act as a Wi-Fi range extender.
- The original app includes a built-in video player.
- MP4 playback supports pause, resume, and seeking.

## Confirmed from the two follow-up interface screenshots

### Connect to Internet / Mosaic AP Feature
- The page is titled **Mosaic AP Feature** and includes a **SCAN WI-FI** control.
- It has an **Available Wi-Fi Connections** table with columns **Select**, **SSID**, **Security Mode**, and **Encryption Type**.
- The visible security-mode choices are **OPEN**, **SHARED**, **WPAPSK**, and **WPA2PSK**.
- A configuration/status area shows **Status: Disconnect**, an SSID field, **Channel 11**, a MAC address field, **Security Mode: WPA2PSK**, **Encryption Type: AES**, and a Wi-Fi Password field, followed by **Back**, **Apply**, and **Cancel**.
- This strongly suggests a Wi-Fi scanning/configuration interface for connecting the MOSAIC to another wireless network or configuring its access-point function. The exact operating mode and what Apply changes are not yet verified. Do not submit settings during research.

### MOSAIC Security
- The page explicitly says: **“Change the security settings and the MOSAIC's WI-FI Password.”**
- It exposes the current SSID field (shown as **MOSAIC-1DE0**).
- It exposes **Security Mode** with **WPA-PSK** selected in the screenshot.
- It exposes **Encryption Type** choices **TKIP**, **AES**, and **TKIPAES**, with **AES** selected.
- It provides a field to change the MOSAIC Wi-Fi password and **Back**, **Apply**, and **Cancel** controls.
- The screenshot visibly contains a password value. It is intentionally **not reproduced here** and must not be committed to this public repository, copied into notes, or shared further. The current password should be treated as exposed in the shared screenshot; consider changing it later to a unique value, but only after documenting recovery steps and understanding that changing it will disconnect currently connected devices.

## Current access boundary and preservation strategy

The user currently has access only to the external device and its browser-based local interface. There is no access to internal firmware files, shell/console, serial interface, source code, or internal storage contents. The project must therefore proceed using the exposed interface and ordinary user-visible behavior; do not make internal access a prerequisite.

This is an **interface-preservation and black-box research** project:
1. Preserve screenshots and transcribe visible labels, controls, and status values.
2. Explore only ordinary UI navigation and read-only actions where possible.
3. Record what a control visibly does before inferring its purpose.
4. Do not submit configuration changes, reset, flash, or write data without an explicit test plan and recovery path.
5. Recreate the documented experience in the companion website as a clearly labeled simulation first. Do not imply simulated controls are connected to the hardware.
6. Keep unknown internal details explicitly unknown. The exposed UI does not prove the OS, firmware family, storage protocol, or internal architecture.

## Unknown — investigate before implementing
- Whether **Mosaic AP Feature** connects MOSAIC as a Wi-Fi client to an upstream router, configures its own access point, or supports both modes
- What **Apply** changes and whether it restarts the wireless service or changes the device's IP
- Whether the **MOSAIC Security** page's WPA-PSK setting is for the device's own hotspot only, and whether the login password is separate
- HTTP endpoints and authentication requirements beyond the observed root prompt
- Whether the device serves WebDAV, SMB, HTTP, or a proprietary API
- Whether video playback uses HTTP byte-range requests
- Upload and delete behavior
- CORS behavior and whether a local companion service is needed
- Storage capacity and battery-status endpoints
- Whether the device exposes any additional file-browsing or media functions through its external interface

## Safe investigation plan
1. Preserve screenshots of the login prompt and the authenticated MOSAIC landing page.
2. The **Mosaic AP Feature** screenshot documents a Wi-Fi scan and upstream/access-point configuration controls; do not press Apply until the current settings and recovery method are understood.
3. The **MOSAIC Security** screenshot documents SSID, WPA-PSK, encryption and Wi-Fi password controls. Do not change these yet; a password change will disconnect clients.
4. Record the steps and screens used by the original app to browse a folder and play an MP4, if the app can still be run.
5. Inspect only normal, read-only network traffic where permitted.
6. Document request paths, methods, response types, and headers without recording passwords or private file contents.
7. Test read-only endpoints before attempting any write operation.

Never publish the Wi-Fi password, private file names, session tokens, authenticated request captures, or media URLs.
