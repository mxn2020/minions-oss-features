# minions-oss-features

**Feature backlog, daily picks, implementation plans, and acceptance criteria**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-oss-features/sdk minions-sdk

# Python
pip install minions-oss-features

# CLI (global)
npm install -g @minions-oss-features/cli
```

---

## CLI

```bash
# Show help
oss-features --help
```

---

## Python SDK

```python
from minions_oss_features import create_client

client = create_client()
```

---

## Project Structure

```
minions-oss-features/
  packages/
    core/           # TypeScript core library (@minions-oss-features/sdk on npm)
    python/         # Python SDK (minions-oss-features on PyPI)
    cli/            # CLI tool (@minions-oss-features/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [oss-features.minions.help](https://oss-features.minions.help)
- Blog: [oss-features.minions.blog](https://oss-features.minions.blog)
- App: [oss-features.minions.wtf](https://oss-features.minions.wtf)

---

## License

[MIT](LICENSE)
