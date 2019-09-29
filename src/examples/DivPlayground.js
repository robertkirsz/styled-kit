import React from 'react'
import styled from 'styled-components'

import stuff from 'stuff'
import useForm from 'hooks/useForm'

import Div from 'components/Div'

const initialValues = {
  width: 200,
  height: 100,
  margin: 8,
  padding: 8,
  square: '',
  background: 'powderblue',
  relative: false,
  absolute: false,
  fixed: false,
  sticky: false,
  justifyStart: false,
  justifyEnd: false,
  justifyCenter: false,
  justifyBetween: false,
  justifyAround: false,
  justifyEvenly: false,
  itemsStart: false,
  itemsEnd: false,
  itemsCenter: false,
  itemsBaseline: false,
  itemsStretch: false,
  listTop: null,
  listRight: null,
  listBottom: null,
  listLeft: 8
}

const formatValue = value => (typeof value === 'string' ? `"${value}"` : `{${value}}`)

const reg = /[^a-z0-9- ]+/g

export default function DivPlayground() {
  async function onSubmit(value) {
    console.log('onSubmit:', value)
  }

  const form = useForm(initialValues, onSubmit, {}, false)

  const code = Object.keys(stuff).reduce((prev, prop) => {
    const value = typeof form.values[prop] === 'function' ? form.values[prop]() : form.values[prop]

    if (['', null, false, undefined].includes(value)) return prev
    if (value === true) return prev + `${prop}\n`
    return prev + `${prop}=${formatValue(value)}\n`
  }, '')

  const changer = field => event => {
    const value = (event.target.value || '').toLowerCase().replace(reg, '')

    if (field === 'justify-content') {
      form.inputs.justifyStart.onChange(null, value === 'flex-start')
      form.inputs.justifyEnd.onChange(null, value === 'flex-end')
      form.inputs.justifyCenter.onChange(null, value === 'center')
      form.inputs.justifyBetween.onChange(null, value === 'space-between')
      form.inputs.justifyAround.onChange(null, value === 'space-around')
      form.inputs.justifyEvenly.onChange(null, value === 'space-evenly')
      return
    }

    if (field === 'align-items') {
      form.inputs.itemsStart.onChange(null, value === 'flex-start')
      form.inputs.itemsEnd.onChange(null, value === 'flex-end')
      form.inputs.itemsCenter.onChange(null, value === 'center')
      form.inputs.itemsBaseline.onChange(null, value === 'baseline')
      form.inputs.itemsStretch.onChange(null, value === 'stretch')
      return
    }

    if (field === 'position') {
      form.inputs.relative.onChange(null, value === 'relative')
      form.inputs.absolute.onChange(null, value === 'absolute')
      form.inputs.fixed.onChange(null, value === 'fixed')
      form.inputs.sticky.onChange(null, value === 'sticky')
      return
    }

    form.inputs[field].onChange(
      null,
      {
        width: value === '' ? '' : isNaN(value) ? value : parseInt(value),
        height: value === '' ? '' : isNaN(value) ? value : parseInt(value),
        margin: value === '' ? '' : isNaN(value) ? value : parseInt(value),
        padding: value === '' ? '' : isNaN(value) ? value : parseInt(value),
        square: value === '' ? '' : isNaN(value) ? value : parseInt(value),
        listTop: value === '' ? '' : isNaN(value) ? value : parseInt(value),
        listRight: value === '' ? '' : isNaN(value) ? value : parseInt(value),
        listBottom: value === '' ? '' : isNaN(value) ? value : parseInt(value),
        listLeft: value === '' ? '' : isNaN(value) ? value : parseInt(value)
      }[field] || value
    )
  }

  return (
    <Div padding={24} column listTop background="pink">
      <Div as="form" onSubmit={form.handleSubmit} column listTop>
        <Div listLeft>
          <code>width:</code>
          <input {...form.inputs.width} onChange={changer('width')} />
        </Div>

        <Div listLeft>
          <code>height:</code>
          <input {...form.inputs.height} onChange={changer('height')} />
        </Div>

        <Div listLeft>
          <code>margin:</code>
          <input {...form.inputs.margin} onChange={changer('margin')} />
        </Div>

        <Div listLeft>
          <code>padding:</code>
          <input {...form.inputs.padding} onChange={changer('padding')} />
        </Div>

        <Div listLeft>
          <code>square:</code>
          <input {...form.inputs.square} onChange={changer('square')} />
        </Div>

        {/* <Div listLeft>
          <code>background:</code>
          <input {...form.inputs.background} onChange={changer('background')} />
        </Div> */}

        <Div listLeft>
          <code>listTop:</code>
          <input {...form.inputs.listTop} onChange={changer('listTop')} />
        </Div>

        <Div listLeft>
          <code>listRight:</code>
          <input {...form.inputs.listRight} onChange={changer('listRight')} />
        </Div>

        <Div listLeft>
          <code>listBottom:</code>
          <input {...form.inputs.listBottom} onChange={changer('listBottom')} />
        </Div>

        <Div listLeft>
          <code>listLeft:</code>
          <input {...form.inputs.listLeft} onChange={changer('listLeft')} />
        </Div>

        <Div listLeft>
          <code>align-items:</code>
          <select {...form.inputs['align-items']} onChange={changer('align-items')}>
            <option value=""></option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
            <option value="stretch">stretch</option>
          </select>
        </Div>

        {/* <Div listLeft>
          <code>display:</code>
          <select {...form.inputs.display}>
            <option value="flex">flex</option>
            <option value="inline-flex">inline-flex</option>
          </select>
        </Div> */}

        <Div listLeft>
          <code>justify-content:</code>
          <select {...form.inputs['justify-content']} onChange={changer('justify-content')}>
            <option value=""></option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </Div>

        <Div listLeft>
          <code>position:</code>
          <select {...form.inputs['position']} onChange={changer('position')}>
            <option value=""></option>
            <option value="relative">relative</option>
            <option value="absolute">absolute</option>
            <option value="fixed">fixed</option>
            <option value="sticky">sticky</option>
          </select>
        </Div>

        {/* <Div listLeft>
          <code>align-content:</code>
          <select {...form.inputs['align-content']}>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="stretch">stretch</option>
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
