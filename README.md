# Inconsistent Deep Link Handling with Expo Linking API on Android

This repository demonstrates a bug in the Expo `Linking` API on Android where the `Linking.addEventListener` does not always fire when a deep link is tapped while the app is already open.

## Bug Description
The issue is that the event listener for deep links appears to be unreliable when the application is already running in the foreground or background.  This inconsistency can cause deep link processing to fail unexpectedly.

## Steps to Reproduce
1. Clone this repository.
2. Run the app on an Android emulator or device.
3. Open a web browser and tap a deep link designed to interact with the application (e.g., `myapp://some-path`).
4. Observe whether the app correctly handles the deep link. In some cases, the `Linking.addEventListener` will not be triggered, and the app will not navigate to the expected screen.

## Solution
The solution is to use a more robust approach that complements the `Linking.addEventListener` approach with a check for initial URLs during the app's initialization.