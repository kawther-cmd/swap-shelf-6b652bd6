<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project structure (Swap Shelf)

- Routing uses TanStack Router file routes in `src/routes` (one file per page); route files stay thin and render components from `src/components/<area>/` so team members can work on areas independently.
- Book data shapes live in `src/types/book.js` (JSDoc typedefs); sample data in `src/data/`; swap the data source there without touching components.
- All book filtering and sorting goes through `src/lib/book-filters.js` (`getVisibleBooks`); the book list and favorites live in React state via `useBooks`; home page filter state (`q`, `category`, `sort`) lives in the URL search params so the navbar search and category buttons share it.
- No backend or real authentication: Login/Register are frontend-only forms validated by `src/lib/login-validation.js` / `register-validation.js` that show a toast.
- The app frame (Navbar, footer, toasts) is `AppLayout`, rendered once in `src/routes/__root.jsx` around `<Outlet />`; page links come only from `src/components/layout/nav-links.js` so the navbar and footer stay in sync.
- Book covers without an image are drawn by `BookCover` from the `--cover-N` tokens in `src/styles.css`.
- JavaScript only (`.js`/`.jsx`, no `.ts`/`.tsx`, no TypeScript packages): the team asked for a plain-JS codebase; `jsconfig.json` holds editor path settings.
- `src/routeTree.gen.js` is generated with `disableTypes`; TanStack Start still appends a type-only footer, which `route-tree-js-plugin.js` strips in Vite, the dependency pre-scan and Vitest — keep it registered in all three.
