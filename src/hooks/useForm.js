import { useState, useEffect } from 'react'
import usePrevious from 'hooks/usePrevious'

export default function useForm(initialValues = {}, onSubmit = () => {}, validators = {}, addValidationStatus = false) {
  const [values, setValues] = useState(initialValues)
  const previousValues = usePrevious(initialValues)

  // Reinitialize values if we have a previous set to compare and at least some values got changed
  useEffect(() => {
    if (
      previousValues !== undefined &&
      Object.keys(previousValues).some(key => String(initialValues[key]) !== String(previousValues[key]))
    ) {
      setValues(initialValues)
    }
  }, [previousValues, initialValues])

  const [touched, setTouched] = useState(
    Object.keys(initialValues).reduce((all, key) => ({ ...all, [key]: false }), {})
  )

  const [errors, setErrors] = useState(Object.keys(validators).reduce((all, key) => ({ ...all, [key]: undefined }), {}))

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Changes value of a particular field
  const handleChange = (fieldName, event, value) => {
    let newValue = ''
    // Some custom inputs may not store it in `event.target` object and instead pass it as a separate variable, so we check whether it exists here
    if (value !== undefined) newValue = value
    // If we didn't get it, let's see if it's a checkbox and get its `event.target.checked` value
    else if (event?.target?.type === 'checkbox') newValue = event.target.checked
    // If we still don't have it, try getting it from event target's `value`
    else newValue = event?.target?.value

    setValues(existingValues => ({ ...existingValues, [fieldName]: newValue }))
  }

  // Marks a particular field as touched (used to determine whether validation info should be displayed)
  const touchField = fieldName => {
    setTouched(existingValues => ({ ...existingValues, [fieldName]: true }))
  }

  // Marks all fields as touched (called just before trying to submit the form)
  const touchAllFields = () => {
    setTouched(Object.keys(initialValues).reduce((all, key) => ({ ...all, [key]: true }), {}))
  }

  // Runs a validator function on a particular field
  const validateField = (fieldName, value) => {
    if (!validators[fieldName]) return
    setErrors(existingErrors => ({ ...existingErrors, [fieldName]: validators[fieldName](value) }))
  }

  // Validates all form fields at once
  const validateAllFields = () => {
    const validationResult = Object.keys(validators).reduce(
      (all, key) => ({ ...all, [key]: validators[key](values[key]) }),
      {}
    )
    setErrors(validationResult)

    return Object.values(validationResult).every(value => [undefined, false].includes(value))
  }

  // An object containing all props necessary for an input to communicate with this hook
  const inputs = Object.keys(initialValues).reduce((allInputs, currentInputName) => {
    const currentInput = {
      name: currentInputName,
      value: values[currentInputName],
      onChange: (...args) => {
        handleChange(currentInputName, ...args)
      },
      onFocus: () => {
        touchField(currentInputName)
      },
      onBlur: () => {
        validateField(currentInputName, values[currentInputName])
      }
    }

    // These two props are CCL-specific and used to display validation status
    // prettier-ignore
    if (addValidationStatus) {
      currentInput.validationStatus = (touched[currentInputName] || null) && ((errors[currentInputName] && 'error'));
      currentInput.validationMessage = touched[currentInputName] && errors[currentInputName];
    }

    return {
      ...allInputs,
      [currentInputName]: currentInput
    }
  }, {})

  const handleSubmit = async event => {
    event.preventDefault()

    touchAllFields()
    const isFormValid = validateAllFields()

    if (!isFormValid) return

    setIsSubmitting(true)
    await onSubmit(values)
    setIsSubmitting(false)
  }

  return { values, errors, inputs, handleSubmit, isSubmitting }
}
