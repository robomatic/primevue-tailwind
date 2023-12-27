import checkboxConfig from '../checkbox'
import listboxConfig from '../listbox'
import autocompleteConfig from '../autocomplete';
import inputTextConfig from '../inputtext';

export default {
    root: autocompleteConfig.container,
    labelContainer: {
        class: 'overflow-hidden flex flex-auto cursor-pointer '
    },
    token: {
        class: [
            // Flex
            'inline-flex items-center',

            // Spacings
            'py-0.5 px-3',

            // Shape
            'rounded-full',

            // Colors
            'bg-surface-200 dark:bg-surface-700',
            'text-surface-700 dark:text-white/70',

            // Misc
            'cursor-default'
        ]
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
    trigger: {
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',
            'absolute',
            'right-1 top-1/2 -translate-y-1/2',

            // Color and Background
            'bg-transparent',
            'text-surface-500',

            // Size
            'w-8',

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
    header: {
        class: [
            'flex items-center justify-between',
            // Spacing
            'py-3 px-5',
            'm-0',

            //Shape
            'border-b',
            'rounded-tl-sm',
            'rounded-tr-sm',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-100 dark:bg-surface-800',
            'border-surface-300 dark:border-surface-700'
        ]
    },
    headerCcheckboxContainer: checkboxConfig.root,
    headerCheckbox: ({ context, state }) => checkboxConfig.input({ props: {}, context: { checked: context?.selected, focused: state.focused } }),
    headercheckboxicon: checkboxConfig.icon,
    closeButton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'flex items-center justify-center',

            // Size and Spacing
            'mr-2',
            'last:mr-0',
            'w-8 h-8',

            // Shape
            'border-0',
            'rounded-full',

            // Colors
            'text-surface-500',
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset',
            'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Misc
            'overflow-hidden'
        ]
    },
    closeButtonIcon: {
        class: 'w-4 h-4 inline-block'
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
            'overflow-auto'
        ]
    },
    list: {
        class: 'py-0 list-none m-0'
    },
    label: {
        class: 'flex flex-wrap gap-2'
    },
    item: listboxConfig.item,
    checkboxContainer: checkboxConfig.root,
    checkbox: ({ context }) => checkboxConfig.input({ props: {}, context: { checked: context.selected } }),
    checkboxicon: checkboxConfig.icon,
    itemgroup: {
        class: [
            //Font
            'font-bold',

            // Spacing
            'm-0',
            'p-3 px-5',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-600/80',

            // Misc
            'cursor-auto'
        ]
    },
    filtercontainer: {
        class: 'relative w-full mx-2'
    },
    filterinput: ({ state }) => inputTextConfig.root({ props: { value: state.filterValue }, context: {} }),
    filtericon: {
        class: ['absolute', 'top-1/2', '-mt-2', 'right-4']
    },
    clearicon: {
        class: [
            // Color
            'text-surface-500',

            // Position
            'absolute',
            'top-1/2',
            'right-12',

            // Spacing
            '-mt-2'
        ]
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
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
