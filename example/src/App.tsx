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
  ActivityItem,
  Avatars
} from 'tailwind-antd-react-kit'
import { UserOutlined } from '@ant-design/icons'
import 'tailwind-antd-react-kit/dist/index.css'
import './index.less'
import Button from 'antd/lib/button'
import Avatar from 'antd/lib/avatar/avatar'

const App = () => {
  return (
    <ErrorBoundary mode="replace">
      <ErrorWrapper errors={[]}>
        <Container>
          <FlexSpace marginY direction='vertical' justify='center'>
            <ExampleComponent text='Create React Library Example 😄' />
            <ExampleComponent text='Create React Library Example 😄' />
            <CButton className='rounded-full'>H</CButton>
            <Button className='rounded-full'>Hey</Button>
            <span className='font-bold text-lg'>Person</span>
            <Person
              enterprise
              justify='center'
              name='arnold lambou'
              description='lambouarnold@gmail.com man i want to have this very long as sentences'
              suffix={<Button className='rounded-full'>Add</Button>}
            />
            <span className='font-bold text-lg'>Tag Input</span>
            <TagInput />
            <span className='font-bold text-lg'>Activity Item</span>
            <>Hello</>
            Je suis Ko
            <ActivityItem
              shadow
              rounded
              className='w-full'
              style={{ width: '500px' }}
            >
              Hey man
            </ActivityItem>
          </FlexSpace>
          <FlexSpace direction='vertical'>
            <span className='font-bold text-lg'>Avatars</span>
            <Avatars right='-15px' avatarClass='bg-white rounded-full'>
              <Avatar
                size='large'
                className='flex items-center justify-center'
                icon={<UserOutlined />}
                src='https://randomuser.me/api/portraits/men/35.jpg'
              />
              <Avatar
                size='large'
                className='flex items-center justify-center'
                icon={<UserOutlined />}
                src='https://randomuser.me/api/portraits/men/75.jpg'
              />
              <Avatar
                size='large'
                className='flex items-center justify-center'
                icon={<UserOutlined />}
                src='https://randomuser.me/api/portraits/men/80.jpg'
              />
              <Avatar
                size='large'
                className='flex items-center justify-center'
                icon={<UserOutlined />}
                src='https://randomuser.me/api/portraits/men/26.jpg'
              />
            </Avatars>
          </FlexSpace>
        </Container>
      </ErrorWrapper>
    </ErrorBoundary>
  )
}

export default App
