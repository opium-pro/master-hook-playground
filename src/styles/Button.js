import { Reaction, Box, Font, Align, Gap } from 'themeor'

// You don't really need this component, it's only for styling
export function Button({ children, ...restProps }) {
  return (
    <Reaction {...restProps}>
      {(props, { hover }) => (
        <Box fill={hover ? "#333" : "#000"} radius="4px" {...props}>
          <Gap vert="12px" hor="16px">

            <Font fill="#fff" align="center">
              {children}
            </Font>

          </Gap>
        </Box>
      )}
    </Reaction>
  )
}
