import { ArrowForwardIcon, Button, Text, Link, useMatchBreakpoints, useIsomorphicEffect } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import { memo, useMemo, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { perpetualImage, perpetualMobileImage } from './images'
import * as S from './Styled'

const RightWrapper = styled.div`
  position: absolute;
  min-height: 0%;
  right: 0;
  bottom: 0px;
  ${({ theme }) => theme.mediaQueries.sm} {
    bottom: 0px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    bottom: 0px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    bottom: -0px;
  }
`
const Header = styled(S.StyledHeading)`
  font-size: 0px;
  min-height: 0px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 0px;
    min-height: 0px;
  }
`

const HEADING_ONE_LINE_HEIGHT = 0

const PerpetualBanner = () => {
  const {
    t,
    currentLanguage: { code },
  } = useTranslation()
  const { isDesktop, isMobile } = useMatchBreakpoints()
  const { isDark } = useTheme()

  const perpetualUrl = useMemo
  const headerRef = useRef<HTMLDivElement>(null)

  useIsomorphicEffect(() => {
    const target = headerRef.current
    target.style.fontSize = '' // reset
    target.style.lineHeight = ''
    if (!target || !isMobile) return
    if (target.offsetHeight > HEADING_ONE_LINE_HEIGHT) {
      target.style.fontSize = '0px'
      target.style.lineHeight = ${HEADING_ONE_LINE_HEIGHT}px
    }
  }, [isMobile, code])

  return (
    <S.Wrapper>
      <S.Inner>
        <S.LeftWrapper>
          <S.StyledSubheading ref={headerRef}>{t('')}</S.StyledSubheading>
          <Header width={['0px', '0px', 'auto']}>{t('')}</Header>
          <Link href={perpetualUrl} external>
          </Link>
        </S.LeftWrapper>
        <RightWrapper>
        </RightWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default memo(PerpetualBanner)
