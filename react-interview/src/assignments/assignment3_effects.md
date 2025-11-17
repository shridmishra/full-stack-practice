# Assignment 3 — Effects, Data Fetching & Custom Hooks

Topics covered:
- useEffect and effect dependencies
- Fetch API and async/await patterns
- Cleanup, cancellation and avoiding state updates on unmounted components
- Building a small custom hook (useFetch)

References:

- useEffect: https://reactjs.org/docs/hooks-effect.html
- Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

Tasks (implement in `src/assignments/assignment3_effects.jsx`):
- DataFetcher({ url }) — component that fetches and renders state (loading/error/data)
- useFetch(url) — custom hook returning { data, loading, error }

Hints:
- Use a cancellation flag or AbortController to avoid calling setState after unmount.
- Keep the hook generic so it can be reused by other components.
