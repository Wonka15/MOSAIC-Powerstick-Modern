# Original iOS app analysis notebook

This notebook is for documenting the original **MOSAIC PowerStream** iOS app while using an owner-controlled iPhone/iPad and PSTR2 device. The goal is to reproduce compatible behavior in MOSAIC Powerstick Modern—not to claim that the original source code has been recovered.

## Scope and ground rules

- Work only with the app and hardware the project owner is authorized to use.
- Begin with normal app use and read-only observations.
- Do not jailbreak the device, bypass account protections, defeat app encryption, or attempt firmware modification.
- Do not upload app binaries, private app data, device credentials, personal photos/videos, or unredacted packet captures to the public repository.
- Treat the App Store app package as compiled code. A backup may expose app data/resources, but it will not normally provide the original Xcode project or readable source.
- Keep observed facts, deductions, and guesses in separate columns.

## Known starting point

- App: MOSAIC PowerStream
- App Store URL: https://apps.apple.com/us/app/mosaic-powerstream/id1016446202
- Hardware: MOSAIC POWERSTREAM, model PSTR2, part ECSL-801800
- Device gateway printed on label: `192.168.10.1`
- Existing project protocol notes: [../protocol-notes.md](../protocol-notes.md)

## Phase 1 — Preserve the current working setup

Before testing:
1. Do not delete or offload the original app.
2. Take screenshots of the app's About / Settings screen, if present.
3. Record the app version and iOS/iPadOS version.
4. Make an encrypted local backup of the iPhone/iPad if possible. Keep the backup private.
5. Photograph the PSTR2 label for private reference only; do not commit a label image if it exposes a Wi-Fi password or serial number.

### Device and app inventory

| Field | Observation |
| --- | --- |
| iPhone/iPad model | Not recorded yet |
| iOS/iPadOS version | Not recorded yet |
| MOSAIC app version | Not recorded yet |
| App opens successfully | Not tested in this notebook |
| PSTR2 powers on | Owner has the device; current condition to be recorded |
| PSTR2 Wi-Fi network visible | Not recorded yet |
| Date tested | Not recorded yet |

## Phase 2 — Screen-by-screen walkthrough

Use the app normally. Capture a screen recording with personal notifications disabled. Do not show private photo libraries, personal file names, Wi-Fi passwords, or account details.

For each screen, record:
- Screen title and visible controls.
- What happens after each tap.
- Whether the app asks to join the PSTR2 Wi-Fi network.
- Loading time, error message, or timeout.
- Whether the action changes anything on the device.
- Screenshot/video filename stored privately (not necessarily committed).

### Walkthrough checklist

- [ ] App launch / splash screen
- [ ] First-run permissions and onboarding
- [ ] Device connection / Wi-Fi instructions
- [ ] Home screen and navigation
- [ ] Photos view
- [ ] Videos view
- [ ] Music view
- [ ] Documents / file browser
- [ ] Folder navigation and back behavior
- [ ] File details / preview
- [ ] MP4 playback, pause, resume, seek
- [ ] Upload / import from iPhone or iPad
- [ ] Download / save to iPhone or iPad
- [ ] Rename, move, delete (observe only; do not test destructive actions yet)
- [ ] Settings, device information, storage, battery
- [ ] Help, About, app version

## Phase 3 — Read-only network observations

Start only after the normal screen walkthrough is documented.

Record the iPhone/iPad's Wi-Fi network name (SSID) and the PSTR2 gateway address privately. Do not publish passwords or device-specific identifiers.

Potentially useful observations:
- Does the app communicate with `192.168.10.1` when opening the device view?
- Does it use HTTP or HTTPS?
- Are file listings returned as JSON, XML, HTML, or another format?
- Does video playback request a whole file or byte ranges?
- Does the app poll a status endpoint for battery/storage information?

A network trace can contain credentials, cookies, file names, media URLs, and personal content. Keep raw captures local and private. Before sharing a trace, redact secrets and private data. Prefer documenting request method, path pattern, status code, content type, and range behavior rather than publishing raw headers or payloads.

## Phase 4 — App package and local data (optional)

If a computer is available, a tool such as iMazing may help create a local backup and inspect app data that iOS makes available. Backup extraction is incomplete by design and does not guarantee access to the installed executable or all app containers. An extracted app package may remain encrypted and should not be treated as source code.

Useful references:
- iMazing app data backup guide: https://imazing.com/guides/how-to-export-backup-and-transfer-ios-apps-data-and-settings
- iMazing app file access guide: https://imazing.com/guides/how-to-access-your-iphone-apps-files-and-data
- OWASP iOS local data testing notes: https://mas.owasp.org/MASTG-TEST-0052/

Do not upload an IPA, decrypted binary, private backup, or app container to GitHub. Share only non-sensitive metadata or selected redacted text/resources if needed.

## Observation log

Add one entry per test. Use neutral descriptions and include the app version and date.

| Date | App version | Screen / action | Observed result | Evidence type | Confidence |
| --- | --- | --- | --- | --- | --- |
| Not started | Unknown | Initial inventory | Awaiting owner walkthrough | Owner observation pending | — |

## Behavior map (fill in from testing)

| Feature | What original app does | Device request / endpoint | Replacement status |
| --- | --- | --- | --- |
| Connect to PSTR2 | Unknown | Unknown | Not implemented |
| List folders | Unknown | Unknown | Demo data only |
| List files | Unknown | Unknown | Demo data only |
| Download file | Unknown | Unknown | Not implemented |
| Upload file | Unknown | Unknown | Not implemented |
| Stream video | Unknown | Unknown | Local-file preview only |
| Device status | Unknown | Unknown | Label facts only |

## Evidence labels

- **Observed:** directly seen in the original app or on the physical device.
- **Captured:** supported by a private screenshot, screen recording, or local network trace.
- **Inferred:** a plausible explanation, not directly verified.
- **Unknown:** not yet investigated.

Never mark an inferred endpoint or behavior as confirmed until it has been repeated and independently checked.
