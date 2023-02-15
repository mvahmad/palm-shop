import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/products",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Products"],
    }),
    getCategury: builder.query({
      query: () => "/category",
    }),
    getSubCategory: builder.query({
      query: () => "/subcategory",
    }),
    getFilterCategory: builder.query({
      query: (name) => `/products?category=${name}`,
    }),
    getFilterProduct: builder.query({
      query: (id) => `/products?id=${id}`,
    }),

    getSearchProduct: builder.query({
      query: (value) => `/products?q=${value}`,
    }),
    getAdmin: builder.query({
      query: () => "/users?role=admin",
    }),
    getOrders: builder.query({
      query: (id) => `orders?_page=${id}&_limit=7`,
    }),

    getListProduct: builder.query({
      query: (id) => `products?_page=${id}&_limit=7`,
    }),
    getLength: builder.query({
      query: () => "/products",
      transformResponse: (response) => {
        return response.length;
      },
    }),

    getCardlength: builder.query({
      query: () => "/card",
    }),
    addOrder: builder.mutation({
      query: (products) => ({
        url: "/orders",
        method: "POST",
        body: products,
      }),
    }),
    addData: builder.mutation({
      query: (products) => ({
        url: "/products",
        method: "POST",
        body: products,
      }),
      invalidatesTags: ["Products"],
    }),
    addCardData: builder.mutation({
      query: ({ products, isExist, length }) => ({
        url: check(length, isExist, Number(products.id)),
        method: check2(length, isExist),
        body: products,
      }),
    }),

    updateData: builder.mutation({
      query: (products) => ({
        url: `/products/${products.id}`,
        method: "PATCH",
        body: products,
        headers: {
          token: `${JSON.parse(localStorage.getItem("login")).token}`,
          contentType: "application/json",
        },
      }),
      invalidatesTags: ["Products"],
    }),
    updateOrder: builder.mutation({
      query: (products) => ({
        url: `/orders/${products.id}`,
        method: "PATCH",
        body: products,
      }),
    }),
    deleteData: builder.mutation({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "DELETE",
        body: id,
        headers: {
          token: `${JSON.parse(localStorage.getItem("login")).token}`,
          contentType: "application/json",
        },
      }),

      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetCateguryQuery,
  useGetSubCategoryQuery,
  useGetFilterCategoryQuery,
  useGetFilterProductQuery,
  useGetSearchProductQuery,
  useGetCardlengthQuery,
  useGetOrdersQuery,
  useGetLengthQuery,
  useGetListProductQuery,
  useGetAdminQuery,
  useAddOrderMutation,
  useAddDataMutation,
  useAddCardDataMutation,
  useDeleteDataMutation,
  useUpdateDataMutation,
  useUpdateOrderMutation,
} = productApi;

function check(length, isExist, product) {
  if (length === 0) {
    return "/card";
  } else if (isExist === false) {
    return "/card";
  } else if (isExist === true) {
    return `/card/${product}`;
  }
}

function check2(length, isExist) {
  if (length === 0) {
    return "POST";
  } else if (isExist === false) {
    return "POST";
  } else if (isExist === true) {
    return "PATCH";
  }
}
