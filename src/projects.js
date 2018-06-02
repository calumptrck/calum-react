const projects = [
  {
    title: ' 🏫 Studddent.',
    desc: 'A powerful, curated stash of online discounts available for students.',
    preview: 'images/studddent.png',
    badges: [
      {
        text: '🔗 View Project',
        link: '//studddent.com'
      },
      {
        text: '🥇 #1 On Product Hunt',
        link: '//www.producthunt.com/posts/studddent'
      },
      {
        text: '👨‍💻 GitHub Repo',
        link: '//github.com/calumptrck/Studddent'
      },
    ],
    longDesc: "Studddent is a place for college students, and educators to share high-quality resources for learning design and development which offer a discount for students.",
    featured: true,
  },
  {
    title: ' 📈 Coindash.',
    desc: 'A dashboard for monioring the crypto market, and your own investments.',
    preview: 'images/coindash.png',
    badges: [
      {
        text: '🔗 View Project',
        link: '//calumptrck.github.io/CoinDash/'
      },
      {
        text: '🚧 Work In Progress',
        link: '//github.com/calumptrck/CoinDash/commits/master'
      },

    ],
    longDesc: "Coindash is a dashboard for monitoring cryptocurrency investments. It has a focus on being lightweight, and presenting relevant information in an intuitive way.",
    featured: false,
  },
  {
    title: ' 🌤️ LocalWeather.',
    desc: 'Plaintext description of the weather on top of beautiful relevant Unsplash images.',
    preview: 'images/weather.png',
    badges: [
      {
        text: '🔗 View Project',
        link: '//calumptrck.github.io/LocalWeather/'
      },
    ],
    longDesc: "LocalWeather is a a weather homepage which tells you what's relevant, and nothing else.",
    featured: false,
  },
  {
    title: ' 💰 TuitionCoins.',
    desc: 'How much $$ UWaterloo students would have if they invested their tuition in bitcoin.',
    preview: 'images/tuition.png',
    badges: [
      {
        text: '🔗 View Project',
        link: '//devpost.com/software/tuitioncoins'
      },
    ],
    longDesc: 'How much money UWaterloo students would have if they invested their tuition in bitcoin at the time they paid it. Made for TerribleHack 2017.',
    featured: false,
  },
];

const ui = {
  title: "💎 UI Design Practice",
  desc: 'Daily practice with the focus of impproving my UI design skills.',
  preview: 'images/weather.png',
  badges: [
    {
      text: '🚧 Work In Progress',
      link: '#'
    },
  ],
  featured: true,

  subtext: "Since May 24th, I have been putting daily practice into improving my UI design skills. Here is some of what I've been working on.",

  img1: 'images/coffee.png',
  header1: 'Order Ahead Coffee App',
  text1: "The focus of this app is to be as quick and simple to use as possible. The app generates the customer's most common orders, and allows them to reorder their usual order immediately.",
}

export { projects, ui };
