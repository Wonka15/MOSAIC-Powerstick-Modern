# MOSAIC Powerstick Modern — project roadmap

This roadmap turns the hardware research into a careful, testable modernization plan. The goal is to preserve the original PSTR2 hardware where practical and build a friendly modern experience around it.

> **Current status:** Research and prototype stage. The browser interface is not yet connected to the real device. The user's board photographs appear to show a Ralink RT5350F SoC, but RAM, flash, firmware, board identity and supported device protocols are not yet confirmed.

## Project principles

- **Preserve before modifying.** Document the original hardware and behavior before changing firmware or opening up the device further.
- **Read-only first.** Do not guess endpoints, credentials, upload methods or firmware images.
- **Separate facts from hypotheses.** A similar RT5350-based product is a comparison, not proof of a shared PCB, OEM or firmware.
- **Keep the interface beginner-friendly.** Use descriptive comments, searchable hashtags and small, understandable changes.
- **Protect privacy and hardware.** Never commit passwords, private media, device credentials or unredacted traffic captures.

## Roadmap at a glance

| Phase | Goal | Status |
| --- | --- | --- |
| 0. Preserve the project | Keep the friendly web prototype and document what is and is not connected | In progress |
| 1. Identify the hardware | Confirm SoC, RAM, flash, board revision and regulatory identifiers | In progress |
| 2. Understand original firmware | Identify OS/firmware, web server, authentication and boot process without writing to device | Initial web-auth observation recorded; investigation ongoing |
| 3. Map device communication | Document read-only file listing, directory navigation and video playback requests | Not started |
| 4. Connect the modern interface | Replace demo-only data with a safe, tested device adapter | Not started |
| 5. Improve media and storage features | Test streaming, multiple clients and compatible external storage | Not started |
| 6. Evaluate firmware modernization | Assess feasibility only after memory, bootloader, backups and board support are known | Blocked by earlier phases |

## Phase 0 — Preserve the project and define the boundary

**Goal:** Keep the existing friendly MOSAIC web interface stable while making the hardware research easy to find.

Tasks:
- Maintain the current responsive browser prototype.
- Keep sample files clearly labeled as demonstration data.
- Keep local video preview distinct from actual device streaming.
- Link this roadmap and the hardware/company-history research from the README and beginner code map.
- Record regressions and test changes on phone and desktop before merging.

**Completion criteria:** The project clearly explains what works locally and what still requires a real PSTR2 connection.

## Phase 1 — Identify the physical hardware

**Goal:** Build a reliable inventory of the actual PSTR2 board.

Known evidence:
- The supplied board photographs appear to show a Ralink **RT5350F**.
- The RT5350 family supports embedded MIPS processing, 2.4 GHz Wi-Fi and USB 2.0 capabilities.
- Those chip capabilities do not prove that every interface is wired up or enabled on this particular board.

Tasks:
- Capture sharp, well-lit photos of all IC markings and PCB silkscreen.
- Identify the RAM and flash packages from their exact part numbers.
- Record PCB revision, module labels, antenna connections, connectors and regulatory IDs.
- Locate any matching FCC or ISED filing using the PSTR2's own identifiers.
- Preserve the original photos and notes in the project without including passwords or private network details.

**Completion criteria:** A board inventory with confirmed part numbers and clearly marked unknowns.

## Phase 2 — Understand the original firmware safely

**Goal:** Identify what software runs on MOSAIC without risking the device.

Tasks:
- Document the normal boot behavior and the local web login prompt.\n- Initial observation: `http://192.168.10.1/` prompts for browser authentication; the user reports `admin` / `admin` dismisses the prompt. Screenshots confirm the branded landing page, a **Mosaic AP Feature** Wi-Fi scan/configuration page, and a **MOSAIC Security** page with SSID, WPA-PSK, encryption and Wi-Fi password controls. No settings have been changed; exact AP/client behavior remains to be verified. See [protocol notes](protocol-notes.md).
- Determine whether the web interface is served by the device itself and identify the server/software only from reliable evidence.
- Investigate firmware family, kernel/OS, bootloader and version where safely observable.
- Determine RAM and flash size before evaluating firmware options.
- If firmware extraction becomes appropriate, plan a verified read-only backup method first.

Safety rules:
- Do not brute-force or guess credentials.
- Do not factory-reset the device as an exploratory step.
- Do not write to unknown endpoints or change network settings without a recovery plan.
- Do not flash generic RT5350 or OpenWrt images. Similar SoC does not mean compatible board layout or firmware.

**Completion criteria:** A documented firmware/software profile and a safe backup/recovery plan, or a clear explanation of what cannot be determined without invasive work.

## Phase 3 — Map the original device protocol

**Goal:** Learn how the original app browses and plays content.

Tasks:
- Record the exact user-visible steps to connect, authenticate, browse a folder and play an MP4.
- Where permitted, observe ordinary read-only network requests generated by normal app use.
- Record request path, method, response type, status and relevant non-sensitive headers.
- Determine whether media playback uses HTTP range requests or another mechanism.
- Identify whether the device uses HTTP, WebDAV, SMB or a proprietary protocol.
- Redact credentials, private filenames, tokens and media URLs from all notes.

**Completion criteria:** A protocol document backed by observed behavior, with no guessed endpoint names.

## Phase 4 — Connect the modern web interface

**Goal:** Make the existing MOSAIC interface show real device content.

Possible architecture:
- **Frontend:** the existing responsive MOSAIC website.
- **Device adapter:** a small, clearly separated JavaScript module or local companion service that communicates using the protocol we actually observe.
- **Device:** original PSTR2 hardware and firmware, unchanged initially.

Tasks:
- Choose the simplest safe architecture after checking CORS, HTTP authentication, mixed-content and browser restrictions.
- Add a connection status and clear error messages.
- Replace demonstration file data only after real read-only listing works.
- Keep demo mode available for development when the device is disconnected.
- Do not put device passwords or secrets in public GitHub Pages code.

**Completion criteria:** The interface can connect and list real files reliably without changing or deleting device data.

## Phase 5 — Media, multi-device and external storage

**Goal:** Test the product experience that made MOSAIC interesting.

Potential features, subject to hardware and firmware support:
- Browse folders and files from phones, tablets and computers.
- Stream compatible MP4 files over local Wi-Fi.
- Support multiple connected clients within the device's actual limits.
- Test external USB flash drives and hard drives only if the PSTR2 has a usable USB host path, suitable firmware support and sufficient power.
- Measure real transfer speed, video bitrate limits, battery runtime and heat.
- Document filesystem compatibility and safe disconnect behavior.

**Completion criteria:** Each feature is tested on the real device and its limitations are documented. Do not advertise untested capabilities.

## Phase 6 — Evaluate custom firmware (optional)

**Goal:** Decide whether preserving the original firmware or replacing/modifying it is the better long-term choice.

Before any firmware experiment:
- Confirm exact board revision and all memory components.
- Identify bootloader and recovery method.
- Obtain and verify a complete original firmware backup if possible.
- Confirm a firmware image is built for the exact board, not merely the same RT5350 chip.
- Check available RAM/flash against the software's actual requirements.
- Prefer reversible experiments on a spare or recoverable device.

OpenWrt is a research lead, not a current project dependency. Some RT5350 devices have very limited memory and may not support current OpenWrt releases.

**Completion criteria:** A written go/no-go decision with a tested recovery plan. If the original firmware already provides the needed functions, keep it.

## Research references

- [Hardware and company-history investigation](hardware-and-company-history.md) — board photo identification, RT5350F, Power7 comparison, Ottawa reporting and FCC context.
- [PSTR2 protocol notes](protocol-notes.md) — label facts, reported app behavior and protocol unknowns.
- [Beginner code map](code-map.md) — where to find and safely edit the web prototype.
- [Power7 FCC record QT72015ATO0001](https://fccid.io/QT72015ATO0001) — contemporary RT5350 Wi-Fi storage comparison; not proof of MOSAIC's supplier.
- [Ralink RT5350 datasheet](https://cdn.sparkfun.com/datasheets/Wireless/WiFi/RT5350.pdf) — SoC capabilities.
- [Ottawa Business Journal, Nov. 26, 2016](https://obj.ca/feature-powerstick-made-in-ottawa-no-kidding/) — contemporary reporting on PowerStick and MOSAIC assembly in Ottawa.

## Next practical milestone

**Identify the RAM and flash chips on the user's actual MOSAIC board.** This is the next high-value step because memory capacity and firmware storage constrain every later decision. Then document the normal login and file-browsing behavior before attempting any software changes.
