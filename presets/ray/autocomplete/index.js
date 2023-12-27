export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flex
            'inline-flex',

            // Size
            { 'w-full': props.multiple },

            // Color
            'text-surface-900 dark:text-surface-0',

            //States
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    container: ({ props, state }) => ({
        class: [
            // Font
            'font-sans text-base leading-6',

            // Flex
            'flex items-center flex-wrap',
            'gap-2',

            // Spacing
            'relative',
            'm-0',
            'px-3 py-2.5',

            // Size
            'w-full',

            // Shape
            'list-none',
            'rounded-sm',

            // Color
            'text-surface-900 dark:text-surface-0',
            'bg-surface-0 dark:bg-surface-900',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'shadow-sm',

            // States
            'ring-1 ring-inset ring-offset-0',
            'focus:outline-none focus:outline-offset-0',
            {
                'ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0': !state.focused && !props.pt?.invalid,
                'ring-2 ring-primary-500 dark:ring-primary-400': state.focused && !props.pt?.invalid,
                'ring-2': state.focused,
                'ring-primary-500 dark:ring-primary-400': state.focused && !props.pt?.invalid,
                'ring-danger-500 dark:ring-danger-600': props.pt?.invalid
            },

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-text overflow-hidden',
            'appearance-none'
        ]
    }),
    inputtoken: ({ props }) => ({
        class: [{ 'py-2.5 px-0': !props.multiple, 'p-0.5': props.multiple }, , 'inline-flex flex-auto']
    }),
    input: ({ props }) => ({
        class: [
            // Font
            'font-sans text-base leading-none',

            // Shape
            'appearance-none rounded-sm',
            { 'rounded-tr-none rounded-br-none': props.dropdown },
            { 'outline-none shadow-none rounded-none': props.multiple },

            // Size
            { 'w-full': props.multiple },

            // Spacing
            'm-0',
            { 'py-2.5 px-3': !props.multiple, 'p-0': props.multiple },

            // Colors
            {
                'text-surface-700 dark:text-white/80': !props.multiple,
                'bg-surface-0 dark:bg-surface-900': !props.multiple,
                'border': !props.multiple,
                'text-surface-700 dark:text-white/80': props.multiple,
                'border-0 bg-transparent': props.multiple,
            },

            // States
            'focus:outline-none focus:outline-offset-0',
            {
                'focus:outline-none focus:outline-offset-0 focus:ring-inset focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400': !props.multiple,
                'border-danger-500 dark:border-danger-600': props.pt?.invalid,
                'border-surface-300 dark:border-surface-700': !props.pt?.invalid
            },

            // Transition
            'transition-colors duration-200'
        ]
    }),
    token: {
        class: [
            // Flexbox
            'inline-flex items-center',

            // Spacing
            '-my-1',
            'py-0.5 px-3',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-700 dark:text-white/70',
            'bg-surface-200 dark:bg-surface-700'
        ]
    },
    label: {
        class: 'leading-5'
    },
    removeTokenIcon: {
        class: [
            // Shape
            'rounded-sm leading-6',

            // Spacing
            'ml-2',

            // Size
            'w-4 h-4',

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer'
        ]
    },
    dropdownbutton: {
        root: {
            class: [
                'relative text-sm leading-none',

                // Alignments
                'items-center inline-flex text-center align-bottom',

                // Shape
                'rounded-r-md',

                // Size
                'px-3 py-2.5',
                '-ml-[1px]',

                // Colors
                'text-surface-600 dark:text-surface-100',
                'bg-surface-100 dark:bg-surface-800',
                'ring-1 ring-inset ring-surface-300 dark:ring-surface-700',

                // States
                'hover:bg-surface-200 dark:hover:bg-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400'
            ]
        }
    },
    loadingicon: {
        class: ['text-sm leading-none text-surface-500 dark:text-surface-0/70', 'absolute top-[50%] right-[0.5rem] -mt-2']
    },
    panel: {
        class: [
            // Position
            'absolute top-0 left-0',

            // Shape
            'border-0',
            'rounded-sm',
            'shadow-md',
            'max-h-[15rem]',
            'overflow-auto',

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-800 dark:text-white/80',
            'ring-1 ring-inset ring-surface-300 dark:ring-surface-700'
        ]
    },
    list: {
        class: 'py-1 list-none m-0'
    },
    item: ({ context }) => ({
        class: [
            // Font
            'text-base',
            'leading-none',
            { 'font-normal': !context.selected, 'font-bold': context.selected },

            // Position
            'relative',

            // Shape
            'border-0',
            'rounded-none',

            // Spacing
            'm-0',
            'px-5 py-3',

            // Color
            { 'text-surface-700 dark:text-white/80': !context.focused && !context.selected },
            { 'bg-primary-500 dark:bg-primary-400 text-white dark:text-surface-700': context.focused && context.selected },
            { 'bg-transparent text-surface-700 dark:text-white/80': !context.focused && context.selected },

            //States
            'hover:bg-primary-500 dark:hover:bg-primary-400 hover:text-white dark:hover:text-surface-700',

            // Misc
            'cursor-pointer',
            'overflow-hidden',
            'whitespace-nowrap'
        ]
    }),
    itemgroup: {
        class: [
            //Font
            'font-bold',
            'text-base',

            // Spacing
            'm-0',
            'px-5 py-3',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-600/80',

            // Misc
            'cursor-auto'
        ]
    },
    emptymessage: {
        class: [
            // Font
            'leading-none',
            'text-base',

            // Spacing
            'px-5 py-3',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-transparent'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
