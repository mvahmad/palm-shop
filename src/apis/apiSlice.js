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

    addData: builder.mutation({
      query: (products) => ({
        url: "/products",
        method: "POST",
        body: products,
      }),
      invalidatesTags: ["Products"],
    }),
    addCardData: builder.mutation({
      query: (products) => ({
        url: "/card",
        method: "POST",
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
  useGetOrdersQuery,
  useGetLengthQuery,
  useGetListProductQuery,
  useGetAdminQuery,
  useAddDataMutation,
  useAddCardDataMutation,
  useDeleteDataMutation,
  useUpdateDataMutation,
} = productApi;
