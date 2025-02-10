import axiosInstance from '../config/axios';

import { handleError } from '../utils/handleError';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';

export const getProducts = async (filters) => {
    try {
        let { limit, page, category, q, sort } = filters;
        limit = limit || NUMBER_ITEM_PER_PAGE;

        let url = `/products?limit=${limit}`;
        if (page) url += `&page=${page}`;
        if (category) url += `&category=${category}`;
        if (q) url += `&q=${q}`;
        if (sort || sort !== 'default') url += `&sort=${sort}`;

        const res = await axiosInstance.get(url);
        const data = res?.data;
        if (data?.stauts) delete data.status;
        return data;
    } catch (error) {
        handleError(error, 'Lấy sản phẩm thất bại');
    }
};

export const getProductBySlug = async ({ slug }) => {
    try {
        if (!slug) throw new Error("slug can't be empty");
        const url = `/products/${slug}`;
        const res = await axiosInstance.get(url);
        const product = res?.data?.product;

        //rewrite attributes
        if (product?.attributes) {
            const groupedAttributes = Object.values(
                product.attributes.reduce((acc, item) => {
                    const key = item.attrName; // Group by attrName
                    if (!acc[key]) {
                        acc[key] = { type: key, data: [] };
                    }
                    acc[key].data.push({
                        addPrice: item.addPrice,
                        attrValue: item.attrValue,
                        productAttributeId: item.productAttributeId,
                    });
                    return acc;
                }, {}),
            );
            product.attributes = groupedAttributes;
        }

        return product;
    } catch (error) {
        handleError(error, 'Lấy sản phẩm thất bại');
    }
};
