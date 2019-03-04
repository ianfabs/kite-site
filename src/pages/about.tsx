import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment basic>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            About
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <Segment vertical>
          <Header>What is Kite?</Header>
          <p>
            Kite is a secure application hosting platform. 
            We allow institutions to have a safe environment for technical students to 
            run code without the traditional headache of managing a server. Students can create 
            containers, which are specialized virtual machines designed to run a specific 
            programming language or service. Once a student creates a container, they can 
            then upload their code to that container. This hosts the student code and allows 
            students to create and host web applications quickly and easily.
          </p>
        </Segment>
        <Segment vertical>
          <Header>Why did we make it?</Header>
          <p>
            We are made this platform because of a serious security vulnerability we discovered in our school’s 
            server. The software engineering students needed a place to upload code for instructors to see, 
            so the school setup an FTP server which allows students to upload and run code. Unfortunately, 
            giving students access to run code on a school server was not a very secure solution, as one could 
            imagine. Any malicious student had the capability to delete other students work in the old system, 
            something that is unacceptable. We set out to create a secure system that is easy for 
            institutions to deploy, and easy for the students to use.
          </p>
        </Segment>
        <Segment vertical>
          <Header>Who is Kite for?</Header>
          <p>
            The platform is currently only available to institutions, with the hope of one day being available 
            as a cloud-based service for any user. Right now schools will have to deploy Kite on their own 
            internal servers. Day-to-day users will most likely be students and teachers. Our platform is
            designed to be intuitive for both faculty, and students.
          </p>
        </Segment>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
