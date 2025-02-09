import React from "react";
import {
  FooterContainer,
  H1,
  HR,
  IconDiv,
  Links,
  ContactIcon,
  LinkItems,
  Headers,
  LinkPara,
  TC,
} from "./styles";
import ContactMe from "../home/ContactMe";
import portfolioConstants from "../../common/constants";
import { Link } from "react-router-dom";

const links = [
  {
    heading: "Navigations",
    listItems: [
      { title: "Home", url: "/home" },
      { title: "About", url: "/about" },
      { title: "Works", url: "/works" },
      { title: "Contact", url: "/contact-me" },
    ],
  },
  {
    heading: "Works",
    listItems: [
      { title: "Tasks - items ", url: "https://tasks-items.netlify.app/" },
      { title: "Mood Tracker", url: "https://nextvideo.netlify.app/" },
      { title: "Youtube clone", url: "https://nextvideo.netlify.app/" },
    ],
  },
  {
    heading: "Social",
    listItems: [
      { title: "Github", url: "https://github.com/DevendranathReddy7" },
      {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/devendranathreddy7",
      },
    ],
  },
];
const Footer = (props) => {
  return (
    <FooterContainer>
      <H1>{portfolioConstants.OFFER}</H1>
      <ContactMe />
      <HR />
      <Links>
        <IconDiv>
          <ContactIcon />
          <p>{portfolioConstants.TITLE}</p>
        </IconDiv>
        <LinkItems>
          {links.map((items) => {
            return (
              <div>
                <Headers>{items.heading}</Headers>
                {items.listItems.map((item) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={item.url}
                    target={items.heading !== "Navigations" ? "_blank" : ""}
                  >
                    <LinkPara>{item.title}</LinkPara>
                  </Link>
                ))}
              </div>
            );
          })}
        </LinkItems>
      </Links>
      <HR />
      <TC>2025 | Devendranath Reddy</TC>
    </FooterContainer>
  );
};
export default Footer;
