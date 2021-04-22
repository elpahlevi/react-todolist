/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./AboutContent.styles";

const AboutContent = () => {
  return (
    <section className="about-page-content">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About this App</h1>
          <h3 css={styles.aboutPageSubHeader}>
            What I learn by building this app
          </h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutPageParagraph}>
              By Building this app, I have learned how to use ReactJS library to
              create front-end content and emphasize my writing skills in
              JavaScript. I also learn how to use external package to make this
              app more scalable such as Emotion CSS and React Router. Thanks to
              Wegodev by providing this cool course. Let's have a try, Thank
              You!.
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.backToHome}>Back to home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
