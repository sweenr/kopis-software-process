import React from 'react';
import { Deck, Heading, Slide, Text, List, ListItem, BlockQuote, Quote, Cite, Image } from 'spectacle';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck>
        <Slide>
          <Heading>Spectacle Boilerplate</Heading>
          <Text>open the presentation/index.js file to get started</Text>
        </Slide>
        <Slide>
          <Heading>Typography</Heading>
          <Heading>Heading 1</Heading>
          <Heading>Heading 2</Heading>
          <Heading>Heading 3</Heading>
          <Heading>Heading 4</Heading>
          <Heading>Heading 5</Heading>
          <Text>Standard text</Text>
        </Slide>
        <Slide>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
        </Slide>
      </Deck>
    );
  }
}