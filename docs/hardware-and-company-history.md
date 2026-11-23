# MOSAIC PSTR2 — hardware and company-history investigation

> **Status:** Research notes, not a teardown verdict. Facts visible on the user's board are separated from comparable products and unproven hypotheses. Do not flash firmware or write to unknown device endpoints during this investigation.

## 1. New evidence from the user's opened device

The user supplied close-up photographs of the MOSAIC circuit board. The large Ralink-marked IC appears to carry the marking **RT5350F**.

- **Visual identification:** Ralink RT5350F (read from the chip marking in the supplied photographs).
- **What this establishes:** MOSAIC contains a Ralink RT5350F networking SoC, assuming the marking has been read correctly.
- **What it does not establish:** the exact board manufacturer, RAM size, flash size, firmware build, Linux/OpenWrt version, or whether the board is shared with another commercial product.
- The small label on the adjacent module is not legible enough in the current photos to identify that module.
- No RAM or flash chip has been positively identified yet.

The RT5350 datasheet describes a 360 MHz MIPS24KEc CPU, integrated 2.4 GHz 802.11n 1T1R Wi-Fi, a five-port 10/100 Ethernet switch/PHY, USB 2.0 host/device, and interfaces including SPI, I²C, UART, I²S, PCM and GPIO. It supports up to 64 MB of 16-bit SDR SDRAM. These are SoC capabilities; the presence of a feature in the chip does **not** prove that MOSAIC exposes or uses it.

Reference: [Ralink RT5350 preliminary datasheet (2010)](https://cdn.sparkfun.com/datasheets/Wireless/WiFi/RT5350.pdf).


## 1A. Battery pack and board connection — identification still incomplete

The external product label identifies the MOSAIC battery as **4,500 mAh**. The owner has since clarified the physical arrangement: the device has **two circuit boards stacked together**, the **upper board carries the Ralink RT5350F chip**, and the owner suspects the **lower board contains the USB hardware**. The owner also reports that the lithium battery is **soldered into the board assembly**.

These are owner-reported observations. The exact board-to-board connector, lower-board components, battery solder points and pack wiring have not been documented in a sufficiently clear close-up.

**Confirmed from the owner's observations:**
- The product label states 4,500 mAh.
- The owner reports two stacked circuit boards.
- The owner identifies the RT5350F on the upper board.
- The owner reports that the lithium battery is soldered into the board assembly.

**Tentative / not yet verified:**
- The lower board may contain USB hardware; its function has not been confirmed.
- The exact solder interface is unknown: pack leads to PCB pads, welded cell tabs joined to leads, or another construction.
- The exact board-to-board interconnect is unknown.

**Not yet confirmed:**
- Battery chemistry and nominal/maximum voltage.
- Whether the pack uses one cell or multiple cells.
- Cell format, dimensions and physical arrangement.
- Whether the pack includes a protection PCB, temperature sensor or other monitoring lead.
- Exact solder points, whether pack leads are soldered to PCB pads, whether cell tabs are welded to leads, and the precise battery wiring.
- Exact PCB pad names, polarity and charging-controller topology.
- The function of the lower board. The owner's suggestion that it may carry USB hardware remains a hypothesis, not a component-level identification.

The owner's report supports describing the battery as soldered into the board assembly. It does **not** establish that a bare lithium cell is soldered directly to the PCB. Keep those constructions distinct until a clear image or technician inspection confirms the details.

**Repair boundary:** A qualified battery/electronics technician should identify the original pack and its protection/charging arrangement before any replacement is sourced. Never solder directly to a bare lithium-ion cell. Do not open or modify the unit as part of the current external-only research.

## 2. A close contemporary comparison: Power7 Wi-Fi storage

A documented product from the same era provides a useful comparison:

- **Manufacturer/applicant:** Power7 Technology (Dong Guan) Co., Ltd., China.
- **FCC ID:** QT72015ATO0001.
- **FCC application/grant date:** April 15, 2015.
- **Product description:** WiFi USB Storage.
- The FCC record lists public internal photos, external photos, a user manual, test reports, and other exhibits.
- The associated Power7 Wi-Fi SD/USB manual identifies a **Ralink RT5350**, 360 MHz MIPS24KEc CPU, 2.4 GHz 802.11b/g/n Wi-Fi, micro-USB 2.0, and a 3,000 mAh battery. It describes wireless internet pass-through by connecting to an existing wireless router.

References:
- [FCC record QT72015ATO0001 — Power7 WiFi USB Storage](https://fccid.io/QT72015ATO0001)
- [Power7 Wi-Fi SD/USB manual](https://fccid.io/m/db4b961583de4e1ce879054692c75658eb3ea710538ff88c36c7c857adfa4bd1.pdf)

### Comparison: what matches and what remains unknown

| Area | MOSAIC PSTR2 | Power7 2015 product |
| --- | --- | --- |
| Networking SoC | Board photo appears to show Ralink RT5350F | Manual specifies Ralink RT5350 |
| Wi-Fi storage concept | Confirmed by MOSAIC product documentation | Confirmed by manual |
| Battery-powered | MOSAIC label/specification: 4,500 mAh | Manual: 3,000 mAh |
| USB | MOSAIC documentation describes USB 2.0 on PSTR2 | Manual specifies micro-USB 2.0 |
| Wi-Fi internet pass-through / repeater | MOSAIC product brochure describes built-in repeater capability | Power7 manual describes wireless internet pass-through |
| Same PCB / same OEM / shared firmware | **Not established** | **Not established** |

**Interpretation:** The Power7 product is a strong technology-era comparison because its documented design uses the same Ralink SoC family and combines battery power, Wi-Fi and wireless storage. It is not evidence that PowerStick bought that exact board, used that supplier, or copied its firmware. MOSAIC may use a related reference design, a custom PCB, or a different implementation around the same SoC.

## 3. PowerStick in Ottawa — contemporary reporting

The Ottawa Business Journal published **“Feature: Powerstick, made in Ottawa, no kidding?”** by Stephen Karmazyn on **November 26, 2016**.

The article reports that:
- PowerStick founder and CEO Nigel Harris described the company as focused on branding and building technology products.
- MOSAIC was described as a Wi-Fi-accessible hard drive that let multiple users connect and stream content; the article said it was launching on Amazon on November 25, 2016.
- The article says MOSAIC and PowerStick products were **assembled by hand onsite**.
- Harris said local manufacturing helped the company oversee production, quality and replacement of defective products.
- The article describes clients including Bank of America, Reuters, Ford Motor Company and Google, and mentions branded MOSAIC units used for promotion of the television show *Mr. Robot*.
- Harris discussed the company's technical workforce and product design, including people with Nortel/Newbridge experience.

This contemporary reporting supports a picture of an Ottawa operation doing hands-on assembly, quality oversight, branding and product work. It does **not** establish that every electronic component or subassembly was manufactured in Ottawa, nor does it prove that PowerStick bought a finished Chinese board. Component sourcing and the origin of the MOSAIC PCB remain open questions.

Source: [Ottawa Business Journal — Feature: Powerstick, made in Ottawa, no kidding? (Nov. 26, 2016)](https://obj.ca/feature-powerstick-made-in-ottawa-no-kidding/).

## 4. FCC records and John Zhu

Public FCC-related records provide additional company context, but care is needed not to mix different products:

- A 2024 FCC confidentiality request for **FCC ID 2AITN-POWERTAG** is signed by **John Zhu**. It identifies him as a Powerstick.com Inc. contact and discusses confidential technical exhibits, including schematics, operational description and internal photos. The letter calls that product design proprietary/custom. This is evidence about the **PowerTag filing**, not proof of MOSAIC's design or board origin.
- A separate 2024 PowerStick filing document for **PRESTO** identifies the applicant address as **39 Camelot Drive, Ottawa, Ontario K2G 5W6**, and lists John Zhu as Director of Engineering. This is a later company/contact record, not a confirmed 2015 MOSAIC manufacturing address.
- The Power7 FCC filing QT72015ATO0001 is a separate filing by a Chinese applicant. It is useful for comparison and its public exhibits, but it is not a PowerStick filing.

References:
- [PowerTag FCC confidentiality request (Feb. 2, 2024)](https://fcc.report/FCC-ID/2AITN-POWERTAG/7190283.pdf)
- [PRESTO FCC filing document (Aug. 15, 2024)](https://fcc.report/FCC-ID/2AITN-PRESTO/7586842.pdf)
- [Power7 FCC record QT72015ATO0001](https://fccid.io/QT72015ATO0001)

**Important address correction:** the later FCC document above gives **39 Camelot Drive**. Do not repeat the previously mentioned “29 Camelot Drive” as a verified address. The 2016 Ottawa Business Journal article does not, in the text cited here, establish a building floor area, exact floor plan, or property construction details.

## 5. Firmware and OpenWrt — research lead, not a conclusion

The RT5350F is an embedded MIPS networking SoC. Comparable RT5350 devices have run embedded Linux, and OpenWrt documentation exists for RT5350F-based routers. However:

- The photographs do not identify MOSAIC's firmware.
- A web login prompt at the device's local IP is consistent with a web service, but does not by itself identify the server software or operating system.
- MOSAIC's RAM and flash capacities are still unknown.
- Some RT5350 devices have very small memory configurations. OpenWrt warns that 4 MB flash / 32 MB RAM devices are unsuitable for current supported OpenWrt releases; official support for some such devices ended.
- Do not flash generic RT5350 firmware onto MOSAIC. A wrong image or board configuration can brick it.

Reference: [OpenWrt — Tenda A6 / RT5350F hardware notes](https://openwrt.org/toh/tenda/a6).

## 6. Next investigation steps

1. Preserve the original board photographs and take sharper, well-lit close-ups of every IC marking, especially the chip or chips near the Ralink SoC.
2. Identify the RAM and flash packages by their exact markings before estimating memory capacity.
3. Record PCB silkscreen text, board revision, module labels and any regulatory IDs.
4. Search FCC/ISED records using the exact regulatory ID from the device label, if present. Do not assume the Power7 FCC ID belongs to MOSAIC.
5. While the device is powered normally, document the local web login prompt and behavior. Do not guess credentials, brute-force, reset, or send write requests.
6. If authorized and technically safe, capture only ordinary read-only traffic to learn the file-listing and streaming protocol. Redact credentials, private filenames and media URLs before sharing.
7. Only after the hardware, bootloader, memory map and firmware image are understood should custom firmware be considered.

## 7. Working conclusion

The strongest new finding is that the user's MOSAIC board appears to contain a **Ralink RT5350F**. This makes the Power7 RT5350 Wi-Fi storage product a valuable 2015-era comparison. Historical reporting also indicates that PowerStick hand-assembled MOSAIC products onsite in Ottawa in 2016, while later FCC records identify John Zhu as an engineering contact for other PowerStick products.

The evidence supports further investigation of an embedded networking platform. It does **not** yet prove a shared Power7 board, a Chinese OEM relationship for MOSAIC, Linux/OpenWrt firmware, or the exact memory and storage architecture.


## 5A. Ralink-derived web-interface clue

During a separate read-only review, the owner supplied the MOSAIC local interface's `/lang/b28n.js` localization script. The script identifies itself as a modified Butterfat/Butterlate-style localization helper and includes the attribution email `winfred_lu@ralinktech.com.tw`.

This is consistent with the web interface drawing on Ralink-era embedded router software. Combined with the board's apparent **Ralink RT5350F** marking, it strengthens the interpretation that MOSAIC is built around an embedded Ralink networking platform and uses a router-style embedded administration interface.

**Evidence boundary:** the email attribution is a software-lineage clue, not proof of the exact firmware package, operating system, source-code provenance, or firmware build. The script's observed role is localization: it reads a language cookie, defaults to English, and loads language message XML. It does not itself establish Wi-Fi control, battery monitoring, or battery telemetry.

The local interface's supplied homepage also loads `/quick/common.css` and links to `/quick/apcli.asp` (Wi-Fi scan/connect) and `/quick/wifi_basic.asp` (wireless security). These observations support the embedded-router-interface conclusion, but do not identify a battery-status endpoint.

