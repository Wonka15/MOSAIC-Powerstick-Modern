# MOSAIC PSTR2 Network Discovery

**Research log date:** 2026-11-22  
**Device:** MOSAIC PowerStick PSTR2  
**Status:** Initial network-service discovery; further protocol verification required

## Summary

A Fing scan of the MOSAIC PowerStick's Wi-Fi network identified six open TCP ports. Separately, the device's storage was successfully accessed from **VLC for iPad, version 3.7.4**, using an SMB network-share connection.

This is an important milestone: the PSTR2 exposes a network file-sharing service that a third-party iPad application can use, independently of the original MOSAIC app.

## Confirmed user testing

- **Client:** VLC for iPad, version 3.7.4
- **Result:** Successfully connected to and browsed the PowerStick's storage.
- **Device address used:** `192.168.10.1`
- **Protocol identified by the client/workflow:** SMB
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

- Server: `192.168.10.1`
- Username entered during testing: `admin`
- Password: **not recorded in this public research document**
- Ports observed: TCP 139 and TCP 445

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

## Safe, read-only investigation checklist

- [x] Fing scan reported six open ports: 23, 53, 80, 120, 139, and 445.
- [x] VLC for iPad 3.7.4 successfully accessed the PowerStick storage over SMB.
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
