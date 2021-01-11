import { RocketOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Button from 'antd/lib/button'
import { Store } from 'antd/lib/form/interface'
import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  ActivityItem,
  Avatars,
  CButton,
  Container,
  ErrorBoundary,
  ErrorWrapper,
  FlexSpace,
  Person,
  PromptConfirm,
  TagInput
} from 'tailwind-antd-react-kit'
import './index.less'
import MainLayout from './layouts/MainLayout'

const App: React.FC = () => {
  const history = useHistory()
  return (
    <MainLayout>
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
            <div className='my-3 w-full'>
              <FlexSpace items="center" className='border rounded-lg shadow-sm bg-blue-500 text-xl text-white font-thin p-4'>
              <RocketOutlined className='text-2xl mr-2' /> Components still in the kitchen
              </FlexSpace>
            </div>
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
              title='You identify'
              onSubmit={(_values: Store) => {
                return false
              }}
              formProps={{
                className: 'py-4',
                children: (
                  <React.Fragment>
                    <Form.Item
                      label='First Name'
                      name='first_name'
                      rules={[
                        {
                          required: true,
                          message: 'The first name is required'
                        }
                      ]}
                    >
                      <Input type='text' />
                    </Form.Item>
                    <Form.Item
                      label='Last Name'
                      name='last_name'
                      rules={[
                        {
                          required: true,
                          message: 'The first name is required'
                        }
                      ]}
                    >
                      <Input type='text' />
                    </Form.Item>
                  </React.Fragment>
                )
              }}
            />
          </Container>
        </ErrorWrapper>
      </ErrorBoundary>
    </MainLayout>
  )
}

export default App
