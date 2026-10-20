import * as React from 'react'
import { cn } from '@/lib/utils'

const Separator = React.forwardRef(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <hr
      ref={ref}
      className={cn(
        'relative w-full self-stretch',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        'border-border',
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = 'Separator'

export { Separator }
