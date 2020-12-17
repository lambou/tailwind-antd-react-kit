import React from 'react'
import {
  FlexSpace,
  Container,
  CButton,
  ErrorBoundary,
  ErrorWrapper,
  Person,
  TagInput,
  ActivityItem,
  Avatars,
  PromptConfirm
} from 'tailwind-antd-react-kit'
import { UserOutlined } from '@ant-design/icons'
import './index.less'
import Button from 'antd/lib/button'
import Avatar from 'antd/lib/avatar/avatar'
import { useHistory } from 'react-router-dom'
import { Form, Input, Typography } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { Store } from 'antd/lib/form/interface'

const App: React.FC = () => {
  const history = useHistory()
  const [form] = useForm()

  return (
    <ErrorBoundary
      buttonProps={{
        onClick: () => {
          history.push('/')
        }
      }}
      mode='replace'
    >
      <ErrorWrapper errors={[]}>
        <Container>
          <FlexSpace marginY direction='vertical' justify='center'>
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

          <Typography.Title className='mt-5' level={3}>
            Prompt confirm
          </Typography.Title>
          <PromptConfirm
            trigger={<CButton>Confirm</CButton>}
            formContent={<></>}
            title='You identify'
            onSubmit={(_values: Store) => {
              return false;
            }}
            formProps={{
              
              form: form,
              className: 'py-4',
              children: (
                <React.Fragment>
                  <Form.Item label='First Name' required>
                    <Input type='text' />
                  </Form.Item>
                  <Form.Item label='Last Name' required>
                    <Input type='text' />
                  </Form.Item>
                </React.Fragment>
              )
            }}
          />
        </Container>
      </ErrorWrapper>
    </ErrorBoundary>
  )
}

export default App
