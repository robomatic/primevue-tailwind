import buttonConfig from '../button';

export default {
    root: {
        class: [
            // Flexbox
            'flex lg:flex-row flex-col',
        ],
    },
    sourcecontrols: {
        class: [
            // Flexbox & Alignment
            'flex lg:flex-col justify-center gap-2',

            // Spacing
            'p-5',
        ],
    },
    sourcemoveupbutton: buttonConfig,
    sourcemovetopbutton: buttonConfig,
    sourcemovedownbutton: buttonConfig,
    sourcemovebottombutton: buttonConfig,
    sourcewrapper: {
        class: 'grow shrink basis-2/4',
    },
    sourceheader: {
        class: [
            'font-bold',

            // Shape
            'border-b-0 rounded-t-md',

            // Spacing
            'p-5',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-50 dark:bg-surface-800',
            'border border-surface-200 dark:border-surface-700',
        ],
    },
    sourcelist: {
        class: [
            // Spacing
            'list-none m-0 p-0',

            // Size
            'min-h-[12rem] max-h-[24rem]',

            // Shape
            'rounded-b-md',

            // Color
            'text-surface-600 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-800',
            'border border-surface-200 dark:border-surface-700',

            // Spacing
            'py-3 px-0',

            // Focus & Outline
            'outline-none',

            // Misc
            'overflow-auto',
        ],
    },
    item: ({ context }) => ({
        class: [
            // Position
            'relative',

            // Spacing
            'py-3 px-5 m-0',

            // Shape
            'border-none',

            // Transition
            'transition duration-200',

            // Color
            'text-surface-700 dark:text-white/80',
            { 'bg-primary-500/20 dark:bg-primary-300/20': context.active && !context.focused },
            { 'bg-primary-500/30 dark:bg-primary-400/30': context.active && context.focused },
            { 'bg-surface-100 dark:bg-surface-700/70': !context.active && context.focused },

            // State
            'hover:bg-surface-100 dark:hover:bg-surface-700',

            // Misc
            'cursor-pointer overflow-hidden',
        ],
    }),
    buttons: {
        class: 'flex lg:flex-col justify-center gap-2 p-5',
    },
    movetotargetbutton: buttonConfig,
    movealltotargetbutton: buttonConfig,
    movetosourcebutton: buttonConfig,
    movealltosourcebutton: buttonConfig,
    targetcontrols: {
        class: 'flex lg:flex-col justify-center gap-2 p-5',
    },
    targetmoveupbutton: buttonConfig,
    targetmovetopbutton: buttonConfig,
    targetmovedownbutton: buttonConfig,
    targetmovebottombutton: buttonConfig,
    targetwrapper: {
        class: 'grow shrink basis-2/4',
    },
    targetheader: {
        class: [
            'font-bold',

            // Shape
            'border-b-0 rounded-t-md',

            // Spacing
            'p-5',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-50 dark:bg-surface-800',
            'border border-surface-200 dark:border-surface-700',
        ],
    },
    targetlist: {
        class: [
            // Spacing
            'list-none m-0 p-0',

            // Size
            'min-h-[12rem] max-h-[24rem]',

            // Shape
            'rounded-b-md',

            // Color
            'text-surface-600 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-800',
            'border border-surface-200 dark:border-surface-700',

            // Spacing
            'py-3 px-0',

            // Focus & Outline
            'outline-none',

            // Misc
            'overflow-auto',
        ],
    },
    transition: {
        enterFromClass: '!transition-none',
        enterActiveClass: '!transition-none',
        leaveActiveClass: '!transition-none',
        leaveToClass: '!transition-none',
    },
};
