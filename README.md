<!-- Bootstraped with: https://github.com/othneildrew/Best-README-Template -->
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<!-- ------------------------------------------------------------------------------------------------------------------------ -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="./frontend/public/images/logo.png" alt="Logo" width="80" height="80"/>
    <h1 align="center">Hexastats</h1>
    <p align="center">Visualize your stats and metrics from League of Legends!</p>
    <p align="center">🎉 Check it on <a href="https://hexastats.vercel.app" target="_blank">hexastats.vercel.app</a> 🎉</p>
</div>
<br/>

The project is a monorepo consisted in:

* [`/frontend`](https://github.com/dawichi/hexastats/tree/main/frontend)  React App (Next JS)
* [`/backend`](https://github.com/dawichi/hexastats/tree/main/backend) Node API (Nest JS)
<!-- ------------------------------------------------------------------------------------------------------------------------ -->







<!-- ABOUT -->
## About the project

Hexastats is a web app to visualize your metrics from League of Legends.  
* Last games performance, winrates, graphs and more! 🔥  
* It also allows you to enter multiple usernames, giving you a fast, visual and interactive way to compare data between players.

[![Hexastats][showcase1]][hexastats-url]

The project was born from the need to compare data between players in a fast and interactive way.  
First, we created a basic script that eventually turned into a small API to play with some stats from our accounts and compare them.

Eventually, more people wanted to be added to try it, so we turned the project into a web with search system, so everyone could add their own username and their friends to make comparisons and have fun.

Right now, we keep working on it, adding new features, sections and thinking about new ways to compare data!

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- ------------------------------------------------------------------------------------------------------------------------ -->



<!-- BUILT WITH -->
### Built With

It has been written entirely in TypeScript, using the latest solid frameworks such as Nestjs for frontend and Nest for backend.

* [![TypeScript][TypeScript]][TypeScript-url]
* [![React][React.js]][React-url]
* [![Next][Next.js]][Next-url]
* [![Node][Node.js]][Node-url]
* [![Nest][Nest.js]][Nest-url]
* [![Redis][Redis]][Redis-url]
<!-- ------------------------------------------------------------------------------------------------------------------------ -->



## Description

Hexastats is a web app to visualize your stats from League of Legends. It allows you to enter multiple usernames, giving you a fast, visual and interactive way to compare data between players.

## Last features

* Dark mode
* Players data remains after browser refresh
* Masteries page

## Incoming features

* Faster load for players data
* Integration with League of Legends desktop client
* Automatic load of player names once you enter in a new game, to give you statics of both teams

## Technical approach
When a backend endpoint is called with a username, it loads, packages and serves the information in JSON to the frontend. The data is loaded into React Context and managed to visualize the stats through multiple different ways with graphs from [D3.js](https://d3js.org/)

For more specific info, browse both [`/frontend`](https://github.com/dawichi/hexastats/tree/main/frontend) and [`/backend`](https://github.com/dawichi/hexastats/tree/main/backend).




---

![showcase](https://raw.githubusercontent.com/Dawichi/hexastats/main/showcase.png)

![showcase](https://raw.githubusercontent.com/Dawichi/hexastats/main/frontend/public/images/mastery.png)

![showcase](https://raw.githubusercontent.com/Dawichi/hexastats/main/frontend/public/images/compare.png)


<!-- ------------------------------------------------------------------------------------------------------------------------ -->
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[hexastats-url]: https://hexastats.vercel.app

<!-- HEADER STUFF -->
[contributors-shield]: https://img.shields.io/github/contributors/dawichi/hexastats.svg?style=for-the-badge
[contributors-url]: https://github.com/dawichi/hexastats/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dawichi/hexastats.svg?style=for-the-badge
[forks-url]: https://github.com/dawichi/hexastats/network/members
[stars-shield]: https://img.shields.io/github/stars/dawichi/hexastats.svg?style=for-the-badge
[stars-url]: https://github.com/dawichi/hexastats/stargazers
[issues-shield]: https://img.shields.io/github/issues/dawichi/hexastats.svg?style=for-the-badge
[issues-url]: https://github.com/dawichi/hexastats/issues
[license-shield]: https://img.shields.io/github/license/dawichi/hexastats.svg?style=for-the-badge
[license-url]: https://github.com/dawichi/hexastats/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dawichi

<!-- IMAGES -->
[showcase1]: showcase.png

<!-- TECH STACK -->
[TypeScript]: https://img.shields.io/badge/TS-3178c6?style=for-the-badge
[TypeScript-url]: https://typescriptlang.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node-333?style=for-the-badge&logo=node.js&logoColor=43853d
[Node-url]: https://nodejs.org/
[Nest.js]: https://img.shields.io/badge/Nest-121212?style=for-the-badge&logo=nestjs&logoColor=ea2845
[Nest-url]: https://nestjs.com/
[Redis]: https://img.shields.io/badge/Redis-0f172a?style=for-the-badge&logo=redis&logoColor=ea2845
[Redis-url]: https://redis.io/
