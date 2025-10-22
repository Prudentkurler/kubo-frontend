import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    icon,
    iconPosition = 'left',
    disabled,
    children, 
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dashboard-bg-main disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variantClasses = {
      primary: 'bg-gradient-to-r from-dashboard-primary to-dashboard-primary-hover hover:from-dashboard-primary-hover hover:to-dashboard-primary text-white shadow-lg hover:shadow-xl focus:ring-dashboard-primary',
      secondary: 'bg-dashboard-surface hover:bg-dashboard-border text-dashboard-text-high border border-dashboard-border hover:border-dashboard-text-medium focus:ring-dashboard-border',
      tertiary: 'bg-dashboard-bg-main hover:bg-dashboard-surface text-dashboard-text-medium border border-dashboard-border hover:border-dashboard-text-medium hover:text-dashboard-text-high focus:ring-dashboard-border',
      ghost: 'bg-transparent hover:bg-dashboard-surface text-dashboard-text-medium hover:text-dashboard-text-high focus:ring-dashboard-border',
      danger: 'bg-gradient-to-r from-dashboard-danger to-dashboard-danger hover:brightness-110 text-white shadow-lg hover:shadow-xl focus:ring-dashboard-danger',
      success: 'bg-gradient-to-r from-dashboard-success to-dashboard-success hover:brightness-110 text-white shadow-lg hover:shadow-xl focus:ring-dashboard-success',
    }

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {!loading && icon && iconPosition === 'left' && icon}
        {children}
        {!loading && icon && iconPosition === 'right' && icon}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
