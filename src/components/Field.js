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
      justifyEnd
      clickable
      relative
      css={`
        transition: 300ms;
        opacity: ${isEmpty ? 0.3 : 1};
        &:focus-within,
        &:hover {
          opacity: 1;
        }
      `}
    >
      <Code>{displayName || name}:</Code>

      {type === 'text' && <Input {...props} id={name} onChange={handleChange} onKeyDown={handleKeyDown} />}

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

const InputStyles = `
  height: 22px;
  width: 30px;
  background: white;
  padding: 4px;
  border: none;
  border-radius: 4px;
  font: 12px monospace;
`

const Input = styled.input`
  ${InputStyles}
  min-width: 8px;
  outline: none;
  transition: box-shadow 0.3s;

  &:focus {
    box-shadow: 5px 5px 12px #489dcf, -5px -5px 12px #62d5ff;
  }
`

const Select = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const SelectWrapper = styled.div`
  ${InputStyles}
`

const Code = styled.code`
  font: 12px monospace;
  white-space: nowrap;
`
