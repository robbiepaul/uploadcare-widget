/* @flow */
/* @jsx h */
import {h} from 'hyperapp'
import cn from 'classnames'
import styles from './SVG.css'

type Props = {
  width: number,
  height: number,
  viewBox?: string,
  className?: string,
}

export const SVG = ({width, height, viewBox, className}: Props, children) =>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox={viewBox ? viewBox : `0 0 ${width} ${height}`}
    className={cn(styles.svg, className)}
    role='presentation'>
    {children}
  </svg>
