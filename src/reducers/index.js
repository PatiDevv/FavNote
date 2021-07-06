import { ADD_ITEM, REMOVE_ITEM, AUTH_SUCCESS, LOGOUT, SEARCH } from "../actions/index";

const userID = localStorage.getItem("userID");

export const initialState = {
  userID: userID || null,
  search: "",
  twitters: [
    {
      id: 1,
      title: "Dan Abramov",
      content:
        "If you miss my rambling longreads, I got a new one for you. It describes the new SSR architecture that @sebmarkbage and the team have been working on. I loved writing it and I hope you’ll enjoy reading it.",
      created: "08.06.21",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg",
      twitterLink: "https://twitter.com/dan_abramov/status/1402341251484160004",
    },
    {
      id: 2,
      title: "Michael Jackson",
      content:
        "Just realized I've been using React Router v6 for over a year now in @remix_run and we haven't found any bugs yet... Guess that means it's time for a stable release?",
      created: "08.06.21",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg",
      twitterLink: "https://twitter.com/mjackson/status/1402377320090849282",
    },
    {
      id: 3,
      title: "Sarah Drasner",
      content: "Holy smokes! My book is the #1 new release for programming books on Amazon! *happy dance*",
      created: "30.03.17",
      twitterPhoto: "https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg",
      twitterLink: "https://twitter.com/sarah_edo/status/847445917649190913",
    },
  ],

  articles: [
    {
      id: 1,
      title: "Styled Components Best Practices",
      content:
        "When working with multiple developers on one React application, it's always good to align the team on a common set of best practices. This holds also true for styling React components. Over the past years, I was fortunate to work with many React freelance developers on different applications where we had to align the best practices throughout the project. While there were certainly applications styled with CSS-in-CSS (e.g. CSS Modules) or Utility-first CSS (e.g. Tailwind), the chance of working with Styled Components (CSS-in-JS) was pretty high, because it's one of the most popular styling approaches.",
      articleUrl: "https://www.robinwieruch.de/styled-components",
      created: "11.04.21",
    },
    {
      id: 2,
      title: "How I Learn New Things",
      content:
        "Someone asked recently what my learning strategy was… how do I learn new things? I had to think about it for a bit. I think it varies depending on what I’m learning. This being a tech blog, and me writing mostly about tech stuff, I could just talk about how I learn “tech” things like languages and frameworks and software tools. But I don’t only do “tech” things, so I’ll talk about a few different angles here. In general I’d call my learning style “hands on”. Most of the time, anyway… and definitely for tech things. ",
      articleUrl: "https://daveceddia.com/how-i-learn-things/",
      created: "03.03.20",
    },
    {
      id: 3,
      title: "HTML vs JSX",
      content:
        "Hypertext Markup Language (HTML) is the standard language for documents that determine the structure of a web page. HTML is a very important language in web development. Your code is either in HTML originally or compiles to it so browsers can read it. JSX, on the other hand, means JavaScript Syntax Extension or JavaScript XML as some like to put it.",
      articleUrl: "https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/",
      created: "17.05.21",
    },
  ],
  notes: [
    {
      id: 1,
      title: "How to perform the action only once - while rendering?",
      content:
        "To perform the action only once during the first render, you can use: For class components - from componentDidMount () component lifecycle method, and in the case of function components from the useEffect hook, additionally passing an empty array [] as the second parameter.",
      created: "1 day",
    },
    {
      id: 2,
      title: "What do keys matter in React?",
      content:
        "Keys help React identify collection items that have changed, added, or removed. They are used to distinguish between the elements of the virtual DOM. With keys, React can optimize rendering by using existing elements. The best way to select a key is to use a unique string that uniquely identifies the item. Keys do not have to be globally unique - they just need to be unique in the context in which they are used. You can use the same keys to render items in different lists.",
      created: "1 day",
    },
    {
      id: 3,
      title: "What is JSX?",
      content:
        "JSX is an XML-like javascript extension that can be used to combine javascript and HTML in a single file. This makes code management and maintenance much easier. JSX may be like a template language, but it does offer all the possibilities of JavaScript.",
      created: "5 days",
    },
    {
      id: 4,
      title: "What is virtual DOM?",
      content:
        "Virtual DOM is a programming concept where a virtual representation of the user interface is stored in memory and synchronized with the real DOM by the React library. This process is called reconciliation. The use of the virtual DOM model creates a clear interface that allows developers to skip or speed up costly operations. Additionally, React hides attribute manipulation, event handling, and manual DOM update under an abstraction layer. Changes made to VirtualDOM are synchronized in larger packages, not individually, which greatly speeds up updating the view.",
      created: "10 days",
    },
    {
      id: 5,
      title: "What are the hooks for?",
      content:
        "Hooks are functions that let you use state and other React functions without using a class. Transfer the strengths of class-based components (component state and lifecycle management) to functional components.",
      created: "10 days",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType].filter((item) => item.id != action.payload.id)],
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case LOGOUT:
      return {
        ...state,
        userID: null,
      };
    case SEARCH: {
      return {
        ...state,
        search: action.search,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
