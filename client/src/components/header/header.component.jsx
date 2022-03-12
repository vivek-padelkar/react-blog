import {
  Container,
  HeaderImage,
  HeaderTitile,
  HeaderTitileLg,
  HeaderTitileSm,
} from './header.style'

import React from 'react'

const Header = () => {
  return (
    <Container>
      <HeaderTitile>
        <HeaderTitileSm>React & node</HeaderTitileSm>
        <HeaderTitileLg>Blogs</HeaderTitileLg>
      </HeaderTitile>

      <HeaderImage
        src="/assets/header3.jpg"
        alt="header image with ipad phone and pencli"
      />
    </Container>
  ) 
}

export default Header
