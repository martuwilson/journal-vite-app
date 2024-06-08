import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations= {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({
        
    })

    useEffect(() => {
        createValidators();
    }, [formState])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckValue = {};

        for (const formField of Object.keys(formValidations)) {
            const [func, errorMessage = 'error de validación'] = formValidations[formField];

            formCheckValue[`${formField}Valid`] = func(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckValue);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation
    }
}