export default {
    root: ({ props, context }) => ({
        class: [
            'relative',
            
            // Font
            'font-sans leading-6',

            // Spacing
            'm-0',
            {
                'py-3 px-4 text-lg': props.size == 'large',
                'py-1 px-2': props.size == 'small',
                'py-2.5 px-3': props.size == null
            },

            // Colors
            'text-surface-900 dark:text-surface-0',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'bg-surface-0 dark:bg-surface-900',
            'ring-1 ring-inset ring-offset-0',
            'shadow-sm',

            // Shape
            'rounded-sm',
            'appearance-none',

            // Interactions
            {
                'outline-none focus:ring-primary-500 dark:focus:ring-primary-400': !context.disabled,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            },

            // States
            'focus:ring-2',
            {
                'ring-surface-400 dark:ring-surface-700 focus:ring-primary-500 dark:focus:ring-primary-600': !props.pt?.invalid,
                'ring-danger-500 dark:ring-danger-600 focus:ring-danger-500 focus:dark:ring-danger-600': props.pt?.invalid
            },
        ]
    })
};
