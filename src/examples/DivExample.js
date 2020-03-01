import React from 'react'
import styled from 'styled-components'
import stuff from 'stuff'
import fields from 'fields'
import useForm from 'hooks/useForm'
import Div from 'components/Div'
import { Container, Row, Column } from 'components/Grid'
import Field from 'components/Field'

const formatValue = value => (typeof value === 'string' ? `"${value}"` : `{${value}}`)

export default function DivPlayground() {
  const form = useForm({
    ...fields.reduce((all, field) => ({ ...all, [field.name]: field.initialValue }), {})
  })

  const divProps = {
    ...fields
      .filter(field => field.type === 'select')
      .reduce(
        (all, field) => ({
          ...all,
          ...field.options.reduce((result, option) => {
            if (['', false, 0, undefined].includes(form.values[field.name])) return result
            const newValue = option.label === form.values[field.name]
            if (newValue === false) return result
            console.log('form.values[field.name]:', form.values[field.name])
            return { ...result, [option.value]: newValue }
          }, {})
        }),
        {}
      ),
    ...fields
      .filter(field => field.type !== 'select')
      .reduce((prev, curr) => {
        if (['', false, 0, undefined].includes(form.values[curr.name])) return prev
        return { ...prev, [curr.name]: form.values[curr.name] }
      }, {})
  }

  const code = Object.keys(divProps).reduce((prev, prop) => {
    if (typeof stuff[prop] === 'undefined') return prev
    if (['', null, false, undefined].includes(divProps[prop])) return prev
    if (divProps[prop] === true) return prev + `  ${prop}\n`
    return prev + `  ${prop}=${formatValue(divProps[prop])}\n`
  }, '')

  const get = what => ({ ...fields.find(field => field.name === what), ...form.inputs[what] })

  return (
    <Container padding={20}>
      <Div square={120} small="background: red;" medium={['column']} debug>
        <Item />
        <Item />
        <Item />
      </Div>
      <Row small={{ listTop: 40 }}>
        <Column as="form" column small={12} large={4} listTop={16} onSubmit={form.handleSubmit}>
          <Div column>
            <Field {...get('flex-direction')} />
            <Field {...get('wraps')} />
          </Div>

          <Div column>
            <Field {...get('justify-content')} />
            <Field {...get('align-content')} />
            <Field {...get('align-items')} />
          </Div>

          <Div column>
            <Field {...get('position')} />
            <Field {...get('top')} />
            <Field {...get('right')} />
            <Field {...get('left')} />
            <Field {...get('bottom')} />
            <Field {...get('z')} />
            <Field {...get('width')} />
            <Field {...get('height')} />
            <Field {...get('margin')} />
            <Field {...get('padding')} />
            <Field {...get('background')} />
            <Field {...get('listLeft')} />
            <Field {...get('listRight')} />
            <Field {...get('listTop')} />
            <Field {...get('listBottom')} />
          </Div>
        </Column>

        <Column small={12} large={4} justifyCenter itemsStart>
          <Wrapper>
            <Div {...divProps} css="transition: 300ms;">
              <Item />
              <Item />
              <Item />
            </Div>
          </Wrapper>
        </Column>

        <Column small={12} large={4} as="pre" margin={0}>
          {code ? `<Div\n${code}/>` : '<Div />'}
        </Column>
      </Row>

      <Row small={{ listTop: 40 }}>
        <Column small={12} medium={4} overlay="yellow">
          <Div square={120} itemsCenter justifyAround overlay="blue">
            <Item />
            <Item />
            <Item />
          </Div>

          <pre css="font-size: 10px;">{`<Div itemsCenter justifyAround>\n  <Item />\n  <Item />\n  <Item />\n</Div>`}</pre>
        </Column>

        <Column small={12} medium={4} overlay="yellow">
          <Div square={120} listLeft>
            <Item circle flexNone selfStart />
            <Item flex={1} />
          </Div>

          <pre css="font-size: 10px;">{`<Div listLeft>\n  <Item circle flexNone selfStart />\n  <Item flex={1} />\n</Div>`}</pre>
        </Column>
      </Row>
    </Container>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(to right, peachpuff 4px, transparent 4px) 0 0,
    linear-gradient(to right, peachpuff 4px, transparent 4px) 0 100%,
    linear-gradient(to left, peachpuff 4px, transparent 4px) 100% 0,
    linear-gradient(to left, peachpuff 4px, transparent 4px) 100% 100%,
    linear-gradient(to bottom, peachpuff 4px, transparent 4px) 0 0,
    linear-gradient(to bottom, peachpuff 4px, transparent 4px) 100% 0,
    linear-gradient(to top, peachpuff 4px, transparent 4px) 0 100%,
    linear-gradient(to top, peachpuff 4px, transparent 4px) 100% 100%;

  background-repeat: no-repeat;
  background-size: 20px 20px;
`

const Item = styled(Div)`
  padding: 16px;
  transition: 300ms;
  border: 2px solid peachpuff;
`
