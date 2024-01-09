import checkboxConfig from '../checkbox';

export default {
    root: checkboxConfig.root,
    checkbox: ({ props }) => checkboxConfig.input({ props, context: { checked: props.modelValue !== null } }),
    checkicon: checkboxConfig.icon,
    uncheckicon: checkboxConfig.icon,
};
