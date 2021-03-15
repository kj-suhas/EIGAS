require("dotenv").config()

flags: {
  THE_FLAG: false
}

module.exports = {
  /* Your site config here */
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
