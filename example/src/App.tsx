import React from 'react'
import { ExampleComponent } from 'tailwind-antd-react-kit'
import {
  FlexSpace,
  Container,
  CButton,
  ErrorBoundary,
  ErrorWrapper,
  Person,
  TagInput,
  ActivityItem
} from 'tailwind-antd-react-kit'
import 'tailwind-antd-react-kit/dist/index.css'
import './index.less'
import Button from 'antd/lib/button'

const App = () => {
  return (
    <ErrorBoundary>
      <ErrorWrapper errors={[]}>
        <Container>
          <FlexSpace marginY direction='vertical' justify='center'>
            <ExampleComponent text='Create React Library Example 😄' />
            <ExampleComponent text='Create React Library Example 😄' />
            <CButton className='rounded-full'>H</CButton>
            <Button className='rounded-full'>Hey</Button>
            <span className="font-bold text-lg">Person</span>
            <Person
              enterprise
              justify="center"
              name='arnold lambou'
              description='lambouarnold@gmail.com man i want to have this very long as sentences'
              suffix={<Button className="rounded-full">Add</Button>}
            />
            <span className="font-bold text-lg">Tag Input</span>
            <TagInput/>
            <span className="font-bold text-lg">Activity Item</span>
            <ActivityItem shadow rounded className="w-full">Hey man</ActivityItem>
          </FlexSpace>
        </Container>
      </ErrorWrapper>
    </ErrorBoundary>
  )
}

export default App
