import React from 'react'
import { ExampleComponent } from 'tailwind-antd-react-kit'
import { FlexSpace, Container, CButton } from 'tailwind-antd-react-kit'
import 'tailwind-antd-react-kit/dist/index.css'

const App = () => {
  return (
    <Container>
      <FlexSpace direction='vertical'>
        <ExampleComponent text='Create React Library Example 😄' />
        <ExampleComponent text='Create React Library Example 😄' />
        <CButton>H</CButton>
      </FlexSpace>
    </Container>
  )
}

export default App
