import React from 'react'
import styled from 'styled-components'

import stuff from 'stuff'
import fields from 'fields'
import useForm from 'hooks/useForm'

import Div from 'components/Div'
import Field from 'components/Field'

const initialValues = {
  ...fields.reduce((all, field) => ({ ...all, [field.name]: field.initialValue }), {})
}

const formatValue = value => (typeof value === 'string' ? `"${value}"` : `{${value}}`)

export default function DivPlayground() {
  async function onSubmit(value) {
    console.log('onSubmit:', value)
  }

  const form = useForm(initialValues, onSubmit, {}, false)

  const divProps = {
    ...fields
      .filter(field => field.type === 'select')
      .reduce(
        (all, field) => ({
          ...all,
          ...field.options.reduce(
            (result, option) => ({
              ...result,
              [option.value]: option.label === form.values[field.name]
            }),
            {}
          )
        }),
        {}
      ),
    ...fields
      .filter(field => field.type !== 'select')
      .reduce((prev, curr) => {
        return { ...prev, [curr.name]: form.values[curr.name] }
      }, {})
  }

  const code = Object.keys(divProps).reduce((prev, prop) => {
    if (typeof stuff[prop] === 'undefined') return prev
    if (['', null, false, undefined].includes(divProps[prop])) return prev
    if (divProps[prop] === true) return prev + `${prop}\n`
    return prev + `${prop}=${formatValue(divProps[prop])}\n`
  }, '')

  return (
    <Div padding={24} listLeft justifyBetween wraps background="pink">
      <Div as="form" onSubmit={form.handleSubmit} column>
        {fields.map(field => {
          const fieldProps = { ...field, ...form.inputs[field.name] }
          return <Field key={field.name} {...fieldProps} />
        })}
      </Div>

      <Div column listTop={24}>
        <Div {...divProps} css="transition: 300ms;">
          <Item>A</Item>
          <Item>B</Item>
          <Item>C</Item>
        </Div>

        <pre css="margin: 0;">{code}</pre>
      </Div>
    </Div>
  )
}

const Item = styled.div`
  padding: 6px;
  background: tomato;
  border: 2px solid red;
  transition: 300ms;
`
