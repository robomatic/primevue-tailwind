export default {
    root: ({ props }) => ({
        class: [
            'shadow-sm',
            'rounded-md',
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled },
            {
                'ring-1 ring-danger-500 dark:ring-danger-600': props.pt?.invalid
            }
        ]
    }),
    button: ({ context, props }) => ({
        class: [
            'relative',
            // Font
            'text-base',
            'leading-none',

            // Flex Alignment
            'inline-flex items-center align-bottom text-center',

            // Spacing
            'px-3 py-2.5',

            // Shape
            'first:rounded-l-md first:rounded-tr-none first:rounded-br-none',
            'last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',

            // Color
            {
                'bg-surface-0 dark:bg-surface-900 hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.active,
                'text-surface-700 dark:text-surface-100/70': !context.active,
                'bg-primary-200 dark:bg-primary-700 text-primary-700 dark:text-primary-100 hover:bg-primary-300 dark:hover:bg-primary-600/80': context.active
            },

            // States
            'ring-inset',
            {
                'ring-1 ring-surface-400 dark:ring-surface-700 focus:ring-surface-500 dark:focus:ring-surface-500': !context.active,
                'ring-1 ring-primary-500 dark:ring-primary-600 focus:ring-primary-500 dark:focus:ring-primary-500': context.active
            },
            'focus:outline-none focus:outline-offset-0',
            ,
            { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },

            // Transition
            'transition duration-200',

            // Misc
            'cursor-pointer select-none overflow-hidden'
        ]
    }),
    label: {
        class: 'font-semibold'
    }
};
