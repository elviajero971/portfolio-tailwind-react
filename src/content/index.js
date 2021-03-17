export default {
    nav: {
      logo: process.env.PUBLIC_URL + '/img/nomadev.png',
      links: [
        { text: 'Mes projets', to: 'mywork' },
        { text: 'Contact', to: 'mycontact' }
      ],
    },
    header: {
      img:
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
      text: ['Bonjour à toi ami recruteur!', "C'est moi Lucas", ''],
      typical: [
        'Je cherche un premier emploi comme développeur web junior',
        2000,
        'Je suis à Montpellier',
        2500,
        'Je suis un passionné de ponctuation...',
        3000,
      ],
      btnText: 'En savoir plus',
    },
  
    stack: {
      title: "Technologies que j'affectionne",
      tech: [
        {
          img: process.env.PUBLIC_URL + '/img/mongo.png',
          alt: 'mongodb',
        },
        {
          img: process.env.PUBLIC_URL + '/img/react.svg',
          alt: 'react',
        },
        {
          img: process.env.PUBLIC_URL + '/img/node.png',
          alt: 'nodejs',
        },
        {
          img: process.env.PUBLIC_URL + '/img/ruby-on-rails.png',
          alt: 'ruby-on-rails',
        },
        {
          img: process.env.PUBLIC_URL + '/img/github-lg.png',
          alt: 'github',
        },
        {
          img: process.env.PUBLIC_URL + '/img/symfony.png',
          alt: 'symfony',
        },
        {
          img: process.env.PUBLIC_URL + '/img/raspberry.png',
          alt: 'raspberry',
        }
      ],
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
    },
    work: {
      title: "Mes projets",
      buttonMore: {
        text: "Voir le projet"
      },
      logo: {
        github: process.env.PUBLIC_URL + '/img/github.png',
      },
      data: [
      {
        title: "Whiteboard",
        technos: [
          "rails",
          "postgresql",
          "bootstrap"
        ],
        img: process.env.PUBLIC_URL + '/img/portrait.jpg',
        linkToProjectView: "https://whiteboard-development.herokuapp.com/",
        linkGitHub: "https://github.com/elviajero971/THP_Final_Project_Schoolink",
      },
      {
        title: "CatStore",
        technos: [
          "rails",
          "postgresql",
          "bootstrap"
        ],
        img: process.env.PUBLIC_URL + '/img/portrait.jpg',
        linkToProjectView: "https://cat-store-thp.herokuapp.com/",
        linkGitHub: "https://github.com/elviajero971/cat_store",
      },
      {
        title: "API Breaking Bad",
        technos: [
          "react",
          "api"
        ],
        img: process.env.PUBLIC_URL + '/img/portrait.jpg',
        linkToProjectView: "http://pi.nomadev.fun/breakingbad/",
        linkGitHub: "https://github.com/elviajero971/breaking-bad-api-react/",
      },
      {
        title: "API Amiibos",
        technos: [
          "react",
          "api"
        ],
        img: process.env.PUBLIC_URL + '/img/portrait.jpg',
        linkToProjectView: "https://github.com/elviajero971/list-icon-amiibo-api",
        linkGitHub: "https://github.com/elviajero971/list-icon-amiibo-api",
      },
      {
        title: "Waterworld Theme Park",
        technos: [
          "symfony",
          "bootstrap",
          "mySQL"
        ],
        img: process.env.PUBLIC_URL + '/img/portrait.jpg',
        linkToProjectView: "https://github.com/elviajero971/waterworld",
        linkGitHub: "https://github.com/elviajero971/waterworld",
      },
    ]},

    contact: {
      title: 'Contactez-moi!',
      desc:[
        "N'hésitez pas de m'envoyer un email",
        "lucas.illiano@hotmail.com"
      ]
    },
    footer:{
      title:`© 2021 | nomadev`,
      socials: [
        {
          alt: 'linkedIn',
          fa_icon: 'faCoffee'
        },
        {
          alt: 'github',
          fa_icon: 'faCoffee'
        },
        {
          alt: 'link',
          fa_icon: 'faCoffee'
        }
      ]
    }
  };