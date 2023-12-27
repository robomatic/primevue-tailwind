import checkboxConfig from '../checkbox'

export default {
    root: checkboxConfig.root,
    checkbox: ({ props, context }) => checkboxConfig.input({ props, context: { checked: props.modelValue !== null } }),
    checkicon: checkboxConfig.icon,
    uncheckicon: {
        class: [
            // Font
            'text-base leading-none',

            // Size
            'w-4',
            'h-4',

            // Colors
            'text-white dark:text-surface-900',

            // Transitions
            'transition-all',
            'duration-200'
        ]
    }
};
