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
          ],
        },
         {
          type: "category",
          label: "Authentication",
          icon: "key",
          items: [
            "/openidAuth",
          ],
        },
        {
          type: "category",
          label: "Campaign Management",
          icon: "code",
          items: [
            "/createCamp",
            "/getCampaign",
            "/getCall"
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
    {
      type: "link",
      to: "https://platform.dev.vozzo.ai/my-agents",
      label: "Get API Key",
      icon: "key",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }, {from : "/api/authentication", to : "https://platform.dev.vozzo.ai/my-agents"}],
  
  apis: [
    {
      type: "file",
      input: "./apis/openapi.json",
      path: "/api",
    },
    
  ],
};

export default config;