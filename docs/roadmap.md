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
| 1. Identify the hardware | Record externally visible identifiers; internal component inspection is optional and currently unavailable | External label and prior board-photo research documented |
| 2. Understand original firmware | Identify OS/firmware, web server, authentication and boot process without writing to device | External web UI confirmed; interface preservation underway |
| 3. Map device communication | Document read-only file listing, directory navigation and video playback requests | In progress — original app browsing and built-in video playback confirmed; protocol still unknown |
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
- Preserve the product label, external markings, Wi-Fi SSID/gateway observations, and available user-supplied photographs.
- Do not require opening the enclosure or inspecting internal components; the user currently has no access to the internals.
- If clear internal photographs become available in the future, identify components from exact markings and keep conclusions qualified.
- Preserve externally verifiable FCC/ISED records without treating similar products as proof of the PSTR2's internal design.

**Completion criteria:** A board inventory with confirmed part numbers and clearly marked unknowns.

## Phase 2 — Understand the original firmware safely

**Goal:** Preserve and understand the software behavior visible through MOSAIC's external interface, without requiring internal access or risking the device.

Tasks:
- Preserve the observed browser login and external MOSAIC interface. The user reports `admin` / `admin` dismisses the browser authentication prompt.
- Document the branded landing page, **Mosaic AP Feature** Wi-Fi scan/configuration page, and **MOSAIC Security** page with SSID, WPA-PSK, encryption and Wi-Fi password controls.
- Keep the investigation within the exposed browser interface; internal firmware, shell, serial, source code and storage access are not currently available.
- Recreate the observed screens in the companion website as a clearly labeled, non-connected simulation before attempting any live integration.
- See [protocol notes](protocol-notes.md) and [interface preservation plan](interface-preservation.md).
- Map the visible pages, navigation, labels, and status indicators.
- Keep firmware family, kernel/OS, bootloader, RAM/flash size, and server implementation marked unknown unless external evidence reliably establishes them.
- Do not plan firmware extraction or internal inspection as part of the current scope.

Safety rules:
- Do not brute-force or guess credentials.
- Do not factory-reset the device as an exploratory step.
- Do not write to unknown endpoints or change network settings without a recovery plan.
- Do not flash generic RT5350 or OpenWrt images. Similar SoC does not mean compatible board layout or firmware.

**Completion criteria:** A documented external-interface map, a clear list of unknown internal details, and a safe boundary for further research. Internal firmware identification is optional and currently out of scope.

## Phase 3 — Map the original device protocol

**Goal:** Learn only what can be established through the external interface and normal user-visible device behavior. Do not assume access to internal files or firmware.

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

## Phase 7 — Battery assessment and possible replacement (future hardware work)

**Goal:** Preserve the original 4,500 mAh MOSAIC battery system and determine whether a safe, compatible replacement is practical if the battery eventually fails.

**Current status:** Not started. The user does not currently have access to the internal battery or enclosure, and the label's 4,500 mAh capacity does not identify the cell chemistry, voltage, dimensions or pack arrangement.

Tasks:
- Keep the original device closed and in its current condition during the present external-only research.
- If the battery becomes accessible through a qualified repair technician, photograph its label and wiring and record the exact pack voltage, chemistry, dimensions, connector, polarity and any protection/temperature-sensor circuitry.
- Identify the original charging requirements and protection circuit before sourcing any replacement.
- Compare replacement packs by exact electrical and physical compatibility, not capacity alone.
- Preserve the original battery protection and charging system where appropriate; have a qualified technician perform the repair.
- Never solder directly to a bare lithium-ion cell. Use a correctly specified tabbed pack or suitable connector and professional cell-handling methods.
- Do not buy a replacement cell, open the enclosure, or attempt a battery modification until the original pack has been positively identified and a safe repair plan exists.

**Completion criteria:** A documented, verified battery specification and a qualified repair plan—or a clear decision to leave the original battery untouched if a safe compatible replacement cannot be established.

## Research references

- [Hardware and company-history investigation](hardware-and-company-history.md) — board photo identification, RT5350F, Power7 comparison, Ottawa reporting and FCC context.
- [PSTR2 protocol notes](protocol-notes.md) — label facts, observed web UI, access boundaries and protocol unknowns.
- [Interface preservation plan](interface-preservation.md) — external-only research method and companion-site recreation plan.
- [Beginner code map](code-map.md) — where to find and safely edit the web prototype.
- [Power7 FCC record QT72015ATO0001](https://fccid.io/QT72015ATO0001) — contemporary RT5350 Wi-Fi storage comparison; not proof of MOSAIC's supplier.
- [Ralink RT5350 datasheet](https://cdn.sparkfun.com/datasheets/Wireless/WiFi/RT5350.pdf) — SoC capabilities.
- [Ottawa Business Journal, Nov. 26, 2016](https://obj.ca/feature-powerstick-made-in-ottawa-no-kidding/) — contemporary reporting on PowerStick and MOSAIC assembly in Ottawa.

## Next practical milestone

**Continue external-only documentation of normal login, Wi-Fi configuration, app folder browsing and video playback.** Internal RAM/flash identification is deferred because the user does not currently have access to the internals. Keep battery replacement as a future, technician-led assessment—not a current disassembly task.
