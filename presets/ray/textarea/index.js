export default {
    root: ({ context }) => ({
        class: [
            // Font
            'font-sans leading-none',

            // Spacing
            'm-0',
            'p-3',

            // Shape
            'rounded-sm',

            // Colors
            'text-surface-600 dark:text-surface-200',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'bg-surface-0 dark:bg-surface-900',
            'ring-1 ring-offset-0 ring ring-surface-400 dark:ring-surface-700',
            'focus:ring-2',

            // States
            {
                'hover:ring-primary-500 dark:hover:ring-primary-500': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-500/50': !context.disabled,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            },

            // Misc
            'appearance-none',
            'transition-colors duration-200'
        ]
    })
};
