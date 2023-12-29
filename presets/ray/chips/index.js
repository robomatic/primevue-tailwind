import chipConfig from '../chip'
import autocompleteConfig from '../autocomplete';

export default {
    root: autocompleteConfig.root,
    container: autocompleteConfig.container,
    inputtoken: autocompleteConfig.inputtoken,
    input: {
        class: ['p-0 w-full outline-none shadow-none rounded-none ring-none bg-transparent border-0'] 
    },
    token: chipConfig.root.class.push('-my-1') && chipConfig.root,
    removeTokenIcon: chipConfig.removeIcon,
    label: {
        class: 'leading-6 mx-0'
    },
};
