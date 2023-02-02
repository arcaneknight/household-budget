export const saveMonths = (months) => {
    localStorage.setItem('months', JSON.stringify(months));
};

export const loadMonths = () => {
    let months = [];
    const monthsAsString = localStorage.getItem('months');
    if (monthsAsString && monthsAsString.length > 0) {
        months = JSON.parse(monthsAsString);
    }
    return months;
}

export const saveSelectedMonth = (id) => {
    localStorage.setItem('selected_month', id);
}

export const loadSelectedMonth = () => {
    return localStorage.getItem('selected_month');
}