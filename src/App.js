import { useEffect } from 'react'
import { useNames } from './hooks'

// Themeor is only used for fast styling
// You don't need to install it
import { Gap, Line } from 'themeor'
import {AppStyles, Button, Title, Value, Input} from './styles'
import {force} from 'master-hook'

export default function App() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    fullName,
    punName,
    makePunName,
    makePunNameWithDelay,
    isPending,
  } = useNames()

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handlelastNameChange(e) {
    setLastName(e.target.value)
  }

  function handleClick() {
    makePunName()
  }

  function handleClickWithDelay() {
    makePunNameWithDelay()
  }

  function handleForcedClickWithDelay() {
    force(makePunNameWithDelay())
  }

  return (
    <AppStyles>

      <Title>Storage of your name</Title>
      <Value name="First Name">{firstName}</Value>
      <Value name="Last Name">{lastName}</Value>
      <Value name="Full Name">{fullName}</Value>
      {punName && <Value name="AKA">{punName}</Value>}

      <Line />

      <Value name="Is Loading">{isPending?.toString()}</Value>

      <Gap />

      <Input
        label="Enter your first name"
        onChange={handleFirstNameChange}
      />

      <Input
        label="Enter your fathers name"
        onChange={handlelastNameChange}
      />

      <Button onClick={handleClick}>
        Make a pun name
      </Button>

      <Button onClick={handleClickWithDelay}>
        Make a pun name with delay
      </Button>

      <Button onClick={handleForcedClickWithDelay}>
        Force pun name with delay
      </Button>

    </AppStyles>
  )
}
