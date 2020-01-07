import React from 'react'
import styled from 'styled-components'
import stuff from 'stuff'
import fields from 'fields'
import useForm from 'hooks/useForm'
import Div from 'components/Div'
import Container from 'components/Container'
import Row from 'components/Row'
import Col from 'components/Col'
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
    if (divProps[prop] === true) return prev + `  ${prop}\n`
    return prev + `  ${prop}=${formatValue(divProps[prop])}\n`
  }, '')

  const get = what => ({ ...fields.find(field => field.name === what), ...form.inputs[what] })

  return (
    <Container>
      <Row small={{ listTop: 40 }}>
        <Col as="form" column small={12} large={4} listTop onSubmit={form.handleSubmit}>
          <Div listLeft>
            <Field {...get('flex-direction')} />
            <Field {...get('wraps')} />
          </Div>

          <Div listLeft>
            <Field {...get('justify-content')} />
            <Field {...get('align-content')} />
          </Div>

          <Div listLeft>
            <Field {...get('align-items')} />
            <Field {...get('align-self')} />
          </Div>

          <Div listLeft>
            <Field {...get('position')} />
            <Field {...get('z')} />
          </Div>

          <Div listLeft>
            <Field {...get('top')} />
            <Field {...get('right')} />
            <Field {...get('left')} />
            <Field {...get('bottom')} />
          </Div>

          <Div listLeft>
            <Field {...get('width')} />
            <Field {...get('height')} />
          </Div>

          <Div listLeft>
            <Field {...get('margin')} />
            <Field {...get('padding')} />
          </Div>

          <Field {...get('background')} />

          <Div listLeft>
            <Field {...get('listLeft')} />
            <Field {...get('listRight')} />
          </Div>

          <Div listLeft>
            <Field {...get('listTop')} />
            <Field {...get('listBottom')} />
          </Div>
        </Col>

        <Col small={12} large={4} justifyCenter>
          <Div {...divProps} css="transition: 300ms;">
            <Item />
            <Item />
            <Item />
          </Div>
        </Col>

        <Col small={12} large={4} as="pre" margin={0}>
          {code ? `<Div\n${code}/>` : '<Div />'}
        </Col>
      </Row>
    </Container>
  )
}

const Item = styled.div`
  padding: 16px;
  background: gray;
  border-radius: 4px;
  transition: 300ms;
  font-size: 40px;
`
