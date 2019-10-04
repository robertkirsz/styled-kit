import React from 'react'
import styled from 'styled-components'
import Div from 'components/Div'

const invalidCharacters = /[^a-z0-9-. ]+/g

export default function Field({
  name = '',
  displayName = '',
  type = 'text',
  initialValue,
  parser = v => v,
  options = [],
  onChange = () => {},
  className = '',
  ...props
}) {
  const handleChange = event => {
    onChange(null, parser((event.target.value || '').toLowerCase().replace(invalidCharacters, '')))
  }

  const handleKeyDown = event => {
    const up = event.key === 'ArrowUp'
    const down = event.key === 'ArrowDown'

    if (up || down) {
      event.preventDefault()
      const value = parseInt(props.value)
      if (!isNaN(value)) onChange(null, value + (up ? 1 : -1))
    }
  }

  const isEmpty = ['', false, undefined, null].includes(props.value)

  return (
    <Div
      as="label"
      htmlFor={name}
      listLeft={4}
      height={32}
      className={className}
      itemsCenter
      clickable
      css={`
        transition: 300ms;
        opacity: ${isEmpty ? 0.3 : 1};
        &:focus-within,
        &:hover {
          opacity: 1;
        }
      `}
    >
      <code>{displayName || name}:</code>

      {type === 'text' && (
        <Input
          {...props}
          id={name}
          style={{ width: String(props.value).length * 10 }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      )}

      {type === 'select' && (
        <SelectWrapper>
          {props.value}
          <Select id={name} {...props} onChange={handleChange}>
            <option value=""></option>
            {options.map(({ label }) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </Select>
        </SelectWrapper>
      )}

      {type === 'checkbox' && <input id={name} type="checkbox" {...props} onChange={onChange} />}
    </Div>
  )
}

const Input = styled.input`
  height: 22px;
  background: white;
  border: none;
  padding: 2px 8px;
  border-radius: 4px;
  font: 16px monospace;
  transition: all 300ms, width 100ms;
  outline: none;

  &:focus {
    box-shadow: 0 0 8px 2px hotpink;
  }
`

const Select = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const SelectWrapper = styled.div`
  height: 22px;
  position: relative;
  background: white;
  padding: 2px 8px;
  border-radius: 4px;
  font: 16px monospace;
`
