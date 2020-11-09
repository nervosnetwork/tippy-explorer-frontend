import React from 'react'
import { MobileMenusPanel } from './styled'
import MenuItems from '../MenusComp'
import { SearchComp } from '../SearchComp'
import LanguageComp from '../LanguageComp'

export default () => {
  return (
    <MobileMenusPanel>
      <MenuItems />
      <LanguageComp />
      <SearchComp />
    </MobileMenusPanel>
  )
}
