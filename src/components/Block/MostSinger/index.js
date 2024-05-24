import React, { useState } from 'react'
import ContainerContent from '../ContainerContent/ContainerContent'
import { BANNER_SINGER_POPULAR } from '~/contanst'

export default function MostSinger() {
  return (
    <ContainerContent isNgheSi={true} listData={BANNER_SINGER_POPULAR} TitleSection={'Nghệ sĩ thịnh hành'} />

  )
}
