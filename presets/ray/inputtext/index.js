export default {
    root: ({ props, context, parent }) => ({
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

            // Shape
            { 'border rounded-sm': parent.instance.$name !== 'InputGroup' },
            { 'first:rounded-l-sm rounded-none last:rounded-r-sm': parent.instance.$name == 'InputGroup' },
            { 'border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
            { 'first:ml-0 ml-[-1px]': parent.instance.$name == 'InputGroup' && !props.showButtons },

            // Colors
            'text-surface-900 dark:text-surface-0',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'bg-surface-0 dark:bg-surface-900',
            'border-surface-400 dark:border-surface-700',
            'shadow-sm',

            // Shape
            'appearance-none',

            // Interactions
            {
                'hover:border-primary-500 dark:hover:border-primary-400': !context.disabled,
                'outline-none focus:ring-primary-500 dark:focus:ring-primary-400': !context.disabled,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            },

            // States
            'focus:ring-2 focus:ring-inset focus:-ring-offset-1',
            {
                'ring-surface-400 dark:ring-surface-700 focus:ring-primary-500 dark:focus:ring-primary-600': !props.pt?.invalid,
                'ring-danger-500 dark:ring-danger-600 focus:ring-danger-500 focus:dark:ring-danger-600': props.pt?.invalid
            },
        ]
    })
};
