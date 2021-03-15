export default {
    nav: {
      logo: process.env.PUBLIC_URL + '/img/nomadev.png',
      links: [
        { text: 'My Projects', to: 'mywork' },
        { text: 'Contact', to: 'mycontact' }
      ],
    },
    header: {
      img:
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
      text: ['Hi!', "It's me Random.", 'I am '],
      typical: [
        'web developer. 🖥',
        2000,
        'Youtuber. 📹',
        2000,
        'Mobile Developer',
        2000,
      ],
      btnText: 'Discover More',
    },
  
    stack: {
      title: 'Stack',
      tech: [
        {
          img: process.env.PUBLIC_URL + '/img/mongodb.jpg',
          alt: 'mongodb',
        },
        {
          img: process.env.PUBLIC_URL + '/img/react.png',
          alt: 'react',
        },
        {
          img: process.env.PUBLIC_URL + '/img/nodejs.png',
          alt: 'nodejs',
        },
        {
          img: process.env.PUBLIC_URL + '/img/ruby-on-rails.png',
          alt: 'ruby-on-rails',
        },
      ],
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
    },
    work: {
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
          "html/css",
          "ruby",
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
          "html/css",
          "ruby",
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
          "api",
          "html/css"
        ],
        img: process.env.PUBLIC_URL + '/img/portrait.jpg',
        linkToProjectView: "http://nomadev.fun/api-breakingbad/",
        linkGitHub: "https://github.com/elviajero971/breaking-bad-api-react/",
      },
      {
        title: "API Amiibos",
        technos: [
          "react",
          "api",
          "html/css"
        ],
        img: process.env.PUBLIC_URL + '/img/portrait.jpg',
        linkToProjectView: "http://nomadev.fun/api-amiibos/",
        linkGitHub: "https://github.com/elviajero971/list-icon-amiibo-api",
      },
    ]},

    contact: {
      title: 'Ping Me!',
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      socials: [
        {
          alt: 'facebook',
          img: process.env.PUBLIC_URL + '/img/facebook.png',
        },
        {
          alt: 'github',
          img: process.env.PUBLIC_URL + '/img/github.png',
        },
        {
          alt: 'link',
          img: process.env.PUBLIC_URL + '/img/link.png',
        },
        {
          alt: 'gmail',
          img: process.env.PUBLIC_URL + '/img/gmail.png',
        },
      ]
    },
  };