export const NumberFormat = (n: number) => {
    if (n >= 1000000000) {
        return (n / 1000000000).toFixed(1) + "M";
    } else if (n >= 1000000) {
        return (n / 1000000).toFixed(1) + "jt";
    } else if (n >= 1000) {
        return (n / 1000).toFixed(1) + "rb";
    } else {
        return n;
    }
};
