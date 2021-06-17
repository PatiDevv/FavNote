import React from "react";
import Button from "../../components/atoms/Button/Button";
import GlobalStyle from "../../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/mainTheme";
import Heading from "../../components/atoms/Heading/Heading";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import Input from "../../components/atoms/Input/Input";

const Root = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Heading big>Nagłówek</Heading>
      <Heading>Nagłówek</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, mea in nostro iriure consectetuer. Regione repudiare dissentiunt ei eum, nam modo urbanitas cu. Eum at simul ridens equidem, justo discere ne
        vim. Wisi movet altera cum an, placerat probatus consectetuer vim no. Ut sit wisi natum sadipscing. Vidisse concludaturque cu eam. In his euismod probatus. Et doming
        eloquentiam nec, per ea aperiam accusam efficiantur. Vis harum recusabo tractatos ad.
      </Paragraph>
      <Input placeholder="Trzymaj"></Input>

      <Button>close/save</Button>
      <Button secondary>Remove</Button>
    </ThemeProvider>
  </div>
);

export default Root;
