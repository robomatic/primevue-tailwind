import inputTextConfig from '../inputtext'

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
        root: ({ props, parent }) => {
            const input = inputTextConfig.root({ props, context: { disabled: props?.disabled }, parent })
            input.class.push({ 
                'text-center': parent?.props?.showButtons && (parent?.props?.buttonLayout == 'vertical' || parent?.props?.buttonLayout == 'horizontal'),
                'order-2': parent?.props?.buttonLayout == 'horizontal' || parent?.props?.buttonLayout == 'vertical'
            })
            return input
        }
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
                'rounded-sm',
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
