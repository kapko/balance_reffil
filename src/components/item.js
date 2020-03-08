import React from 'react';
import ImageComponent from './image';
import TextComponent from './text';

export default function ItemComponent(props) {
  const { item } = props;

  return <div
    className="item"
    onClick={() => props.getProvider(item)}
    key={item.title}>
    <ImageComponent src={item.image} />
    <TextComponent align="center" tag="h4" text={item.title} />
    <TextComponent tag="body1" text={item.description} />
  </div>
}