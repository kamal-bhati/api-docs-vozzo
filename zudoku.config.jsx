/** @type {import('zudoku').ZudokuConfig} */
const config = {
  site: {
    logo: {
      src: { light: "/public/vozzo-new.png", dark: "/public/vozzo-new.png" },
      alt: "Vozzo",
      width: "130px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            "/getting_start",
            {
              type: "link",
              icon: "folder-cog",
              badge: {
                label: "New",
                color: "purple",
              },
              label: "API Reference",
              to: "/api",
            },
          ],
        },
        // {
        //   type: "category",
        //   label: "Useful Links",
        //   collapsible: false,
        //   icon: "link",
        //   items: [
        //     {
        //       type: "link",
        //       icon: "book",
        //       label: "Zudoku Docs",
        //       to: "https://zudoku.dev/docs/",
        //     },
        //   ],
        // },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.json",
      path: "/api",
    },
  ],
  authentication: {
  type: "openid",
  issuer: "https://auth.vozzo.ai/realms/vozzo-dev",
  clientId: "cc57a815-f859-fefc-66a7-d97280cd799e",
  scopes: ["openid", "profile", "email"],
},

  protectedRoutes: [
   "/api/*", 
   "/v1alpha/*",  
  ],
};

export default config;
