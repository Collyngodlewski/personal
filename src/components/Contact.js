
import React from 'react';
import { StyledBody } from './Styling/Styling';
import { Button, Form, Input} from 'antd'


const formItemLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  




export default function Contact (){

    return(
        <StyledBody>
            <div class="contact-container">
                <Form class="forms-container" 
                {...formItemLayout}
                style={{ display: 'flex', flexDirection: 'column' }}>
                    <Form.Item
                        name={['name']}
                        label="Name"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                        name={['email']}
                        label="Email"
                        rules={[
                        {
                            type: 'email',
                            required: true
        
                        },
                        ]}
                         >
                        <Input />
                        </Form.Item>

                        <Form.Item
                        name={['name']}
                        label="Name"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item name={['Message']} label="Message">
                        <Input.TextArea />
                        </Form.Item>

                        
                        <Button type="primary">
                        Send
                        </Button>
                        
                    
                </Form>
            </div>
            {/* <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script>
                function sendEmail(){
                    // Email.send({
                    //     Host : "smtp.gmail.com",
                    //     Username : "collynexdee@gmail.com",
                    //     Password : "",
                    //     To : 'them@website.com',
                    //     From : "you@isp.com",
                    //     Subject : "This is the subject",
                    //     Body : "And this is the body"
                    // }).then(
                    //   message => alert(message)
                    // )
                }
            </script> */}
        </StyledBody>
        

    )

}