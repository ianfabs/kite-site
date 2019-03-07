import * as React from "react";
import { Header, Icon, Container, Segment, List} from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const docs = [
  {
    label: "AS Capstone Project Proposal",
    link: "https://app.asana.com/app/asana/-/get_asset?asset_id=969846663835926",
  },
  {
    label: "AS Capstone Project Prototype",
    link: "https://marvelapp.com/8280fei",
  },
  {
    label: "AS Capstone Project Technical Design Document",
    link: "https://app.asana.com/app/asana/-/get_asset?asset_id=1003551968985304",
  },
  {
    label: "AS Capstone Project Database Design Document",
    link: "https://app.asana.com/app/asana/-/get_asset?asset_id=1100109879411395",
  },
  {
    label: "Power Point",
    link: "http://lmgtfy.com/?q=Things%20that%20do%20not%20matter",
  },
];

export default withLayout(
  () =>

  <Container centered >
    <Segment vertical>
      <Header as="h2">
        <Icon name="file pdf" />
        <Header.Content>
        Documents
        </Header.Content>
      </Header>
    </Segment>
    <Segment>
      <List>
        {
          docs.map( (d) => {
            return <List.Item>
              <Icon name="file"/>
              <List.Content>
                <a href={d.link}>{d.label}</a>
              </List.Content>
            </List.Item>;
          } )
        }
      </List>
    </Segment>
  </Container>,

);
