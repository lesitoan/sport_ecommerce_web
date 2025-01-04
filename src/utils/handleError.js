export const handleError = (error, message) => {
    if (error.status === 500) {
        throw new Error('Hiện tại máy chủ có lỗi xảy ra, vui lòng thử lại sau !');
    } else {
        throw new Error(message);
    }
};
