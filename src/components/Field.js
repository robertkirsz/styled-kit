import React from 'react'
import styled from 'styled-components'
import Div from 'components/Div'

const reg = /[^a-z0-9- ]+/g

export default function Field({
  name = '',
  type = 'text',
  initialValue,
  parser = v => v,
  options = [],
  onChange = () => {},
  allInputs = {},
  ...props
}) {
  const handleChange = event => {
    if (type === 'select' && options.length > 0) {
      options.forEach(option => {
        allInputs[option.value].onChange(null, event.target.value === option.value)
      })
      return
    }

    if (type === 'text') {
      const value = (event.target.value || '').toLowerCase().replace(reg, '')
      onChange(null, parser(value))
    }
  }

  if (type === 'text') {
    return (
      <Div listLeft={4}>
        <code>{name}:</code>
        <span>
          <Input {...props} style={{ width: `${String(props.value).length * 10 - 2}px` }} onChange={handleChange} />
        </span>
      </Div>
    )
  }

  if (type === 'select') {
    return (
      <Div listLeft>
        <code>{name}:</code>
        <Select {...props} onChange={handleChange}>
          <option value=""></option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Div>
    )
  }

  return null
}

const Input = styled.input`
  background: none;
  border: 1px solid white;
  font: 16px monospace;
`

const Select = styled.select``
