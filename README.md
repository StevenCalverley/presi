# Welcome to Presi

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) for the purpose of a react native assessment

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Assumptions

The sample data is formatted and correct.
The sample data represents the desired output for the user. No transformation expect for date formating applied - assuming display to dd / MM / yyyy

## Architectire and state approach

### Navigation

Implemented structure to support expansion. Currently the app requires a list of prescriptions with a single view page.
The implemented structure has the following advantages

1. Deep Linking - this allows future notifications/URLs to link to a single prescription page via id
2. Scale - The structure supports a themed approach where prescriptions is a dedicated area (Normally a tab) which then allows for support of other areas e.g a profile page
   - Implementing a tabbed navigation will support multiple areas

### State Management

Implemented state mangement via zustand to support scalbility as the app is build out to allow CRUD operations
This will provide a single source for managing the state across the app.
As the app progress to use a backend API for data this will also provide a central location for managing the interaction to the sever.
