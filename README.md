# MOSAIC Powerstick Modern

<blockquote>
<strong>🌐 Live website: <a href="https://wonka15.github.io/MOSAIC-Powerstick-Modern/">Open MOSAIC Powerstick Modern</a></strong><br>
A mobile-friendly companion and preservation project for the MOSAIC Powerstream PSTR2.
</blockquote>

**Looking for the website?** Use the live link above. You can also open it from the repository's **About** area when the website link is configured there.

## What the website currently does

- **MOSAIC Gateway:** Opens the device's known local gateway at `192.168.10.1`, where the original device interface provides network and Wi-Fi security settings. Your phone or tablet must first be connected to the MOSAIC Wi-Fi network.
- **MOSAIC Storage — Working:** VLC for iPad 3.7.4 successfully connects to the PowerStick over SMB, browses `Public → SDA1`, and plays videos directly from device storage.
- **Research archive:** Preserves product history, original videos, company background, engineering research, and project notes.

## MOSAIC storage: working with VLC

A real-device test confirmed that **VLC for iPad 3.7.4** can connect to the PowerStick over SMB and play a video directly from its storage. The tested sequence is: connect the iPad to MOSAIC Wi-Fi → open VLC → add a server → enter `192.168.10.1` → choose SMB → enter username `admin` and the device password → connect → open `Public` → open `SDA1`.

**Storage access is no longer a development item: it is working and has been tested on the physical PSTR2.** VLC provides the confirmed way to browse and play media. A separate, optional goal is to investigate whether the website itself can provide a browser-based interface; that is not a blocker for using the storage. See the [tested VLC instructions and network research](research.html#vlc-storage) the [technical network-discovery log](docs/research/network-discovery.md), and the [local web-interface investigation](docs/research/router-web-interface.md). All device exploration remains read-only.

## Project direction

The goal is to preserve the original device and build a modern, accessible companion interface without changing its firmware or requiring access to its internal hardware. Research begins with safe, read-only observation of the original mobile app and the device's network behavior.

See the [MOSAIC modernization roadmap](docs/roadmap.md) for project phases, current status, safety rules, and next milestones.

## Project map

```text
index.html                         Current companion website homepage
research.html                      Standalone product history and research archive
css/styles.css                     Colors, spacing, components, and responsive layout
js/app.js                          Gateway address-copy helper only
docs/protocol-notes.md             Confirmed facts, observed web UI, and unknown device behavior
docs/research/router-web-interface.md  Source review of the local router-style interface
docs/interface-preservation.md     External-only research plan and UI recreation strategy
docs/roadmap.md                    Phased hardware and software modernization plan
docs/hardware-and-company-history.md  Hardware and company-history research
docs/code-map.md                   Beginner guide to the code and comment labels
docs/history-and-credits.md        Product history, company, people, and video sources
docs/research/                     Supporting investigation notes
```

## Beginner-friendly comment colors and hashtags

The comments use colored emoji labels and searchable hashtags. These labels are documentation markers; they do not change how the browser runs the code.

| Label | Meaning |
| --- | --- |
| 🟦 `#PAGE_STRUCTURE` / `#NAVIGATION` | Main page layout and movement between screens |
| 🟩 `#COMPONENT` / `#FILE_LIST` | Visible interface pieces and how they are built |
| 🟨 `#DEMO` / `#FUTURE_DEV` | Temporary behavior and future work |
| 🟥 `#SAFETY` / `#DEVICE_API` | Important limitations and areas needing extra care |

See [docs/code-map.md](docs/code-map.md) for a beginner-friendly walkthrough.

## Publish with GitHub Pages

The live website is hosted from this repository using GitHub Pages. To check its configuration:

1. Open the repository's **Settings** tab.
2. Choose **Pages** in the left sidebar.
3. Under **Build and deployment**, check that the source is **Deploy from a branch**, branch **main**, folder **/(root)**.
4. The Pages panel displays the published website address.

## Safety and privacy

- Never commit the Powerstick Wi-Fi password, private media, session tokens, or personal network details.
- The exact administrator password is intentionally omitted from this public repository.
- Do not expose the device's administration interface to the public internet.
- Do not change device settings, attempt firmware changes, or open the enclosure as part of routine file-access research.
- Lithium battery work requires identifying the exact pack and its protection circuitry first. Do not solder directly to a bare lithium-ion cell.

## How to make a safe change

1. Open the file that matches the part you want to change.
2. Read the nearby comment and hashtag first.
3. Make one small change at a time.
4. Preview the website on a phone-sized screen and a desktop-sized screen.
5. Check the browser console if something stops working.
6. Do not mark a feature as live unless it has been tested with the actual Powerstick.

## History, Kickstarter & engineering credits

Start with the [research archive](research.html), [research guide](docs/research/README.md), [Kickstarter record and product timeline](docs/research/kickstarter-and-timeline.md), and [history and credits](docs/history-and-credits.md). The research notes distinguish campaign-era advertising, later hands-on reporting, the physical PSTR2 label, current company information, and verified versus unverified engineering credits.
