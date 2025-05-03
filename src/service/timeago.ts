export const timeago = (dateString: string) => {
    const date: any = new Date(dateString);

    const now: any = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return "baru saja";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} menit lalu`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} jam lalu`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} hari lalu`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} minggu lalu`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} bulan lalu`;
    const years = Math.floor(days / 365);
    return `${years} tahun lalu`;
};
