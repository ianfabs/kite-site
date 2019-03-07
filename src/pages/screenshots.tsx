import * as React from "react";
import { Header, Segment, Container, Image, Icon} from "semantic-ui-react";
import {withLayout} from "../components/Layout";
function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(require.context("../css/images/screenshots", false, /\.(png)$/));
console.log(images);

const screenshots =  () =>
  <Container centered verticalAlign="middle">
    <Segment vertical>
      <Header as="h1">
      <Icon name="image"/>
      Screenshots
      </Header>
    </Segment>
    {
      images.map( (img: any) => <Image src={img} fluid centered/>)
    }
  </Container>
;

export default withLayout(screenshots);
