import checkboxConfig from '../checkbox'

export default {
    root: {
        class: [
            // Space
            'p-3',

            // Shape
            'rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-700 dark:text-white/80',
            'border border-solid border-surface-200 dark:border-surface-700'
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
        class: ['p-0', 'rounded-md', 'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-0 focus:ring-primary-500/50 dark:focus:ring-primary-500/50']
    },
    content: ({ context, props }) => ({
        class: [
            // Flex and Alignment
            'flex items-center gap-2.5',

            // Shape
            'rounded-md',

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
            'font-sans leading-6',

            // Spacing
            'm-0',
            'py-2.5 px-3',

            // Size
            'w-full',

            // Colors
            'text-surface-900 dark:text-surface-0',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'bg-surface-0 dark:bg-surface-900',
            'ring-1 ring-inset ring-offset-0',
            'shadow-sm',

            // Shape
            'rounded-md',
            'appearance-none',

            // Interactions
            'outline-none focus:ring-primary-500 dark:focus:ring-primary-400',

            // States
            'focus:ring-2',
            'ring-surface-400 dark:ring-surface-700 focus:ring-primary-500 dark:focus:ring-primary-600',
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
};
