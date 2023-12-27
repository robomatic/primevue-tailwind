export default {
    root: ({ props }) => ({
        class: [
            'overflow-hidden',
            {
                'animate-pulse': props.animation !== 'none'
            },

            // Round
            { 'rounded-full': props.shape === 'circle', 'rounded-sm': props.shape !== 'circle' },

            // Colors
            'bg-surface-200 dark:bg-surface-700'
        ]
    })
};
