import Image from "next/image";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Flex } from "rebass";
import LiveDesignDemoFrame from "components/motion/live-design-demo";
import { media } from "utils/styled/media";
import { ThemeInterface } from "utils/styled/theme";

const renderPlatforms = ["figma", "sketch", "adobexd"];

const DesignPlatformsMobile = () => {
  const [currentPlatform, setCurrentPlatform] = useState("figma");
  return (
    <Positoner>
      <div className="platform-preview">
        <Image
          alt="platform"
          src={`/assets/design-platforms/${currentPlatform}.png`}
          width="auto"
          height="565px"
        />
      </div>
      <PlatformView className="previews">
        <LiveDesignDemoFrame />
        <div className="platforms">
          {renderPlatforms.map(i => (
            <Image
              alt="platform"
              key={i}
              className="cursor"
              onClick={() => setCurrentPlatform(i)}
              src={`/assets/platform-icons/${i}/${
                currentPlatform === i ? "default" : "grey"
              }.png`}
              width="24"
              height="24"
            />
          ))}
        </div>
      </PlatformView>
    </Positoner>
  );
};

export default DesignPlatformsMobile;

const Positoner = styled(Flex)`
  position: relative;
  margin-top: 40px;

  .platform-preview {
    transform: translateX(0.5%);
    opacity: 0.6;

    div {
      width: 507px !important;
      height: 317px !important;
    }
  }
`;

const PlatformView = styled.div`
  position: absolute;
  z-index: 950;
  border-radius: 12px;
  top: 24%;
  transform: translateY(-23.5%);
  margin-left: auto;
  height: 580px;

  .platforms > div {
    width: 24px;
    height: 24px;
    margin-right: 28px !important;
  }

  .platforms {
    margin-top: 20px;
  }

  ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {
    transform: translateY(-10%);
  }
`;
