# 🎶 **Loopmore - Use to focus** 🍂

Loopmore is a web project inspired by Taylor Swift's album _evermore_, creating an immersive experience with ambient audio and a Spotify playlist to complement the atmosphere. It offers background sounds like rain 🌧️, coffee ☕, and brown noise 🌰, allowing the user to create a unique environment. In addition, the background video interface and a Spotify playlist make the experience even more special 🎧.

![Loopmore Interface](https://repository-images.githubusercontent.com/937463853/df3a4788-b699-4f1f-9391-1bb16404c3f5)


## 🛠️ **Resources**

- **Background video** 🎥: The background video plays automatically, creating a visual atmosphere with the music and sounds.
- **Ambient sounds** 🎶: Includes sounds like "Rain noise", "Coffee" and "Brown noise", available to be played along with the Spotify playlist.
- **Spotify** 🎵: You can listen to the playlist directly in your browser via the Spotify Web Player, but to access the full playlist, you need to be logged into Spotify.
- **Style inspired by Taylor Swift's _evermore_** 🎼: The color palette and overall aesthetic were inspired by the album's atmosphere.

## 📥 **Installation**

### 🔧 **Pre-requisites**

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (v18 or higher) 🖥️
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management 🎁

### ⚙️ **Steps to run the project locally**

**Clone the repository**:

```bash
git clone https://github.com/julianatsoc/loopmore
```

Install the dependencies:

```bash
cd loopmore
npm install
```

or if you are using yarn

```bash
yarn install
```

### ⚙️ Start the development server:

Now, run the development server to start running the project:

```bash
npm run dev

```

or

```bash
yarn start
```

## **📦 Dependencies**

- **@headlessui/react:** Accessible component library, used for the Switch ⚙️
- **@tailwindcss/vite:** Integrates Tailwind CSS with Vite 🎨.
- **react e react-dom:** Main libraries for creating reactive interfaces 🔄.

## **🎨 Style**

The style was inspired by the aesthetics of the album evermore, with a soft, somber color palette and a minimalist design that highlights the auditory and visual experience 🍂.

## 🧩 Main components

- **Main**: Central component that displays the background video and the interface with the audios and the Spotify player 📀.
- **AvailableAudios:** Component that provides a list of available audios for the user to choose 🎧.
- **Header:** Header component that contains the title of the application 🖋️..
