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

## Unknown — investigate before implementing
- What the **Connect to Internet** and **MOSAIC Security** tiles do, and which settings or workflows they open
- HTTP endpoints and authentication requirements beyond the observed root prompt
- Whether the device serves WebDAV, SMB, HTTP, or a proprietary API
- Whether video playback uses HTTP byte-range requests
- Upload and delete behavior
- CORS behavior and whether a local companion service is needed
- Storage capacity and battery-status endpoints
- What “Connect to Internet” and “Mosaic Security” refer to in the user's current screen

## Safe investigation plan
1. Preserve screenshots of the login prompt and the authenticated MOSAIC landing page.
2. Inspect **Connect to Internet** first only if you can do so without changing settings; document the screen it opens and stop before applying changes.
3. Inspect **MOSAIC Security** similarly; document the screen and stop before changing passwords, encryption or network settings.
4. Record the steps and screens used by the original app to browse a folder and play an MP4, if the app can still be run.
5. Inspect only normal, read-only network traffic where permitted.
6. Document request paths, methods, response types, and headers without recording passwords or private file contents.
7. Test read-only endpoints before attempting any write operation.

Never publish the Wi-Fi password, private file names, session tokens, authenticated request captures, or media URLs.
