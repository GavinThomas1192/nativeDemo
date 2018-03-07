import React from "react";
import { Text } from "react-native";
import { Header, Left, Body, Right, Button, Icon, Title } from "native-base";
export default class HeaderComponent extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>
            <Text>{this.props.title}</Text>
          </Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
}
