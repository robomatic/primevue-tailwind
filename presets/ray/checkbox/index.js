export default {
    root: {
        class: [
            'relative',

            // Alignment
            'inline-flex',
            'align-bottom',

            // Size
            'w-6',
            'h-6',

            // Misc
            'cursor-default',
            'select-none'
        ]
    },
    input: ({ props, context }) => ({
        class: [
            // Alignment
            'flex',
            'items-center',
            'justify-center',

            // Size
            'w-6',
            'h-6',

            // Shape
            'rounded-md',
            'border',

            // Colors
            'text-surface-600',
            {
                'bg-surface-0 border-surface-400 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                'bg-primary-500 border-primary-500 dark:border-primary-500 dark:bg-primary-500': context.checked
            },

            // States
            'focus:ring-1',
            'focus:outline-none focus:outline-offset-0',
            {
                'ring-2': context.focused,
                'ring-primary-500 dark:ring-primary-400': !props.disabled && context.focused && !props.pt?.invalid,
                'ring-surface-400 dark:ring-surface-700': !props.pt?.invalid,
                'ring-danger-500 dark:ring-danger-600': props.pt?.invalid,
                'cursor-not-allowed opacity-60': props.disabled
            },

            // Transitions
            'transition-colors',
            'duration-200'
        ]
    }),
    icon: {
        class: [
            // Font
            'text-normal',

            // Size
            'w-4',
            'h-4',

            // Colors
            'text-white dark:text-white/70',

            // Transitions
            'transition-all',
            'duration-200'
        ]
    }
};
