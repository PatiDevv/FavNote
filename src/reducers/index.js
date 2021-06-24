const initialState = {
  twitters: [
    {
      id: 1,
      title: "Hello Roman",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1104491562854158336/A-NTwQhW_400x400.png",
      twitterLink: " https://twitter.com/hello_roman",
    },
    {
      id: 2,
      title: "Redux guy",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg",
      twitterLink: "https://twitter.com/dan_abramov",
    },
    {
      id: 3,
      title: "React router stuff",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "5 days",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg",
      twitterLink: "https://twitter.com/kentcdodds",
    },
    {
      id: 4,
      title: "Super animacje!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "10 days",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg",
      twitterLink: "https://twitter.com/sarah_edo",
    },
    {
      id: 5,
      title: "Hello Roman",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1104491562854158336/A-NTwQhW_400x400.png",
      twitterLink: " https://twitter.com/hello_roman",
    },
    {
      id: 6,
      title: "Redux guy",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg",
      twitterLink: "https://twitter.com/dan_abramov",
    },
    {
      id: 7,
      title: "React router stuff",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "5 days",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg",
      twitterLink: "https://twitter.com/kentcdodds",
    },
    {
      id: 8,
      title: "Super animacje!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "10 days",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg",
      twitterLink: "https://twitter.com/sarah_edo",
    },
  ],

  articles: [
    {
      id: 1,
      title: "React on my mind",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl: "https://youtube.com/helloroman",
      created: "1 day",
    },
    {
      id: 2,
      title: "Wish you React",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl: "https://youtube.com/helloroman",
      created: "1 day",
    },
    {
      id: 3,
      title: "You gave React a bad name",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl: "https://youtube.com/helloroman",
      created: "5 days",
    },
    {
      id: 4,
      title: "Is it React you looking for?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl: "https://youtube.com/helloroman",
      created: "10 days",
    },
    {
      id: 5,
      title: "lalalallal",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl: "https://youtube.com/helloroman",
      created: "10 days",
    },
  ],
  notes: [
    {
      id: 1,
      title: "Wake me up when Vue ends",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
    },
    {
      id: 2,
      title: "Como es An Gular?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
    },
    {
      id: 3,
      title: "Du bist Reactish",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "5 days",
    },
    {
      id: 4,
      title: "Reactuj się kto moze!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "10 days",
    },
    {
      id: 5,
      title: "Reactuj się kto moze12121!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "10 days",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType].filter((item) => item.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default rootReducer;
