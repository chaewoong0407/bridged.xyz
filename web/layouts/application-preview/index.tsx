import React from 'react'
import { Box, Flex } from 'rebass';
import styled from "@emotion/styled"
import Image from 'next/image';
import { media } from 'utils/styled/media';
import { ThemeInterface } from 'utils/styled/theme';

const ApplicationPreview = () => {
  return (
    <Postioner>
      <Image
        className="app"
        src="/assets/sample-app-as-image.png"
        width="390px"
        height="788px"
        alt="frame_iphone"
      />
      {/* <Preview>
        <AppUI />
        <Image
          className="app"
          src="/assets/source.png"
          width="390px"
          height="788px"
          alt="frame_iphone"
        />
      </Preview> */}
    </Postioner>
  )
}

export default ApplicationPreview

const Postioner = styled(Flex)`
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 390px !important;
  height: 788px;
`

const Preview = styled(Flex)`
  width: 90%;
  height: 95%;
  position: absolute;
  border-radius: 30px;

  ${props => media((props.theme as ThemeInterface).breakpoints[0], (props.theme as ThemeInterface).breakpoints[1])} {
    height: 90%;
  }
`