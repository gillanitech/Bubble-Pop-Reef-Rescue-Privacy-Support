# Publishing notes â€” 25 October 2026

Title: Bubble Pop: Reef Rescue â€” Privacy Policy
Description: Privacy policy for Bubble Pop: Reef Rescue by gillanitech. Local game saves, optional My Music audio, advertising choices, deletion and support.

Reviewed implementation: Android 0.6.0 / package com.tidelight.pearlbound.
- SaveData.cs stores progress, preferences, custom music URI/name, volume, loop and a previous-save backup in PlayerPrefs.
- MyMusicPlayer.cs and Tools/AndroidMusic/MusicPickerActivity.java use ACTION_OPEN_DOCUMENT, selected-file read access, persistable permissions where supported, native MediaPlayer, and no game-server upload.
- Use original music releases retained access for the active selection; earlier metadata may remain in the previous-save backup until replaced/cleared.
- Cloud documents shown by Android's picker are delivered by the selected provider, under its own policy.
- PawsAds.cs uses Google Mobile Ads / UMP, sample app/ad IDs, optional rewarded ads and interstitials; test ads are not a promise of zero SDK network activity.
- Unity Analytics, Unity Ads, Cloud Diagnostics and Engine Diagnostics are disabled in the reviewed project.
- No account, game-server cloud save or real-money payment implementation is present.

Official sources reviewed 25 October 2026:
- https://developers.google.com/admob/unity/privacy/play-data-disclosure
- https://developer.android.com/training/data-storage/shared/documents-files
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

Upload the contents of this package to the existing GitHub Pages repository. The HTML and full Markdown policy carry the same 25 October 2026 update date. Set the resulting public HTTPS URL in Play Console. No GitHub deployment was performed by this task.

The Play Console Data safety and audience declarations must describe the exact release and SDK configuration. Revisit the policy if real ad IDs, mediation, analytics, payments or server features are introduced. This page does not submit those declarations.

Validation: 12 policy sections and navigation targets checked; local CSS/JS/icon dependencies exist; no third-party runtime assets or forms added; dates, contact, package and My Music disclosures match HTML/Markdown. Browser preview could not be verified because this environment blocked the local HTTP connection (WinError 10013 / browser timeout). No GitHub deployment performed.
