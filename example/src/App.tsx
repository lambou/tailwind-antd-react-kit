import React from 'react'
import { ExampleComponent } from 'tailwind-antd-react-kit'
import { FlexSpace } from 'tailwind-antd-react-kit'
import CButton from 'tailwind-antd-react-kit/dist/components/button/CButton'
import 'tailwind-antd-react-kit/dist/index.css'

const App = () => {
  return (
    <FlexSpace direction='vertical'>
      <ExampleComponent text='Create React Library Example 😄' />
      <ExampleComponent text='Create React Library Example 😄' />
      <CButton>H</CButton>
    </FlexSpace>
  )
}

export default App
