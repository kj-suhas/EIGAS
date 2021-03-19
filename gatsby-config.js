require("dotenv").config()

module.exports = {
  /* Your site config here */
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: "gatsby-source-airtable",
      options: {
        apikey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: "appJg8E7TjDe4jli8",
            tableName: "Data",
          },
        ],
      },
    },
  ],
}
