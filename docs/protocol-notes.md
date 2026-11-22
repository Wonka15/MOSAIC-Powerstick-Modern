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

## Confirmed from the user's app description
- The device creates an ad-hoc Wi-Fi network.
- The original app can browse the Mosaic folder structure.
- The device can act as a Wi-Fi range extender.
- The original app includes a built-in video player.
- MP4 playback supports pause, resume, and seeking.

## Unknown — investigate before implementing
- HTTP endpoints and authentication requirements
- Whether the device serves WebDAV, SMB, HTTP, or a proprietary API
- Whether video playback uses HTTP byte-range requests
- Upload and delete behavior
- CORS behavior and whether a local companion service is needed
- Storage capacity and battery-status endpoints

## Safe investigation plan
1. Connect to the device using the original supported app.
2. Record the steps and screens used to browse a folder and play an MP4.
3. Inspect only normal, read-only network traffic where permitted.
4. Document request paths, methods, response types, and headers without recording passwords or private file contents.
5. Test read-only endpoints before attempting any write operation.

Never publish Wi-Fi credentials, admin passwords, private file names, or media URLs.