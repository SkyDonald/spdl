# node-spdl

Spotify track downloader module. Written in pure javascript.

# Credentials

The module need a Spotify `clientId` and `clientSecret` to work, the module provide you one but if too much people use the module with this credentials, you will be rate limited and the module won't work.
To avoid this, you should set your own credentials.
To do that, go to [The Spotify developers dashboard](https://developer.spotify.com/dashboard/applications) and create an application.
Copy your credentials and paste it in config.js:
```json
{
  "credentials": {
    "clientId": "Your app clientId",
    "clientSecret": "Your app clientSecret"
  }
}
```

# Support
You can contact us for support on our [chat server](https://discord.gg/AUfTUJA)

# Usage

```bash
spdl https://open.spotify.com/track/18yTgk0VgjB9XDj8h2q6Td
```

# Install

```bash
npm install spdl@latest
```

Or for Yarn users:
```bash
yarn add spdl@latest
```

Make sure you're installing the latest version of spdl to keep up with the latest fixes.

# Related Projects

- [spdl-core](https://www.npmjs.com/package/spdl-core) - A node module of this.

# Note

There is nothing illegal here, the module just searches for the song on Youtube and downloads it.