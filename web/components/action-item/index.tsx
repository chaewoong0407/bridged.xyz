import React from "react";
import Link from "next/link";
import Icon from "components/icon";
import styled from "@emotion/styled";
import { media } from "utils/styled/media";
import { ThemeInterface } from "utils/styled/theme";

const ActionItem = ({ label, href }) => {
  return (
    <Link href={href}>
      <Text className="cusror">
        {label}
        <Icon
          name="arrowDown"
          isVerticalMiddle
          style={{ transform: "rotate(270deg)" }}
        />
      </Text>
    </Link>
  );
};

const Text = styled.span`
  max-width: calc(100vw - 40px);
  width: 100vw;
  margin-right: auto;
  color: #7d7d7d;
  font-size: 24px;
  margin-bottom: 25px;
  letter-spacing: 0em;
  font-weight: 500;
  display: flex;
  align-items: center;

  ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {
    font-size: 17px;
  }
`;

export default ActionItem;
