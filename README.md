# sard-form
***
## Description

This is a smart library that will help you build form in a declarative way so that it will be easy to maintain and easy to understand by other developers that comes across your code

## Installation

To use this library you need to install it using:
`npm install sard-form`

## Basic usage
```
import { Form, FormElement } from 'sard-form'

const MyForm = () => {
    return (
        <Form>
            <FormElement
                type="text"
                name="username"
                id="username"
                /*label*/
                label="Username"
                /*form group container*/
                wrap={{
                    in: "div",
                    className: "form-group"
                }}
            />
            <FormElement
                type="email"
                name="email"
                id="eamil"
                /*label*/
                label="Email"
                /*form group container*/
                wrap={{
                    in: "div",
                    className: "form-group"
                }}
            />
            <FormElement
                type="password"
                name="password"
                id="password"
                /*label*/
                label="Password"
                /*form group container*/
                wrap={{
                    in: "div",
                    className: "form-group"
                }}
            />
            <FormElement
                type="button"
                btype="submit"
            >Submit</FormElement>
        </Form>
    )
}

```

## Usage with react-hook-form

```
const LoginForm = () => {
    const { handleSubmit, register, formState: {errors} } = useForm({mode: "onBlur"})

    const onSubmit =  data => {
        console.log(data)
    }
    
    const wrapper = {
        in: "div"
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormElement
                // Input props
                type="email"
                name="email"
                id="email"
                className={}
                placeholder="ex:test@test.com"
                autoComplete="off"
                // label
                label={{
                    content: "Adresse mail"
                }}
                // wrapper
                wrap={wrapper}
                // validation
                {
                    ...register("email", {
                        required:{
                            value: true,
                            message: "Ce champ est requis"
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Adresse email invalide"
                        }
                    })
                }
                //error handling
                onError={[
                    errors.email,
                    <ShowErrorMessage 
                        message={errors.email && errors.email.message} 
                    />
                ]}
            />
            <FormElement
                // Input Props
                type="password"
                name="password"
                id="password"
                className={}
                placeholder="Mot de passe"
                autoComplete="off"
                //label
                label={{
                    content: "Mot de passe",
                }}
                //wrapper
                wrap={wrapper}
                //validation handling
                {...register("password", {
                required: true,
                })}
                //error handling
                onError={[
                    errors.password,
                    <ShowErrorMessage 
                        message="Ce champ est requis"
                    />
                ]}
            />
            <FormElement
                type="button"
                name="submit"
                id="login"
            >
                Se Connecter
            </FormElement>
        </Form>
    )

```
![alt use case screen capture](https://github.com/mouhamed1296/sard-form/blob/main/formelement.jpg)
With this syntax the code explain itself and is easy to uderstand.
Feel free to report me any bug, suggestions or critics at ***mbayelel@gmail.com***