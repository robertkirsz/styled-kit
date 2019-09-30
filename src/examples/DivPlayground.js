import React from 'react'
import styled from 'styled-components'

import stuff from 'stuff'
import useForm from 'hooks/useForm'

import Div from 'components/Div'
import Field from 'components/Field'

const textParser = value => (value === '' ? '' : isNaN(value) ? value : parseInt(value))

const fields = [
  { name: 'width', type: 'text', initialValue: 200, parser: textParser },
  { name: 'height', type: 'text', initialValue: 200, parser: textParser },
  { name: 'margin', type: 'text', initialValue: 4, parser: textParser },
  { name: 'padding', type: 'text', initialValue: 8, parser: textParser },
  { name: 'background', type: 'text', initialValue: 'powderblue' },
  {
    name: 'justify-content',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'justifyStart', label: 'flex-start' },
      { value: 'justifyEnd', label: 'flex-end' },
      { value: 'justifyCenter', label: 'center' },
      { value: 'justifyBetween', label: 'space-between' },
      { value: 'justifyAround', label: 'space-around' },
      { value: 'justifyEvenly', label: 'space-evenly' }
    ]
  },
  {
    name: 'align-items',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'itemsStart', label: 'flex-start' },
      { value: 'itemsEnd', label: 'flex-end' },
      { value: 'itemsCenter', label: 'center' },
      { value: 'itemsBaseline', label: 'baseline' },
      { value: 'itemsStretch', label: 'stretch' }
    ]
  },
  {
    name: 'align-content',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'contentStart', label: 'flex-start' },
      { value: 'contentEnd', label: 'flex-end' },
      { value: 'contentCenter', label: 'center' },
      { value: 'contentBetween', label: 'space-between' },
      { value: 'contentAround', label: 'space-around' },
      { value: 'contentStretch', label: 'stretch' }
    ]
  },
  {
    name: 'align-self',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'selfAuto', label: 'auto' },
      { value: 'selfStart', label: 'flex-start' },
      { value: 'selfEnd', label: 'flex-end' },
      { value: 'selfCenter', label: 'center' },
      { value: 'selfBaseline', label: 'baseline' },
      { value: 'selfStretch', label: 'stretch' }
    ]
  },
  {
    name: 'position',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'relative', label: 'relative' },
      { value: 'absolute', label: 'absolute' },
      { value: 'fixed', label: 'fixed' },
      { value: 'sticky', label: 'sticky' }
    ]
  },
  { name: 'square', type: 'text', initialValue: '', parser: textParser },
  { name: 'listTop', type: 'text', initialValue: '', parser: textParser },
  { name: 'listRight', type: 'text', initialValue: '', parser: textParser },
  { name: 'listBottom', type: 'text', initialValue: '', parser: textParser },
  { name: 'listLeft', type: 'text', initialValue: 8, parser: textParser },
  { name: 'top', type: 'text', initialValue: '', parser: textParser },
  { name: 'right', type: 'text', initialValue: '', parser: textParser },
  { name: 'bottom', type: 'text', initialValue: '', parser: textParser },
  { name: 'left', type: 'text', initialValue: '', parser: textParser }
]

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
    <Div padding={24} column listTop background="pink">
      <Div as="form" onSubmit={form.handleSubmit} column listTop>
        {fields.map(field => {
          const fieldProps = { ...field, ...form.inputs[field.name] }
          return <Field key={field.name} {...fieldProps} allValues={form.values} allInputs={form.inputs} />
        })}

        {/* <Div listLeft>
          <code>display:</code>
          <select {...form.inputs.display}>
            <option value="flex">flex</option>
            <option value="inline-flex">inline-flex</option>
          </select>
        </Div> */}
      </Div>

      <Div flexNone>
        <Div {...divProps} debug>
          <Item />
          <Item />
          <Item />
        </Div>
      </Div>

      <pre css="margin: 0;">{code}</pre>
    </Div>
  )
}

const Item = styled.div`
  padding: 8px;
  background: tomato;
  border: 2px solid red;
`
