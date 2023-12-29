import inputTextConfig from "../inputtext"

export default {
    root: {
        class: [
            // Sizing and Shape
            'min-w-[12rem]',
            'rounded-sm',

            // Colors
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-700 dark:text-white/80',
            'border border-surface-200 dark:border-surface-600'
        ]
    },
    wrapper: {
        class: [
            // Overflow
            'overflow-auto'
        ]
    },
    list: {
        class: 'py-3 list-none m-0'
    },
    item: ({ context }) => ({
        class: [
            // Font
            'font-normal',
            'leading-none',

            // Position
            'relative',

            // Shape
            'border-0',
            'rounded-none',

            // Spacing
            'm-0',
            'py-3 px-5',
            'flex items-center gap-2',

            // Color
            { 'text-surface-700 dark:text-white/80': !context.focused && !context.selected },
            { 'bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80': context.focused && !context.selected },
            { 'ring-1 ring-primary-500/50 dark:ring-primary-500/50': context.focused && context.selected },
            { 'bg-primary-500 dark:bg-primary-600 text-white dark:text-white/70': context.selected },

            //States
            { 'hover:bg-surface-100 dark:hover:bg-surface-700/80': !context.focused && !context.selected },
            { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80': context.focused && !context.selected },
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

            // Transitions
            'transition-shadow',
            'duration-200',

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

            // Spacing
            'm-0',
            'py-3 px-5',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-600/80',

            // Misc
            'cursor-auto'
        ]
    },
    header: {
        class: [
            // Spacing
            'py-3 px-3',
            'm-0',

            //Shape
            'border-b',
            'rounded-tl-sm',
            'rounded-tr-sm',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-100 dark:bg-surface-800',
            'border-surface-300 dark:border-surface-600'
        ]
    },
    filtercontainer: {
        class: 'relative'
    },
    filterinput: (() => {
        const input = inputTextConfig.root({ props: {}, context: {}, parent: {} })
        input.class.push('w-full')
        return input
    })(),
    filtericon: {
        class: ['absolute', 'top-1/2', '-mt-2', 'right-3']
    },
    emptymessage: {
        class: [
            // Font
            'leading-none',

            // Spacing
            'py-3 px-5',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-transparent'
        ]
    }
};
