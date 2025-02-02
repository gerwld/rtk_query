import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3501" }),  // Fixed base URL spacing
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: '/todos',
                method: "POST",
                body: todo
            }),
        }),  // Added missing comma and closing brace for addTodo
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: "PATCH",
                body: todo
            })
        }),
        deleteTodo: builder.mutation({
            query: ({ id }) => ({
                url: `/todos/${id}`,
                method: "DELETE",
                body: id
            })
        })
    })
});

export const {
    useGetTodosQuery,
    useDeleteTodoMutation,
    useUpdateTodoMutation,
    useAddTodoMutation
} = apiSlice;
