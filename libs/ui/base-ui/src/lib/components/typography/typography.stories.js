import {Typography} from './typography'

export default {
  component: Typography,
  title: 'components/typography',
  tags: ['autodocs']
}

export const HeadingTypography = () => (
  <>
    <div>
      <Typography use="headline1" tag="h1">
        headline1
      </Typography>
    </div>
    <div>
      <Typography use="headline2" tag="h2">
        headline2
      </Typography>
    </div>
    <div>
      <Typography use="headline3" tag="h3">
        headline3
      </Typography>
    </div>
    <div>
      <Typography use="headline4" tag="h4">
        headline4
      </Typography>
    </div>
  </>
)

export const BodyTypography = () => (
  <>
    <section style={{marginBottom: '1rem'}}>
      <div>
        <Typography use="body-large-bold">Large Text Bold</Typography>
      </div>
    </section>
    <section style={{marginBottom: '1rem'}}>
      <div>
        <Typography use="body-medium-regular">Medium Text Regular</Typography>
      </div>
    </section>
    <section style={{marginBottom: '1rem'}}>
      <div>
        <Typography use="body-small-bold">Small Text Bold</Typography>
      </div>
      <div>
        <Typography use="body-small-regular">Small Text Regular</Typography>
      </div>
      <div>
        <Typography use="body-xsmall-bold">Extra Small Text Bold</Typography>
      </div>
    </section>
    <section style={{marginBottom: '1rem'}}>
      <div>
        <Typography use="body-xsmall-semibold">Extra Small Text Semi-Bold</Typography>
      </div>
      <div>
        <Typography use="body-xsmall-regular">Extra Small Text Regular</Typography>
      </div>
    </section>
  </>
)
