import { Fit, Box, Font, Align, Gap, Theme } from 'themeor'

// You don't really need this component, it's only for styling
export function AppStyles({ children }) {
  return (
    <Theme config={{gap: {md: '12px'}}}>
      <Fit.TryTagless cover="screen">
        <Box.TryTagless fill="#fafafa">
          <Font.TryTagless family="Arial" size="16px" fill="#333" weight="400">
            <Align vert="center" hor="center">

              <Align gapVert="16px" width="500px">
                {children}
              </Align>

            </Align>
          </Font.TryTagless>
        </Box.TryTagless>
      </Fit.TryTagless>
    </Theme>
  )
}
