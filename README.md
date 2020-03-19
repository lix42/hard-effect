# Lessons

1. To avoid unnecessary `useEffect` calling, use `useRef`.
2. Prefer not update state at `useEffect`
   1. If `useEffect` updates state, then the order of `useEffect` matters, writing first, reading later.
3. Avoid reading and writing the same state from one `useCallback`.
   1. If needed, read state from `useRef`.
4. Prefer to define util function inside `useEffect` scope.
5. If `useEffect` depends on function, ensure the function won't change.
   1. If `useEffect` depending on a mutable function, use `useRef`.
6. use `useLocalState` or `useDerivedState` if it matches the requirement.
7. If multiple `useEffect` exists and depending on each other, replace it with class component.
8. Migrate from `enzyme` to `react-testing-library`.
