import { useTranslation } from '@pancakeswap/localization'
import { usePhishingBannerManager } from 'state/user/hooks'

const PhishingWarningBanner: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  const [, hideBanner] = usePhishingBannerManager()
  const { isMobile, isMd } = useMatchBreakpoints()
  const warningTextAsParts = useMemo(() => {
    const warningText = t("please make sure you're visiting https://pancakeswap.finance - check the URL carefully.")
    return warningText.split(/(https:\/\/pancakeswap.finance)/g)
  }, [t])
  const warningTextComponent = (
    <>
      <Text as="span" color="warning" small bold textTransform="uppercase">
        {t('Phishing warning: ')}
      </Text>
      {warningTextAsParts.map((text, i) => (
        <Text
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          small
          as="span"
          bold={text === 'https://pancakeswap.finance'}
          color={text === 'https://pancakeswap.finance' ? '#FFFFFF' : '#BDC2C4'}
        >
          {text}
        </Text>
      ))}
    </>
  )
  return 
}

export default PhishingWarningBanner
