import checkboxConfig from '../checkbox'

export default {
    root: ({ props, state }) => ({
        class: [
            // Display and Position
            'inline-flex',
            'relative',

            // Shape
            'rounded-sm',

            // Color and Background
            'bg-surface-0 dark:bg-surface-900',
            'ring-1 ring-inset ring-surface-400 dark:ring-surface-700',

            // Transitions
            'transition-all',
            'duration-200',

            // States
            'hover:ring-primary-500 dark:hover:ring-primary-500',
            { 'outline-none outline-offset-0 ring-2 ring-primary-500/50 dark:ring-primary-500/50': state.focused },

            // Misc
            'cursor-pointer',
            'select-none',
            { 'opacity-60': props.disabled, 'pointer-events-none': props.disabled, 'cursor-default': props.disabled }
        ]
    }),
    labelContainer: {
        class: ['overflow-hidden flex flex-auto cursor-pointer']
    },
    label: {
        class: [
            'block leading-5',

            // Space
            'p-3',

            // Color
            'text-surface-800 dark:text-white/80',

            // Transition
            'transition duration-200',

            // Misc
            'overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis'
        ]
    },
    trigger: {
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',

            // Color and Background
            'bg-transparent',
            'text-surface-500',

            // Size
            'w-12',

            // Shape
            'rounded-tr-sm',
            'rounded-br-sm'
        ]
    },
    panel: {
        class: [
            // Position
            'absolute top-0 left-0',

            // Shape
            'border-0 dark:border',
            'rounded-sm',
            'shadow-lg',

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-800 dark:text-white/80',
            'dark:border-surface-700'
        ]
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
            'overflow-auto'
        ]
    },
    tree: {
        root: {
            class: [
                // Space
                'p-5'
            ]
        },
        wrapper: {
            class: ['overflow-visible']
        },
        container: {
            class: [
                // Spacing
                'm-0 p-0',

                // Misc
                'list-none overflow-visible'
            ]
        },
        node: {
            class: ['p-0', 'rounded-sm', 'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-0 focus:ring-primary-500/50 dark:focus:ring-primary-500/50']
        },
        content: ({ context, props }) => ({
            class: [
                // Flex and Alignment
                'flex items-center gap-2.5',

                // Shape
                'rounded-sm',

                // Spacing
                'px-2 py-2.5',

                // Colors
                'text-surface-600 dark:text-white/70',
                { 'bg-primary-500 dark:bg-primary-500 text-white dark:text-white/70': context.selected },

                // States
                { 'hover:bg-surface-50 dark:hover:bg-surface-700/40': (props.selectionMode == 'single' || props.selectionMode == 'multiple') && !context.selected },

                // Transition
                'transition-shadow duration-200',

                { 'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple' },

                // Misc
            ]
        }),
        toggler: ({ context }) => ({
            class: [
                // Flex and Alignment
                'inline-flex items-center justify-center',

                // Shape
                'border-0 rounded-full',

                // Size
                'w-8 h-8',

                // Spacing
                '-my-1.5',

                // Colors
                'bg-transparent',
                {
                    'text-surface-500 dark:text-white': !context.selected,
                    'text-white/70 dark:text-white': context.selected,
                    invisible: context.leaf
                },

                // States
                'hover:bg-surface-200/20 dark:hover:bg-surface-500/20',

                // Transition
                'transition duration-200',

                // Misc
                'cursor-pointer select-none'
            ]
        }),
        checkboxcontainer: checkboxConfig.root,
        checkbox: ({ context }) => checkboxConfig.input({ props: {}, context }),
        checkboxicon: checkboxConfig.icon,
        nodeicon: {
            class: ['text-surface-600 dark:text-white/70']
        },
        subgroup: {
            class: ['m-0 list-none p-0 pl-2 mt-1', 'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-primary-500/50']
        },
        filtercontainer: {
            class: [
                'relative block',

                // Space
                'mb-2',

                // Size
                'w-full'
            ]
        },
        input: {
            class: [
                'relative',
                // Font
                'font-sans leading-none',

                // Spacing
                'm-0',
                'p-3 pr-10',

                // Size
                'w-full',

                // Shape
                'rounded-sm',

                // Colors
                'text-surface-600 dark:text-surface-200',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                'bg-surface-0 dark:bg-surface-900',
                'border border-surface-300 dark:border-surface-600',

                // States
                'hover:border-primary-500 dark:hover:border-primary-400',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50',

                // Transition & Misc
                'appearance-none',
                'transition-colors duration-200'
            ]
        },
        loadingicon: {
            class: ['text-surface-500 dark:text-surface-0/70', 'absolute top-[50%] right-[50%] -mt-2 -mr-2']
        },
        searchicon: {
            class: [
                // Position
                'absolute top-1/2 -mt-2 right-3',

                // Color
                'text-surface-600 dark:hover:text-white/70'
            ]
        }
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};