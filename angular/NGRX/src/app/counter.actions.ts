import { createAction } from "@ngrx/store";

export const increment = createAction('[counterComponent] Icrement')
export const decrement = createAction('[counterComponent] Decrement')
export const reset = createAction('[counterComponent] Reset')