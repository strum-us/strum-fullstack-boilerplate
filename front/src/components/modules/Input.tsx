import { If, StringKeyCodes } from '@strum/common'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

// import { IconContainer } from '@components/IconContainer'
// import { SVGHelp } from '@components/SvgIcon/Icons'
import { ToolTip } from '@components/modules/ToolTip'

// import { getTheme } from '@middlewares/util'

type InputProps = {
  // children
  className?: string
  size?: 'lg' | 'md' | 'sm'
  label?: string
  tooltip?: { icon: 'question', description: string }
  error?: string
  type?: string
  // type?: 'disabled' | 'negative' | 'success' | 'white' | 'clear'
  icon?
  id?: any
  outline?: boolean // show ouline and default is on
  bgFocus?: boolean // when focus, background changed
  transition?: boolean // transition effect
  noPaddingX?: boolean
  classNameInput?: string
  inputRef?: React.MutableRefObject<any>
  defaultValue?: string
  value?: string
  placeholder?: string
  onKeyUp?: (e?) => void
  onKeyDown?: (e?) => void
  onEnter?: (e?) => void
  onKeyDownCapture?: (e?) => void
  onChange?: (e?) => void
  onBlur?: (e?) => void
  onPaste?: (e?) => void
  autoFocus?: boolean
  // style?: React.CSSProperties
  autoComplete?: 'on' | 'off'
  pause?: boolean
  disabled?: boolean
  style?: any
  prefix?: string

  // area
  footerArea?: boolean
}

// const styles = {
//   default: 'relative flex flex-row items-center w-full py-2 px-3 space-x-2 overflow-hidden cursor-text whitespace-nowrap focus:text-point focus:border-primary hover:border-primary focus-within:border-primary',
//   bordered: 'border border-color rounded cursor-text whitespace-nowrap focus:text-point',
// }

export function Input(props: InputProps) {
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>(props?.defaultValue || '')

  useEffect(() => {
    if (!props.autoFocus) { return }
    if (ref.current) { ref.current.focus() }
    if (props.inputRef?.current) { props.inputRef?.current?.focus() }
  }, [props.autoFocus])

  const onChange = (e) => {
    props?.onChange?.(e)
    setValue(() => e.target.value)
  }

  // const defaultValue = props?.defaultValue
  // if (props.prefix) {
  //   defaultValue = props.prefix + (defaultValue || '')
  // }
  return (
    <div className='input-form '>
      <div className='flex flex-row place-content-between'>
        {/* Label */}
        {
          (props.label) && <label htmlFor='' className='input-label'>
            {props.label}
          </label>
        }
        {/* Tooltip */}
        {
          (props.tooltip) && (
            <div className='input-tooltip'>
              <ToolTip />
            </div>
          )
        }
      </div>
      {/* <div className='flex flex-row items-center px-2 text-base transition-colors duration-75 ease-in-out bg-gray-800 border border-gray-700 rounded focus-within:text-white focus-within:border-primary focus-within:bg-gray-200 dark:bg-gray-900'> */}

      <div
        className={['inputbox flex flex-row',
          props.transition !== false && 'inputbox-transition',
          props.outline !== false && 'inputbox-outline',
          props.bgFocus !== false && 'inputbox-bg-focus',
          props.noPaddingX !== true && 'pad',
          props.className,
        ].join(' ')}
        style={{ margin: 0 }} >
        <If v={props.icon}>
          {/* <IconContainer>
            {props.icon}
          </IconContainer> */}
        </If>
        <If v={props?.disabled}>
          <div
            className={['inputbox-input',
              props.transition !== false && 'inputbox-transition',
              props.bgFocus !== false && 'inputbox-bg-focus',
              props.classNameInput].join(' ')}>
            {props?.defaultValue || props?.value}
          </div>
        </If>
        <If v={props?.pause}>
          <div
            className={['inputbox-input',
              props.transition !== false && 'inputbox-transition',
              props.bgFocus !== false && 'inputbox-bg-focus',
              props.classNameInput].join(' ')}>
            {value || props?.defaultValue}
          </div>
        </If>
        <If v={!props?.disabled && !props?.pause}>
          <span>{props.prefix}</span>
          <input
            type={props.type}
            name={'input-' + props.id}
            id={props.id}
            ref={props.inputRef || ref}
            onKeyUp={props?.onKeyUp}
            onKeyDown={(e) => {
              if (e.key === StringKeyCodes.enter) {
                props?.onEnter?.(e)
              }
              props?.onKeyDown?.(e)
            }}
            onKeyDownCapture={props?.onKeyDownCapture}
            onChange={onChange}
            onBlur={props?.onBlur}
            onPaste={props?.onPaste}
            defaultValue={value || props?.defaultValue}
            value={props?.value}
            placeholder={props.placeholder || 'Enter Message ..'}
            autoComplete={props?.autoComplete}
            className={['inputbox-input',
              props.transition !== false && 'inputbox-transition',
              props.bgFocus !== false && 'inputbox-bg-focus',
              props.classNameInput].join(' ')} />
        </If>
      </div>

      {/* Input */}
      {/* <div
        className={[
          styles.default,
          props.border && styles.bordered,
          props.size, props.type, value && 'has-value'].join(' ')}
        style={props?.style}>
        <If v={props.icon}>
          <IconContainer>
            {props.icon}
          </IconContainer>
        </If>
        <input
          id={props.id}
          ref={props.inputRef || ref}
          onKeyUp={props?.onKeyUp}
          onKeyDown={(e) => {
            if (e.key === StringKeyCodes.enter) {
              props?.onEnter?.(e)
            }
            props?.onKeyDown?.(e)
          }}
          onKeyDownCapture={props?.onKeyDownCapture}
          onChange={onChange}
          onBlur={props?.onBlur}
          onPaste={props?.onPaste}
          defaultValue={props?.defaultValue}
          value={props?.value}
          className={[
            'flex flex-row items-center w-full py-1 whitespace-nowrap focus:border-primary text-color bg-color focus:text-point cursor-text',
            props.icon && 'icon',
            props.className,
            value && 'has-value',
          ].join(' ')}
          type='text'
          placeholder={props.placeholder || 'Enter Message ..'} />
      </div> */}

      {/* Error message (negative) */}
      {(props.footerArea || props.error) &&
        (
          <div className='input-error '>
            <label htmlFor='' className='input-negative'>
              {props.error}
            </label>
          </div>
        )}
    </div>
  )
}
