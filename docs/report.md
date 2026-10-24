## Summary

I created a **Textarea component** in the React Vite app on branch `feature/button-component`.

### Changes made

**1. `src/components/Textarea.jsx`** (new file)
A reusable `Textarea` component with:
- Four styling variants: `primary`, `secondary`, `danger`, `ghost`
- Full `value`, `onChange`, `disabled`, `placeholder`, `rows` props
- Standard spread props (`...props`) for HTML attributes like `name`, `id`, `required`, etc.
- Disabled opacity/cursor styling
- Focus ring styles matching the existing Button component design system

**2. `src/App.jsx`** (updated)
Imports and demonstrates the Textarea with:
- A `primary` variant textarea bound to state
- A `danger` variant textarea bound to the same state
- Display of the current textarea value

### Verification
- Commit on `feature/button-component`: `68b53c5f5f30752c3bbc1e02404b6dc46fc28114` (pushed)
- Agent state/memory updated on `agent-state`: `a1c760e8493c2bbec74efd8f46e88313560cd371` (pushed)

### Notes
- Tests and build could not be run (no code execution capability in this environment).
- The component follows the same design patterns and Tailwind conventions as the existing `Button` component.
