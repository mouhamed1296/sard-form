import React from 'react'
import { storiesOf } from '@storybook/react'

import { Form, FormElement } from  '../components/base'

const stories = storiesOf('App Test', module)

stories.add('App', () => {
    return (
        <Form>
            <FormElement
                type="text"
                name="firstname"
            />
            <FormElement
                type="button"
                btype="submit"
                name="submit"
            >
                Submit
            </FormElement>
        </Form>
    )
})