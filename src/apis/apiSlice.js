import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  // tagTypes: ["Products"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/products",
      // providesTags: ["Products"],
    }),
    getCategury: builder.query({
      query: () => "/category",
    }),
    getSubCategory: builder.query({
      query: () => "/subcategory",
    }),
    getFilterCategory: builder.query({
      query: (id) => `/products?category=${id}`,
    }),
    getFilterProduct: builder.query({
      query: (id) => `/products?id=${id}`,
    }),
    getAdmin: builder.query({
      query: () => "/users?role=admin",
    }),
    addData: builder.mutation({
      query: (products) => ({
        url: "/products",
        method: "POST",
        body: products,
      }),
      // invalidatesTags: ["Products"],
    }),
    updateData: builder.mutation({
      query: (products) => ({
        url: `/products/${products.id}`,
        method: "PATCH",
        body: products,
      }),
      // invalidatesTags: ["Products"],
    }),
    deleteData: builder.mutation({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "DELETE",
        body: id,
      }),
      // invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetCateguryQuery,
  useGetSubCategoryQuery,
  useGetFilterCategoryQuery,
  useGetFilterProductQuery,
  useGetAdminQuery,
  useAddDataMutation,
  useDeleteDataMutation,
  useUpdateDataMutation,
} = productApi;
