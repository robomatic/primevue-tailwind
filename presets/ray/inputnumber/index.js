export default {
    root: ({ props, parent }) => ({
        class: [
            // Display
            'inline-flex',

            { 'flex-col': props.showButtons && props.buttonLayout == 'vertical' },

            // Sizing
            { '!w-16': props.showButtons && props.buttonLayout == 'vertical' },


            // Shape
            'shadow-sm',
            'rounded-sm'
        ]
    }),
    input: {
        root: ({ parent }) => ({
            class: [
                //Text
                'text-base',
                { 'text-center': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Spacing
                'm-0',
                'py-2.5 px-3',

                // Shape
                'rounded-sm',
                { 'rounded-tr-none rounded-br-none': parent.props.showButtons },
                { 'rounded-tl-none rounded-bl-none': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Colors
                'text-surface-900 dark:text-surface-0',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                'bg-surface-0 dark:bg-surface-900',

                // States
                'ring-1 ring-inset ring-offset-0',
                'outline-none',
                'focus:ring-2',
                {
                    'ring-surface-400 dark:ring-surface-700 focus:ring-primary-500 dark:focus:ring-primary-600': !parent.props.pt?.invalid,
                    'ring-danger-500 dark:ring-danger-600 focus:ring-danger-500 focus:dark:ring-danger-600': parent.props.pt?.invalid
                },

                //Position
                { 'order-2': parent.props.buttonLayout == 'horizontal' || parent.props.buttonLayout == 'vertical' }
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
                'w-[3rem]',
                { 'px-2.5 py-1.5': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                { 'p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-sm',
                { 'rounded-tl-none rounded-br-none rounded-bl-none border-b-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'rounded-bl-none rounded-tl-none': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-bl-none rounded-br-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus:dark:ring-primary-500',
                'hover:bg-surface-50 dark:hover:bg-surface-700',

                // Misc
                'cursor-pointer overflow-hidden select-none'
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
                'w-[3rem]',
                { 'px-2.5 py-1.5': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                { 'p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-sm',
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
