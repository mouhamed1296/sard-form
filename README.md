![alt text]()

# <h1 align="center">sard-form :heart: :boom: :rocket:</h1>
***
## Description

This is a smart library that will help you build form in a declarative way so that it will be easy to maintain and easy to understand by other developers that comes across your code

## Installation

To use this library you need to install it using:
```
npm install sard-form
```

## Basic usage
```javascript
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

```javascript
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
### New Feature for better validation rule syntaxe when using sard-form with react-hook-form

We create a helper function VRules that will make the life of any dev 
who want to associate our library with the react-hook-form library a lot more easier.
This function act like a hook (even if it's not one) when called it returns an object an object of validation rule.
**use case:**
```javascript
import { Form, FormElement, VRules } from 'sard-form'
import { useForm } from 'react-hook-form'

const App = () => {

  const { handleSubmit, register, formState: {errors} } = useForm({mode: "onBlur"})
  const { Required, Email, MinLength, String, Number, Min, Max } = VRules()
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="app">
     <Form onSubmit={handleSubmit(onSubmit)} className="form">
     <FormElement
        type="text"
        name="fullname"
        placeholder="Full Name"
        className="form-input"
        {
          ...register(
            "fullname",
            {
              required: Required('Ce champ est requis'),
              pattern: String("Ce champ n'accepte que des lettre alphabetiques et des espaces", true),
              minLength: MinLength('Ce champ doit comporter au moins 3 caractères', 3)
            }
          )
        }
      />
       <FormElement
        type="number"
        name="age"
        placeholder="Enter Your age"
        className="form-input"
        {
          ...register(
            "age",
            {
              required: Required('Ce champ est requis'),
              pattern: Number("Ce champ n'accepte que des nombres"),
              min: Min('La valeur de ce champ doit être supérieur ou égale à 16', 16),
              max: Max('La valeur de ce champ doit être inférieur ou égale à 60', 60)
            }
          )
        }
      />
      <FormElement
        type="email"
        name="email"
        placeholder="Email"
        className="form-input"
        {
          ...register(
            "email",
            {
              required: Required('Ce champ est requis'),
              pattern: Email("Invalide mail adress")
            }
          )
        }
      />
      <FormElement type="button" className="btn">Submit</FormElement>
     </Form>
    </div>
  )
}

export default App
```


With this syntax the code explain itself and is easy to uderstand.
Feel free to report me any bug, suggestions or critics at ***mbayelel@gmail.com***