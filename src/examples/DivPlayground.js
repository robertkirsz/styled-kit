import React from 'react'
import styled from 'styled-components'

import useForm from '../hooks/useForm'

import Div from '../components/Div'

const initialValues = {
  display: 'flex',
  'justify-content': 'flex-start',
  'align-items': 'stretch',
  'align-content': 'flex-start',
  'align-self': 'auto',
  padding: 16,
  background: 'powderblue',
  listLeft: 8,
  listTop: 0
}

export default function DivPlayground() {
  async function onSubmit(value) {
    console.log('onSubmit:', value)
  }

  const form = useForm(initialValues, onSubmit, {}, false)

  const code = `
    padding={${form.values.padding}}
    background="${form.values.background}"
    listLeft={${form.values.listLeft}}
    listTop={${form.values.listTop}}
  `

  return (
    <Div padding={24} listLeft background="pink">
      <Div as="form" onSubmit={form.handleSubmit} column listTop>
        <Div listLeft>
          <code>display:</code>
          <select {...form.inputs.display}>
            <option value="flex">flex</option>
            <option value="inline-flex">inline-flex</option>
          </select>
        </Div>

        <Div listLeft>
          <code>justify-content:</code>
          <select {...form.inputs['justify-content']}>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </Div>

        <Div listLeft>
          <code>align-items:</code>
          <select {...form.inputs['align-items']}>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
            <option value="stretch">stretch</option>
          </select>
        </Div>

        <Div listLeft>
          <code>align-content:</code>
          <select {...form.inputs['align-content']}>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="stretch">stretch</option>
          </select>
        </Div>

        <Div listLeft>
          <code>align-self:</code>
          <select {...form.inputs['align-self']}>
            <option value="auto">auto</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
            <option value="stretch">stretch</option>
          </select>
        </Div>

        <Div listLeft>
          <code>padding:</code>
          <input type="number" {...form.inputs.padding} />
        </Div>

        <Div listLeft>
          <code>background:</code>
          <input {...form.inputs.background} />
        </Div>

        <Div listLeft>
          <code>listLeft:</code>
          <input type="number" {...form.inputs.listLeft} />
        </Div>

        <Div listLeft>
          <code>listTop:</code>
          <input type="number" {...form.inputs.listTop} />
        </Div>
      </Div>

      <Div
        padding={parseInt(form.values.padding)}
        background={form.values.background}
        listLeft={parseInt(form.values.listLeft)}
        listTop={parseInt(form.values.listTop)}
      >
        <Item />
        <Item />
        <Item />
      </Div>

      <pre>{code}</pre>
    </Div>
  )
}

const Item = styled.div`
  padding: 24px;
  background: tomato;
  border: 2px solid red;
`
