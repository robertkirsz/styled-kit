import React from 'react'
import styled from 'styled-components'
import Div from 'components/Div'

const reg = /[^a-z0-9-. ]+/g

export default function Field({
  name = '',
  type = 'text',
  initialValue,
  parser = v => v,
  options = [],
  onChange = () => {},
  allValues,
  allInputs = {},
  ...props
}) {
  const handleChange = event => {
    // options.forEach(option => {
    //   allInputs[option.value].onChange(null, event.target.value === option.value)
    // })
    const value = (event.target.value || '').toLowerCase().replace(reg, '')
    onChange(null, parser(value))
  }

  if (type === 'text') {
    return (
      <Div listLeft={4}>
        <code>{name}:</code>
        <span>
          <Input {...props} style={{ width: `${String(props.value).length * 10}px` }} onChange={handleChange} />
        </span>
      </Div>
    )
  }

  if (type === 'select') {
    return (
      <Div listLeft height={22}>
        <code>{name}:</code>
        <Label htmlFor={name}>
          {props.value}
          <Select id={name} {...props} onChange={handleChange}>
            <option value=""></option>
            {options.map(({ label }) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </Select>
        </Label>
      </Div>
    )
  }

  return null
}

const Input = styled.input`
  background: white;
  border: none;
  padding: 2px 8px;
  border-radius: 4px;
  font: 16px monospace;
`

const Select = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Label = styled.label`
  position: relative;
  background: white;
  padding: 2px 8px;
  border-radius: 4px;
  font: 16px monospace;
`
