import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk for fetching book data
export const searchBook = createAsyncThunk('searchBook/searchBook', async (searchTerm) => {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${searchTerm}`
    );
    const data = await response.json();
    return data.docs;
});

// Define the slice
export const searchBookSlice = createSlice({
    name: 'searchBook',
    initialState: {
        books: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchBook.pending, (state) => {
            state.loading = true;
            state.books = [];
        });
        builder.addCase(searchBook.fulfilled, (state, action) => {
            state.books = action.payload;
            state.loading = false;
        });
        builder.addCase(searchBook.rejected, (state, action) => {
            state.error = action.error;
            state.loading = false;
        });
    }
});
export default searchBookSlice.reducer;