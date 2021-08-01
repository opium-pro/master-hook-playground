import { Reaction, Box, Font, Align, Gap } from 'themeor'

// You don't really need this component, it's only for styling
export function Value({name, children}) {
  return (<>
    <Align pattern="40% 60%" gapHor="8px">
      <Font fill="#999">{name}</Font>
      <Font>{children}</Font>
    </Align>
  </>)
}
