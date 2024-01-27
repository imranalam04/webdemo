import React from "react";
import CardGroup from "./CardGroup";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import Icon5 from "../assets/icon5.png";
import Icon6 from "../assets/icon6.png";
import Icon7 from "../assets/icon7.png";
import Icon8 from "../assets/icon8.png";
import Icon9 from "../assets/icon9.png";
import Icon10 from "../assets/icon10.png";
import Icon11 from "../assets/icon11.png";
import Icon12 from "../assets/icon12.png";

const GridCard = () => {
  return (
    <div className="mt-10 mx-4 md:mx-32 grid grid-cols-1 md:grid-cols-3 gap-2">
      <CardGroup
        img={Icon1}
        heading="SASS Development"
        para="Develop your software application MVP faster than ever. Speed is your friend.

      "
      />
      <CardGroup
        img={Icon2}
        heading="Artificial Intelligence"
        para="Develop Simple to Advanced AI Applications using Large Language Models.

      "
      />
      <CardGroup
        img={Icon3}
        heading="Business Management
      "
        para="Develop your own custom internal business management application.

      "
      />
      <CardGroup
        img={Icon4}
        heading="Custom CRM Systems
      "
        para="Develop CRM systems for your business tailored specifically to your clients. No More 3rd Party Apps.

      "
      />
      <CardGroup
        img={Icon5}
        heading="Custom AI Chatbots
      "
        para="Build custom knowledge based AI chatbot systems that can be applied with a variety of use cases.

      "
      />
      <CardGroup
        img={Icon6}
        heading="App Design (UI/UX)
      "
        para="Design beautiful UI/UX wireframes for your software application and branding assets.

      "
      />
      <CardGroup
        img={Icon7}
        heading="Custom Websites
      "
        para="Create a unique and visually appealing website tailored to your brand.

      "
      />
      <CardGroup
        img={Icon8}
        heading="Workflow Automation
      "
        para="Streamline your business processes by automating repetitive tasks and workflows with AI.

      "
      />
      <CardGroup
        img={Icon9}
        heading="Chrome Extensions
      "
        para="Develop simple to advanced chrome extensions that can connect to your app or standalone.

      "
      />
      <CardGroup
        img={Icon10}
        heading="API Integrations
      "
        para="We'll help you integrate your software or system with almost any 3rd party application.

      "
      />
      <CardGroup
        img={Icon11}
        heading="Web3 Development
      "
        para="Build on the blockchain using our web3 developers for smart contracts, token-gating, and more.

      "
      />
      <CardGroup
        img={Icon12}
        heading="Software Maintenance
      "
        para="Let us take care of your Software upkeep, from bugs to changes, or even additional features.

      "
      />
    </div>
  );
};

export default GridCard;
