module.exports = {
  siteMetadata: {
    title: `Michael Jirón`,
    subtitle: `Bienvenido a mi mundo`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@mjiron`,
    siteUrl: `http://localhost`,
    logo: `/images/logo.png`,
    introTag: `PHOTOGRAPHER | VIDEOGRAPHER`,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Blog",
            url: "/blog"
        },
        {
            name: "Portfolio",
            url: "/portfolio"
        },
        {
            name: "Contact",
            url: "/contact"
        }
    ],
    listMainSkills: [
      {
        mainSkill: `Web Developer`,
      },
      {
        mainSkill: `Mobile Developer`,
      },
      {
        mainSkill: `UI/UX Designer`,
      }
    ],
    social: [
      {
          name: "Github",
          icon: "/images/Facebook.svg",
          url: "#"
      },
      {
          name: "Twitter",
          icon: "/images/Twitter.svg",
          url: "#"
      },
      {
          name: "Linkedin",
          icon: "/images/Instagram.svg",
          url: "#"
      }
    ],

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              "gatsby-remark-copy-linked-files",
              {
                  resolve: `gatsby-remark-images`,
                  options: {
                      maxWidth: 1280
                  }
              }
          ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
          strictMath: true
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
