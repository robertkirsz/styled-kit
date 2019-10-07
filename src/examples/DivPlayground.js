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
    if (divProps[prop] === true) return prev + `${prop}\n`
    return prev + `${prop}=${formatValue(divProps[prop])}\n`
  }, '')

  return (
    <Container>
      <Row small={{ listTop: 40 }}>
        <Col
          small={12}
          large={4}
          as="form"
          onSubmit={form.handleSubmit}
          wraps
          listRight={16}
          relative
          z="100"
          background="rgba(100%, 75.3%, 79.6%, 0.5)"
        >
          {fields.map(field => {
            const fieldProps = { ...field, ...form.inputs[field.name] }
            return <Field key={field.name} {...fieldProps} />
          })}
        </Col>

        <Col small={12} large={4} justifyCenter>
          <Div {...divProps} css="transition: 300ms;">
            <Item>
              <span role="img" aria-label="Doggy">
                🐶
              </span>
            </Item>

            <Item>
              <span role="img" aria-label="Kitty">
                🐱
              </span>
            </Item>
          </Div>
        </Col>

        <Col
          small={12}
          large={4}
          as="pre"
          relative
          margin={0}
          z="100"
          background="rgba(100%, 75.3%, 79.6%, 0.5)"
          css="font-size: 20px;"
        >
          {code}
        </Col>
      </Row>
    </Container>
  )
}

const Item = styled.div`
  padding: 6px;
  border: 2px solid rgb(255, 192, 203);
  border-radius: 4px;
  transition: 300ms;
  font-size: 40px;
`
