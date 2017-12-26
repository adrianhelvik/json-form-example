import React from 'react'

export const string = ({ onChange, value, label }) => (
  <div className="string">
    {label}:
    <br />
    <input value={value} onChange={onChange} />
  </div>
)
string.defaultValue = ''

export const text = ({ onChange, value, label }) => (
  <div className="text">
    {label}:
    <br />
    <textarea value={value} onChange={onChange} />
  </div>
)
text.defaultValue = ''

const btn = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 20,
}

const singular = value =>
  value.endsWith('s')
    ? value.substring(0, -1)
    : value

export const $array = ({ children, label, add }) => (
  <div>
    <h3>{label}</h3>
    {React.Children.toArray(children).length ? children : '-- empty --'}
    <button style={btn} onClick={add}>Add {singular(label)}</button>
  </div>
)

export const $object = ({ children, label }) => (
  <div>
    <h3>{label}</h3>
    {children}
  </div>
)
