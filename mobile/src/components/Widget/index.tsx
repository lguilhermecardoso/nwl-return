import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import { styles } from './styles';

export function Widget() {
  return (
    <>
      <TouchableOpacity>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />

      </TouchableOpacity>
    </>
  );
}