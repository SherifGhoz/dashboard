import styled from "styled-components"
import {
  getSizeBy, getColor, Text, breakpoints,
} from "@netdata/netdata-ui"

export const Container = styled.div`
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: ${getSizeBy(3)};

  @media ${breakpoints.mobileSmall} {
    display: none;
  }

  @media ${breakpoints.laptop} {
    display: flex;
  }
`

export const TextBold = styled(Text)`
  margin-left: 6px;
  font-weight: bold;
  color: ${getColor("primary")};
  @media ${breakpoints.mobileSmall} {
    display: none;
  }

  @media ${breakpoints.laptopLarge} {
    display: block;
  }
`

export const VersionIndicator = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const VersionIndicatorLink = VersionIndicator.withComponent("a")

export const NewVersionIndicator = styled(VersionIndicatorLink)`
  margin-left: ${getSizeBy(2)};
  color: ${getColor("primary")};
  cursor: pointer;

  &:hover {
    color: ${getColor("bright")};

    ${TextBold} {
      color: ${getColor("bright")};
    }
  }
`

export const VersionNumber = styled(Text)`
  margin-left: 4px;
  color: ${getColor("bright")};
`

export const CollapsableText = styled(Text)`
  @media ${breakpoints.mobileSmall} {
    display: none;
  }

  @media ${breakpoints.desktop} {
    display: block;
  }
`

export const NoUpdateCloud = styled.a`
  cursor: pointer;
`
