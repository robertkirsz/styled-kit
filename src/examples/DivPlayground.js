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
  { name: 'listTop', type: 'text', initialValue: '', parser: textParser },
  { name: 'listRight', type: 'text', initialValue: '', parser: textParser },
  { name: 'listBottom', type: 'text', initialValue: '', parser: textParser },
  { name: 'listLeft', type: 'text', initialValue: 8, parser: textParser },
  { name: 'square', type: 'text', initialValue: '', parser: textParser }
]

const initialValues = {
  ...fields.reduce((all, field) => {
    if (field.options)
      return {
        ...all,
        ...field.options.reduce(
          (prev, curr) => ({
            ...prev,
            [curr.value]: false
          }),
          {}
        )
      }

    return { ...all, [field.name]: field.initialValue }
  }, {})
}

const formatValue = value => (typeof value === 'string' ? `"${value}"` : `{${value}}`)

export default function DivPlayground() {
  async function onSubmit(value) {
    console.log('onSubmit:', value)
  }

  const form = useForm(initialValues, onSubmit, {}, false)
  console.log(form.values)

  const code = Object.keys(stuff).reduce((prev, prop) => {
    const value = typeof form.values[prop] === 'function' ? form.values[prop]() : form.values[prop]

    if (['', null, false, undefined].includes(value)) return prev
    if (value === true) return prev + `${prop}\n`
    return prev + `${prop}=${formatValue(value)}\n`
  }, '')

  return (
    <Div padding={24} column listTop background="pink">
      <Div as="form" onSubmit={form.handleSubmit} column>
        {fields.map(field => {
          const fieldProps = { ...field, ...form.inputs[field.name] }
          return <Field key={field.name} {...fieldProps} allInputs={form.inputs} />
        })}

        {/* <Div listLeft>
          <code>display:</code>
          <select {...form.inputs.display}>
            <option value="flex">flex</option>
            <option value="inline-flex">inline-flex</option>
          </select>
        </Div> */}

        {/* <Div listLeft>
          <code>align-self:</code>
          <select {...form.inputs['align-self']}>
            <option value="auto">auto</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
            <option value="stretch">stretch</option>
          </select>
        </Div> */}

        {/* <Div listLeft>
          <code>position:</code>
          <select {...form.inputs.position}>
            <option value="relative">relative</option>
            <option value="absolute">absolute</option>
            <option value="fixed">fixed</option>
            <option value="sticky">sticky</option>
          </select>
        </Div> */}

        {/* <Div listLeft>
          <code>top:</code>
          <input type="number" {...form.inputs.top} />
        </Div> */}

        {/* <Div listLeft>
          <code>right:</code>
          <input type="number" {...form.inputs.right} />
        </Div> */}

        {/* <Div listLeft>
          <code>bottom:</code>
          <input type="number" {...form.inputs.bottom} />
        </Div> */}

        {/* <Div listLeft>
          <code>left:</code>
          <input type="number" {...form.inputs.left} />
        </Div> */}

        {/* <Div listLeft>
          <code>background:</code>
          <input {...form.inputs.background} />
        </Div> */}

        {/* <Div listLeft>
          <code>listLeft:</code>
          <input type="number" {...form.inputs.listLeft} />
        </Div> */}

        {/* <Div listLeft>
          <code>listTop:</code>
          <input type="number" {...form.inputs.listTop} />
        </Div> */}
      </Div>

      <Div flexNone>
        <Div {...form.values} debug>
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
