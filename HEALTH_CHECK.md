Health Check Script

A comprehensive health check script for the portfolio codebase that verifies all critical components, configurations, and dependencies.

Usage

Run the health check script:

```bash
npm run health-check
```

Or directly:

```bash
node health-check.js
```

What It Checks

✅ File Structure
- Verifies all required component files exist
- Checks for configuration files (package.json, tsconfig.json, tailwind.config.js)
- Validates directory structure

✅ Dependencies
- Checks that all critical dependencies are installed:
  - Next.js
  - React & React DOM
  - next-themes (for theme toggle)
  - framer-motion (for animations)
  - lucide-react (for icons)

✅ Configuration
- **TypeScript**: Verifies tsconfig.json exists and paths are configured
- **Tailwind CSS**: Checks dark mode configuration and cyber color palette
- **Theme Setup**: Validates ThemeProvider configuration in layout.tsx

✅ Component Integrity
- Verifies all main components exist (Navbar, Hero, About, Skills, Projects, Contact, Footer)
- Checks critical imports (useTheme, framer-motion)
- Validates theme toggle component setup

✅ Build & Lint
- Attempts to build the project
- Runs linting checks (non-critical)

Output

The script provides:
- ✅ **Passed checks** (green) - Everything working correctly
- ⚠️ **Warnings** (yellow) - Non-critical issues or optional features
- ✗ **Issues** (red) - Critical problems that need attention

Exit Codes

- `0` - All critical checks passed
- `1` - Issues found that need attention

Example Output

```
═══════════════════════════════════════
  Portfolio Health Check
═══════════════════════════════════════

✓ Passed: 32
⚠ Warnings: 2
✗ Issues: 0

✓ All critical checks passed!
```

When to Run

Run the health check:
- After cloning the repository
- Before deploying
- After major dependency updates
- When troubleshooting issues
- As part of CI/CD pipeline (optional)

Notes

- Build check may take a few minutes
- Some warnings are expected (e.g., logo file if using text logo)
- ESLint configuration warnings are non-critical

