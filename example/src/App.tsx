import React from 'react'
import { ExampleComponent } from 'tailwind-antd-react-kit'
import { FlexSpace, Container, CButton, ErrorBoundary } from 'tailwind-antd-react-kit'
import 'tailwind-antd-react-kit/dist/index.css'
import './index.less'
import Button from 'antd/lib/button'

const App = () => {
  return (
    <ErrorBoundary>
      <Container>
        <FlexSpace marginY={true} direction='vertical' justify='center'>
          <ExampleComponent text='Create React Library Example 😄' />
          <ExampleComponent text='Create React Library Example 😄' />
          <CButton className='rounded-full'>H</CButton>
          <Button className='rounded-full'>Hey</Button>
        </FlexSpace>
      </Container>
    </ErrorBoundary>
  )
}

export default App
