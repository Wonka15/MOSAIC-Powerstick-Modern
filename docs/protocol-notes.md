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
- After authentication, the browser displayed only the text/address **192.168.10.1**, rather than a recognizable file browser or dashboard.
- The user subsequently reported seeing two labels/options: **“Connect to Internet”** and **“Mosaic Security.”** Their exact screen location and function have not yet been established; do not assume these are menu items, Wi-Fi networks, or services until a screenshot confirms it.

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
- Whether the root response containing `192.168.10.1` is intentional, a redirect/fallback, or a minimal diagnostic response
- HTTP endpoints and authentication requirements beyond the observed root prompt
- Whether the device serves WebDAV, SMB, HTTP, or a proprietary API
- Whether video playback uses HTTP byte-range requests
- Upload and delete behavior
- CORS behavior and whether a local companion service is needed
- Storage capacity and battery-status endpoints
- What “Connect to Internet” and “Mosaic Security” refer to in the user's current screen

## Safe investigation plan
1. Preserve screenshots of the login prompt and the page shown after authentication.
2. Record where “Connect to Internet” and “Mosaic Security” appear, with a screenshot that does not expose passwords or private network information.
3. Record the steps and screens used by the original app to browse a folder and play an MP4, if the app can still be run.
4. Inspect only normal, read-only network traffic where permitted.
5. Document request paths, methods, response types, and headers without recording passwords or private file contents.
6. Test read-only endpoints before attempting any write operation.

Never publish the Wi-Fi password, private file names, session tokens, authenticated request captures, or media URLs.
