import React from "react";
import GridTemplate from "../components/templates/GridTemplate";
import Card from "../components/molecules/Card/Card";

export const twitters = [
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
];

const Twitters = () => (
  <GridTemplate pageType="twitters">
    {twitters.map((item) => (
      <Card id={item.id} cardType="twitters" title={item.title} created={item.created} twitterPhoto={item.twitterPhoto} content={item.content} key={item.id} />
    ))}
  </GridTemplate>
);

export default Twitters;
