//Helper functions for components (mostly string formatting)

export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const fieldNameToString = (string) => string.split('_').map(capitalize).join(' ')