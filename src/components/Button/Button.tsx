import React from 'react'

type PropsTypes = {
  className: string | null
  children: any
  onClick: () => void
}

const Button: React.FC<PropsTypes> = (props: any) => {
  return (
    <button {...props} className={'button' + props.className}/>
  )
}

export default Button