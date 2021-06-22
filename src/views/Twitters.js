import React from "react";
import UserPageTemplate from "../components/templates/UserPageTemplate";
import Card from "../components/molecules/Card/Card";

const twitters = [
  {
    title: "Hello Roman",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
    twitterName: "https://pbs.twimg.com/profile_images/1104491562854158336/A-NTwQhW_400x400.png",
  },
  {
    title: "Redux guy",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
    twitterName: "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg",
  },
  {
    title: "React router stuff",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "5 days",
    twitterName: "https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg",
  },
  {
    title: "Super animacje!",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "10 days",
    twitterName: "https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg",
  },
];

const Twitters = () => (
  <UserPageTemplate pageType="twitter">
    {twitters.map((item) => (
      <Card cardType="twitter" title={item.title} created={item.created} twitterName={item.twitterName} content={item.content} />
    ))}
  </UserPageTemplate>
);

export default Twitters;
