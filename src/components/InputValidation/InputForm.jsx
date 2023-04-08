import React from 'react'
import styled, { css } from 'styled-components'

const InputForm = ({ estado, setEstado, Label, tipo, placeholder, name, className, value, expresionRegular }) => {

  const onChangeInput = (e) => {
    setEstado({ ...estado, campo: e.target.value })
  }

  const validation = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        setEstado({ ...estado, valido: 'true' })
      } else {
        setEstado({ ...estado, valido: 'false' })
      }
    }
  }

  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text text-stone-900">{Label}</span>
      </label>
      {/* input Nombre */}
      <Input
        type={tipo}
        placeholder={placeholder}
        className={`input input-bordered bg-white `}
        name={name}
        value={estado.campo}
        onChange={onChangeInput}
        onKeyUp={validation}
        onBlur={validation}
        valido={estado.valido}
      />
    </div>
  )
}

export default InputForm

const Input = styled.input`
width:100%;
backgroud:#fff;
border-radius:3px:
height:45px;
line-height:45px;
padding:0 40px 0 10px;
transition: .1s ease all;
border: 3px; solid transparent;

&:focus{
    border:3px solid #0075ff;
    outline:none;
    box-shadow:3px 0px 30px rgba(163,163,163, 0.4);
}

${props => props.valido === 'true' && css`
border: 3px; solid transparent;
`}
${props => props.valido === 'false' && css`
border: 3px  solid #bb2929 !important; 
`}
`
