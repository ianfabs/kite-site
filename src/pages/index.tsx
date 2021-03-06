import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  List,
} from "semantic-ui-react";
import elementLogo from "../css/images/element.svg";

const StackImage = (props: any) => <img src={props.src} alt={props.alt} width="auto" height="50vh" style={{margin: "13px 10px"}}/>;

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">Kite</Header>
        <Header inverted as="h2">Developed with the needs of educational institutions in mind</Header>
        <Button primary size="huge" onClick={() => {window.open("https://github.com/kari-labs/kite"); }}>Get Started</Button>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Institutional Awareness</Header>
            <p>
              Kite was developed with the needs of educational institutions in mind, providing features like: integration with
              existing authentication systems, administrative management features, and integration with version-control systems.
            </p>
            <Header>Future-Forward</Header>
            <p>
              Kite was designed with a next-gen tech stack, affording your instution the latest and greatest the tech world has to offer.
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            <Header>Tech Stack</Header>
            <StackImage src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png" alt="Docker"/>
            <StackImage src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="Node.js"/>
            <StackImage src="https://marmelab.com/images/blog/graphql/logo.png" alt="GraphQL"/>
            <StackImage src="https://www.fullstackpython.com/img/logos/vuejs-wide.png" alt="Vue.js"/>
            <StackImage src={elementLogo} alt="ElementUI"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="file code outline"></Icon>
              File Browser
            </Header>
            <p>
              View and upload files to your containers!
              Our custom file-manager allows you to quickly and easily upload files to each of your containers.
              Our file technology makes working with files a breeze.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="text cursor"></Icon>
              Built-in Editor
            </Header>
            <p>
              Kite implements the Monaco Editor, the same editor that powers <a href="https://code.visualstudio.com/">VS Code</a>,
              so that you can quickly edit your code in an environment that you are already friendly with!
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="sitemap"></Icon>
              Container Management
            </Header>
            <p>
              Kite let's your users create containers based on a predefined array of images that <i>you</i> decide, this allows you to have
              complete control of the kinds of projects they can build.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Team */}

    <Segment vertical className="stripe alternate feature">
      <Grid columns="4" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="user circle"/>
              Kyle Gray
            </Header>
            <p>
              <Header as="h4">Responsibilities</Header>
              <List as="ul">
                <List.Item as="li">
                  Implementing GraphQL subscriptions
                </List.Item>
                <List.Item as="li">
                  Creating and implementing the filesystem
                </List.Item>
                <List.Item as="li">
                  Implementing Apollo server
                </List.Item>
              </List>
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="user circle"/>
              Ian Fabs
            </Header>
            <p>
            <Header as="h4">Responsibilities</Header>
              <List as="ul">
                <List.Item as="li">
                  Implementing the container-management system
                </List.Item>
                <List.Item as="li">
                  Maintaining the filesystem
                </List.Item>
                <List.Item as="li">
                  Implementing Vue.js and Vue.js plugins correctly
                </List.Item>
              </List>
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="user circle"/>
              Kyle Riley
            </Header>
            <p>
              <Header as="h4">Responsibilities</Header>
              <List as="ul">
                <List.Item as="li">
                  Creating and implementing the administration system
                </List.Item>
              </List>
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="user circle"/>
              Matt Conway
            </Header>
            <p>
              <Header as="h4">Responsibilities</Header>
              <List as="ul">
                <List.Item as="li">
                  Creating and implementing the authentication system.
                </List.Item>
                <List.Item as="li">
                  Implementing and maintaining Vuex
                </List.Item>
                <List.Item as="li">
                  Implementing and maintaining Redis
                </List.Item>
              </List>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
