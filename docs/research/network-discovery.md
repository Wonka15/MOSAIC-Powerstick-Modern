# MOSAIC PSTR2 Network Discovery

**Research log date:** 2026-11-22  
**Device:** MOSAIC PowerStick PSTR2  
**Status:** Initial network-service discovery; further protocol verification required

## Summary

A Fing scan of the MOSAIC PowerStick's Wi-Fi network identified six open TCP ports. Separately, the device's storage was successfully accessed from **VLC for iPad, version 3.7.4**, using an SMB network-share connection. The user confirmed the complete workflow: connect to MOSAIC Wi-Fi, add the SMB server in VLC, enter the server IP and login, then browse `Public → SDA1`. A video was successfully played directly from the PowerStick.

This is an important milestone: the PSTR2 exposes a network file-sharing service that a third-party iPad application can use, independently of the original MOSAIC app.

## Confirmed user testing

- **Client:** VLC for iPad, version 3.7.4
- **Result:** Successfully connected, browsed the storage, and played a video directly from the PowerStick.
- **Device address used:** `192.168.10.1`
- **Protocol identified by the client/workflow:** SMB
- **Folder navigation after connection:** `Public` → `SDA1`
- **Connection sequence:** Join MOSAIC Wi-Fi → open VLC → add/connect to a server → enter `192.168.10.1` → select SMB if prompted → enter username `admin` and the device password → connect → open `Public` → open `SDA1`.
- **Access mode for ongoing investigation:** Read-only. Do not delete, rename, move, upload, or modify device files.

The user also reported that Apple's Files app did not connect successfully. The exact error message and SMB negotiation details have not yet been captured.

## Fing port scan

Fing reported the following six open ports/services:

| Port | Fing service label | Initial interpretation | Verification status |
|---:|---|---|---|
| 23 | Telnet | Possible remote terminal or management service | Open port reported; service behavior not tested |
| 53 | domain / DNS | Domain Name System service | Open port reported; function not tested |
| 80 | http | HTTP web service | Open port reported; web interface/API not yet characterized |
| 120 | cfdptkt | Unidentified service label | Open port reported; protocol and purpose unknown |
| 139 | netbios-ssn | NetBIOS Session Service; commonly associated with legacy SMB | Open port reported |
| 445 | microsoft-ds | Microsoft-DS; commonly used for direct-hosted SMB | Open port reported |

**Important:** Fing's service labels are port-based identification hints. They do not, by themselves, prove which daemon, protocol version, or application is running.

## SMB connection notes

The SMB connection information used during testing was:

- First connect the iPad to the MOSAIC Wi-Fi network.
- In VLC, choose the option to add/connect to a network server.
- Server: `192.168.10.1`
- Protocol: SMB
- Username entered during testing: `admin`
- Password: **not recorded in this public research document**; enter the password configured on the device. The owner reported that the tested default was `admin`, but this credential is intentionally not published here.
- After connecting, open `Public`, then `SDA1` to reach the storage.
- Ports observed: TCP 139 and TCP 445

### Confirmed media playback

The owner successfully opened and played a video in VLC directly from the PowerStick storage. This confirms that the VLC/SMB path supports at least the tested video playback scenario. It does not establish the full list of supported formats, streaming performance, or browser compatibility.

Credentials are intentionally omitted from this repository document. Do not publish passwords, tokens, or other device secrets in issues, commits, screenshots, or logs.

### SMB1 hypothesis — not yet confirmed

Claude's analysis suggested that the PowerStick may support **SMB1 (SMBv1)**. This is a plausible hypothesis given the device's apparent compatibility with VLC and the reported failure in Apple's Files app, but it is not yet a confirmed hardware characteristic.

The Files-app failure alone does not prove SMB1 is in use. The exact Files error, an SMB protocol-negotiation capture, or a read-only SMB client diagnostic that reports the negotiated dialect is needed.

If SMB1 is confirmed, document the negotiated dialect and test conditions. SMB1 is obsolete and has significant security limitations; it should be treated as a legacy compatibility finding, not recommended for general network use.

## Storage browsing observations

The research notes identify possible top-level shares/folders including:

- `Videos`
- `Photos`
- `Music`
- `Documents`

These names and their exact status as SMB share names versus directories inside a share still need to be verified and recorded from the VLC browsing view.

File types to record during future read-only browsing include:

- Video: for example, MP4
- Audio: for example, MP3
- Images: for example, JPG/JPEG

These are examples to check, not a verified complete format inventory. Do not modify sample files.

## Why this matters to the modernization project

The successful VLC connection demonstrates a practical path to accessing stored media without relying exclusively on the original MOSAIC iOS application.

Potential research directions:

1. Characterize the SMB share layout and supported media formats.
2. Determine the SMB dialect negotiated by VLC.
3. Capture the exact Apple Files error and compare client compatibility.
4. Inspect the HTTP service on port 80 to determine whether the device exposes a browser interface, status page, or documented API.
5. Identify the service on port 120 without sending state-changing commands.
6. Compare the original MOSAIC app's behavior with the standard network services already exposed by the device.

### Browser-app architecture constraint

A normal browser application hosted on GitHub Pages cannot directly open arbitrary SMB connections or raw TCP sockets to ports 139/445. Browser security restrictions also prevent a static website from acting as a general SMB client.

A future web companion may need a supported HTTP endpoint on the PowerStick, a local helper/bridge application, or another compatible access method. Do not assume that GitHub Pages alone can browse SMB shares.


## Experimental local web bridge — architecture option, not yet tested

A separate local bridge is a possible way to provide a browser-friendly interface while preserving the PSTR2's existing SMB storage service. This is an **experimental architecture proposal**, not a working feature or confirmed compatibility result.

### Proposed arrangement A: bridge joins the MOSAIC Wi-Fi

1. Run a bridge service on a laptop or Raspberry Pi that can join the MOSAIC Wi-Fi network.
2. The bridge connects locally to the PSTR2 SMB service at `192.168.10.1`.
3. A phone or tablet joins the same MOSAIC Wi-Fi and opens the bridge device's local HTTP address in its browser.
4. The bridge presents a web file browser or media interface, translating browser requests into local SMB access.

This would be self-hosted on the local network. It would not require hosting the bridge online, and GitHub Pages would remain a separate documentation/landing page rather than the SMB client.

**Candidate software mentioned for evaluation:** Sambee (described in the proposal as Docker-deployable) and Filestash. Their current installation requirements, exact SMB dialect support, security model, and suitability for this PSTR2 have not been independently verified in this project. Do not treat either as a confirmed solution.

### Proposed arrangement B: put the PSTR2 on an existing home network

The authenticated gateway screenshot shows a **Connect to Internet / Mosaic AP Feature** interface with Wi-Fi scanning and configuration controls. This suggests the device may support connecting to an upstream Wi-Fi network, but its exact operating mode and effect on the PSTR2's own access point are not confirmed.

If the PSTR2 can safely join a home Wi-Fi network while keeping its storage service reachable, a bridge on that same home network might access it while the phone/tablet stays online. This should be tested before investing in a bridge deployment. Do not press Apply or change wireless settings until the current configuration, expected IP changes, and recovery path are understood.

### Compatibility caveat: SMB dialect

- VLC successfully accessed the PSTR2 over SMB, but the negotiated dialect (SMB1/NT1, SMB2, or SMB3) has not been recorded.
- Apple Files failed in the owner's test; the exact error and cause are unknown.
- SMB1 remains a hypothesis only. The Files failure does not prove SMB1.
- The proposal states that Sambee supports SMB2 and SMB3; that claim and the exact versions supported by the selected release/image must be checked against its current documentation before deployment.
- Filestash is another candidate, but its SMB dialect support has not been established in this research.

If the PSTR2 only supports SMB1, a bridge that requires SMB2/SMB3 may not connect. A read-only diagnostic that records the dialect negotiated by VLC is the most useful next test. Do not weaken security settings or expose SMB1 to an untrusted network as a workaround.

### Firmware modification — unknown and out of scope for now

Whether the PSTR2 firmware can be modified is unknown. The chip marking alone does not establish firmware source availability, bootloader access, recovery options, flash layout, signing/verification behavior, or whether a safe replacement image exists. No firmware modification, flashing, reset, shell access, or write operation is currently authorized or planned. Preserve the original device and investigate its exposed interfaces first.

### Status checklist

- [ ] Verify Sambee's current Docker deployment instructions and SMB dialect support.
- [ ] Verify Filestash's current SMB dialect support and deployment requirements.
- [ ] Capture the SMB dialect negotiated by VLC with a read-only diagnostic.
- [ ] Determine whether the PSTR2 can join an upstream/home Wi-Fi network without losing local access.
- [ ] Document the PSTR2's IP address and recovery method before any network-mode experiment.
- [ ] Test a local bridge only after protocol compatibility is established.
- [ ] Establish whether any firmware recovery or modification path exists before considering firmware work.

**Current status:** VLC/SMB access is confirmed. A browser bridge, home-network client mode, compatibility of either bridge candidate, and firmware modifiability are all **unknown / experimental**.

## Safe, read-only investigation checklist

- [x] Fing scan reported six open ports: 23, 53, 80, 120, 139, and 445.
- [x] VLC for iPad 3.7.4 successfully accessed the PowerStick storage over SMB.
- [x] Confirmed navigation path after connecting: `Public` → `SDA1`.
- [x] Owner successfully played a video directly from the PowerStick in VLC.
- [ ] Record the exact SMB share names shown by VLC.
- [ ] Record the top-level directory names separately from share names.
- [ ] Record observed file extensions and sample counts without opening or changing files unnecessarily.
- [ ] Capture the exact Apple Files error message.
- [ ] Determine the SMB dialect negotiated by VLC (SMB1/NT1, SMB2, or SMB3).
- [ ] Characterize HTTP on port 80 using ordinary read-only requests.
- [ ] Identify port 120's protocol and purpose using non-invasive methods.
- [ ] Determine whether port 23 is actually a Telnet service; do not issue configuration or shell commands.

**Safety rule:** Keep all storage exploration read-only. Do not delete, rename, move, overwrite, upload, or otherwise alter any files or folders on the PowerStick. Avoid changing device settings or running commands on unknown services.

## Evidence and confidence

This entry records user-reported test results and Fing scan output. No packet capture, SMB negotiation transcript, HTTP response archive, or port-120 protocol identification has been added yet. Findings should be upgraded from *reported* or *hypothesis* to *verified* only when supporting evidence is collected.

---

*This is an evolving hardware research log for the MOSAIC PowerStick Modern project. It distinguishes observed behavior from hypotheses so that future implementation decisions are based on reproducible tests.*
