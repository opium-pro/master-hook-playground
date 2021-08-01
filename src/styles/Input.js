import { Reaction, Box, Font, Align, Gap } from 'themeor'

// You don't really need this component, it's only for styling
export function Input({ label, ...restProps }) {
  return (
    <Align gapVert="4px">
      <Font fill="#999">{label}</Font>

      <Gap.TryTagless width="100%">
        <input type="text" { ...restProps}/>
      </Gap.TryTagless>
    </Align>
  )
}
