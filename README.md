# spp-sekolahala Monorepo

This repository hosts the in-progress migration of the original Laravel-based SPP Sekolah application to a modern JavaScript stack. The target architecture is a monorepo that contains:

- **apps/api** – Express + Sequelize service that mirrors every Laravel controller and business rule.
- **apps/web** – React single-page application built with Vite that recreates the Livewire experience page-for-page.
- **packages/config** – Shared linting and formatting configuration (Airbnb ESLint + Prettier) together with husky/lint-staged presets.
- **packages/tsconfig** – Reserved for shared TypeScript configuration (to be populated once TypeScript is introduced).

## Immediate Roadmap

1. Scaffold base tooling and workspace layout (this commit).
2. Establish Sequelize models, migrations, and seed data reflecting the legacy schema.
3. Implement authentication, RBAC middleware, and stub controllers.
4. Port business logic, reports, receipts, and exports to match Laravel behaviour exactly.
5. Build the React SPA with route parity, feature-by-feature.
6. Finalise automated tests, documentation, and onboarding assets.

Progress will be committed in small, verifiable steps to maintain clarity and traceability.
