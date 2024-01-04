export default {
    root: ({ props, parent }) => ({
        class: [
            // Display
            'inline-flex',

            { 'flex-col': props?.showButtons && props?.buttonLayout == 'vertical' },

            // Sizing
            { '!w-16': props?.showButtons && props?.buttonLayout == 'vertical' },
        ]
    }),
    input: {
        root: ({ props, context, parent }) => ({
            class: [
                'relative',

                // Text
                'sm:text-sm sm:leading-6',
                { 
                    'text-center': parent?.props?.showButtons && (parent?.props?.buttonLayout == 'vertical' || parent?.props?.buttonLayout == 'horizontal'),
                    'order-2': parent?.props?.buttonLayout == 'horizontal' || parent?.props?.buttonLayout == 'vertical'
                },

                // Spacing
                'px-3 py-1.5',

                // Shape
                'appearance-none outline-none',
                { 'rounded-md': parent?.instance?.$parentInstance?.$name !== 'InputGroup' },
                { '-mx-px': parent?.instance?.$parentInstance?.$name == 'InputGroup' && !props?.showButtons },

                // Colors
                'text-surface-900 dark:text-surface-0',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                'bg-surface-0 dark:bg-surface-900',
                'ring-1 ring-inset',
                'border-0',
                'shadow-sm',

                // Interactions
                {
                    'hover:ring-primary-500 dark:hover:ring-primary-400': !context?.disabled,
                    'focus-within:ring-none opacity-60 select-none pointer-events-none cursor-default': context?.disabled
                },

                // States
                'focus-within:ring-2 focus-within:ring-inset',
                {
                    'ring-surface-400 dark:ring-surface-700 focus-within:ring-primary-500 dark:focus-within:ring-primary-600': !props?.pt?.invalid,
                    'ring-danger-500 dark:ring-danger-600 focus-within:ring-danger-500 focus-within:dark:ring-danger-600': props?.pt?.invalid
                },
            ]
        })
    },
    buttongroup: {
        class: ['flex', 'flex-col']
    },
    incrementbutton: {
        root: ({ parent }) => ({
            class: [
                // Display
                'flex flex-auto',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                // Position
                'relative',
                { 'order-3': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'order-1': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Color
                'text-surface-600 dark:text-surface-400',
                'bg-surface-0 dark:bg-surface-800',
                'border border-surface-300 dark:border-surface-700',

                // Sizing
                'min-w-[2.5rem]',
                { 'px-2.5 py-1.5': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                { 'p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-md',
                { 'rounded-tl-none rounded-br-none rounded-bl-none border-b-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'rounded-bl-none rounded-tl-none': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-bl-none rounded-br-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus:dark:ring-primary-500',
                'hover:bg-surface-50 dark:hover:bg-surface-700',

                // Misc
                'cursor-pointer overflow-hidden select-none',
            ]
        }),
        label: {
            class: 'h-0 w-0'
        }
    },
    decrementbutton: {
        root: ({ parent }) => ({
            class: [
                // Display
                'flex flex-auto',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                //Position
                'relative',
                { 'order-1': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'order-3': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //Color
                'text-surface-600 dark:text-surface-400',
                'bg-surface-0 dark:bg-surface-800',
                'border border-surface-300 dark:border-surface-700',

                // Sizing
                'min-w-[2.5rem]',
                { 'px-2.5 py-1.5': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                { 'p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-md',
                { 'rounded-tr-none rounded-tl-none rounded-bl-none border-t-none': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'rounded-tr-none rounded-br-none ': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-tr-none rounded-tl-none ': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //States
                'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus:dark:ring-primary-500',
                'hover:bg-surface-50 dark:hover:bg-surface-700',

                //Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        }),
        label: {
            class: 'h-0 w-0'
        }
    }
};
