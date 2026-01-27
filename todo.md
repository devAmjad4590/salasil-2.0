# Project TODO List

This file tracks the major issues and tasks for the Salasel 2.0 project.

## High Priority

- **[FEATURE]** Implement the tab-switching logic and placeholder UI for the `VideoDetailsTabs` component (Search, Summary, Transcription).
- **[FEATURE]** Implement the notes logic and make it work

## Medium Priority

- **[BUG]** Debug image loading indicator (spinner/shimmer) not appearing on `SelectedPlaylistCard`. The `onLoad` event or a styling/stacking issue might be preventing the loading state from being visible.
- **[BUG]** Video progression (i.e., saving how much of a video has been watched) is not updating correctly. This is related to how the video.js player's `timeupdate` event is handled within the React component lifecycle, especially when the video source changes. There are also hydration errors related to the video player that need to be resolved.
- [ ] Implement video resume playback functionality, starting from the last saved progress. (Added by Gemini CLI)
