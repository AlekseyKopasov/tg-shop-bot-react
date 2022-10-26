import React from 'react'

type PropsTypes = {
  className?: string | undefined
  children: any
  onClick: () => void
}

const Button: React.FC<PropsTypes> = (props: any) => {
  return (
    <button {...props} className={props.className? 'button  ' + props.className : 'button'}/>
  )
}

export default Button