<a name="readme-top"></a>


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
    <a href="https://github.com/cankologlu/ccc_music_emporium"><strong>Explore the docs »</strong></a>
    <br />

  </p>
</div>

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


### Installation

This is an example of how to install and run the application local. 


1. Clone the repository
    ```sh
    git clone https://github.com/changLiCoding/ccc_music_emporium.git ccc_music_emporium
    ```

2. Install NPM packages
   ```sh
   npm install
   ```
3. NPM packages for React
   ```sh
   cd client & npm install
   ```
4. NPM packages for server
   ```sh
    cd server & npm install
   ```
5. Reset database to get all seeds
    ```sh
      npm run db:reset
    ```
   
6. Create new .env file inside of server folder
    ```sh
      cd server & touch .env
    ```

7. Fill out all variables in .env.example file. And copy everything filled out to .env file
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

8. Run the application in the root folder to run both React and Express:

   ```sh
    npm run dev
   ```
  
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->

## Roadmap

- [x] Add sign up and sign in
- [x] Add home page with category
- [x] Build backend routes and database query, schema and seeds
- [x] Add simple routes that React can communicate with get and post request to simple route in server
- [x] Add products page in React that products card would display on categories page
- [x] Add cart functionility that click add to cart, cart object will be saved in localstorage
- [x] Add checkout functionility that products that added into cart can be checked out
- [x] Add functionility that purchased products can be reviewed in user order history
- [x] Add JWT that the user order history is protected by JWT
- [x] Change cart and checkout functionility from useContext to Redux
- [ ] Change products functionility from useContext to Redux



<p align="right">(<a href="#readme-top">back to top</a>)</p>

