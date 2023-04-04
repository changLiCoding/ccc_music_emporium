<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="public/images/logo.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">CCC Music Emporium</h3>

  <p align="center">
    An E-commerce project for music shopping solution!
    <br />
    <a href="https://github.com/changLiCoding/ccc_music_emporium"><strong>Explore the docs »</strong></a>
    <br />

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Welcome to CCC Music Emporium, an e-commerce platform for buying and renting musical instruments. This project was created by Can, Cody, and Chang in just 2 weeks.

## Features

- Rent instruments for a specified duration and return them after use.
- Browse and purchase a wide range of musical instruments such as guitars, drums, keyboards, and more.
- User authentication for secure login and registration.
- User profile section to track order history, saved items, and manage account information.
- Shopping cart to manage your purchases and rentals.
- Search functionality to easily find your desired products.
- Filter options to narrow down your search based on various criteria such as price, brand, and instrument type.

![Home page Screen Shot](https://github.com/changLiCoding/ccc_music_emporium/blob/main/public/images/home_page.gif?raw=true)
![About Us Screen Shot](https://github.com/changLiCoding/ccc_music_emporium/blob/main/public/images/about_us.gif?raw=true)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repository
    ```sh
    git clone https://github.com/changLiCoding/ccc_music_emporium.git ccc_music_emporium
    ```

2. Install NPM packages
   ```sh
   npm install
   ```
   NPM packages for React
   ```sh
   cd client & npm install
   ```
   NPM packages for server
   ```sh
   cd server & npm install
   ```
   
3. Create new .env file inside of server folder
```sh
  cd server & touch .env
```

4. Fill out all variables in .env.example file. And copy everything filled out to .env file
    ```sh
    DB_HOST=localhost
    DB_USER=
    DB_PASS=
    DB_NAME=
    # Uncomment and set to true for Heroku
    DB_SSL=true if heroku
    DB_PORT=5432

    PORT=8080

    STRIPE_PUBLISHABLE_KEY=
    STRIPE_SECRET_KEY=

    JWT_SECRET=
    ```

5. Run the application in the root folder with:

   ```sh
  npm run dev
   ```
  to run both frontend React and backend server
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

