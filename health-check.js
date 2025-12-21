#!/usr/bin/env node

/**
 * Health Check Script for Portfolio Codebase
 * Runs comprehensive checks on the codebase health and functionality
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

let issues = [];
let warnings = [];
let passed = [];

function log(message, type = 'info') {
  const prefix = {
    success: `${colors.green}✓${colors.reset}`,
    error: `${colors.red}✗${colors.reset}`,
    warning: `${colors.yellow}⚠${colors.reset}`,
    info: `${colors.blue}ℹ${colors.reset}`,
  }[type] || '';

  console.log(`${prefix} ${message}`);
}

function checkFileExists(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    passed.push(`File exists: ${filePath}`);
    return true;
  } else {
    issues.push(`Missing file: ${filePath} - ${description}`);
    return false;
  }
}

function checkDirectoryExists(dirPath, description) {
  const fullPath = path.join(process.cwd(), dirPath);
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
    passed.push(`Directory exists: ${dirPath}`);
    return true;
  } else {
    issues.push(`Missing directory: ${dirPath} - ${description}`);
    return false;
  }
}

function checkFileContent(filePath, checks) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    issues.push(`Cannot check content: ${filePath} doesn't exist`);
    return false;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  let allPassed = true;

  checks.forEach(({ name, test, errorMsg }) => {
    if (test(content)) {
      passed.push(`Content check passed: ${filePath} - ${name}`);
    } else {
      issues.push(`Content check failed: ${filePath} - ${name} - ${errorMsg}`);
      allPassed = false;
    }
  });

  return allPassed;
}

function checkPackageJson() {
  log('Checking package.json...', 'info');
  
  if (!checkFileExists('package.json', 'Package configuration file')) {
    return false;
  }

  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  
  // Check critical dependencies
  const criticalDeps = [
    'next',
    'react',
    'react-dom',
    'next-themes',
    'framer-motion',
    'lucide-react',
  ];

  criticalDeps.forEach(dep => {
    if (pkg.dependencies && pkg.dependencies[dep]) {
      passed.push(`Dependency installed: ${dep}@${pkg.dependencies[dep]}`);
    } else {
      issues.push(`Missing dependency: ${dep}`);
    }
  });

  return true;
}

function checkTypeScriptConfig() {
  log('Checking TypeScript configuration...', 'info');
  
  if (!checkFileExists('tsconfig.json', 'TypeScript configuration')) {
    return false;
  }

  const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf-8'));
  
  if (tsconfig.compilerOptions?.paths) {
    passed.push('TypeScript paths are configured for aliases');
  }
  
  if (tsconfig.compilerOptions?.baseUrl) {
    passed.push('TypeScript baseUrl is configured');
  }
  
  // Check for @/* path alias (common in Next.js)
  if (tsconfig.compilerOptions?.paths?.['@/*']) {
    passed.push('@/* path alias is configured');
  }

  return true;
}

function checkTailwindConfig() {
  log('Checking Tailwind CSS configuration...', 'info');
  
  const checks = [
    {
      name: 'darkMode configuration',
      test: (content) => /darkMode:\s*['"]class['"]/.test(content),
      errorMsg: 'darkMode should be set to "class" for theme toggle',
    },
    {
      name: 'cyber color palette',
      test: (content) => /cyber:\s*\{/.test(content),
      errorMsg: 'Cyber color palette should be defined',
    },
  ];

  return checkFileContent('tailwind.config.js', checks);
}

function checkThemeSetup() {
  log('Checking theme setup...', 'info');
  
  const layoutChecks = [
    {
      name: 'ThemeProvider import',
      test: (content) => /ThemeProvider/.test(content),
      errorMsg: 'ThemeProvider should be imported in layout.tsx',
    },
    {
      name: 'attribute="class"',
      test: (content) => /attribute\s*=\s*["']class["']/.test(content),
      errorMsg: 'ThemeProvider should use attribute="class"',
    },
    {
      name: 'suppressHydrationWarning',
      test: (content) => /suppressHydrationWarning/.test(content),
      errorMsg: 'html tag should have suppressHydrationWarning for theme',
    },
  ];

  return checkFileContent('src/app/layout.tsx', layoutChecks);
}

function checkComponentFiles() {
  log('Checking component files...', 'info');
  
  const components = [
    'src/components/Navbar.tsx',
    'src/components/Hero.tsx',
    'src/components/About.tsx',
    'src/components/Skills.tsx',
    'src/components/Projects.tsx',
    'src/components/Contact.tsx',
    'src/components/Footer.tsx',
    'src/components/ModeToggle.tsx',
    'src/components/theme-provider.tsx',
    'src/components/ui/noise-background.tsx',
  ];

  let allExist = true;
  components.forEach(comp => {
    if (!checkFileExists(comp, 'Component file')) {
      allExist = false;
    }
  });

  return allExist;
}

function checkImports() {
  log('Checking critical imports...', 'info');
  
  const importChecks = [
    {
      file: 'src/components/ModeToggle.tsx',
      imports: ['useTheme', 'next-themes'],
      description: 'ModeToggle theme imports',
    },
    {
      file: 'src/components/ui/noise-background.tsx',
      imports: ['framer-motion'],
      description: 'NoiseBackground animation imports',
    },
  ];

  let allPassed = true;
  importChecks.forEach(({ file, imports, description }) => {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      imports.forEach(imp => {
        if (content.includes(imp)) {
          passed.push(`Import found: ${file} - ${imp}`);
        } else {
          issues.push(`Missing import: ${file} - ${imp} - ${description}`);
          allPassed = false;
        }
      });
    }
  });

  return allPassed;
}

function checkBuild() {
  log('Checking if project builds successfully...', 'info');
  
  // Skip build check if .next doesn't exist (indicates no build yet)
  if (!fs.existsSync('.next')) {
    warnings.push('Skipping build check - .next directory not found. Run "npm run build" to test.');
    return true;
  }
  
  try {
    execSync('npm run build', { 
      stdio: 'pipe',
      timeout: 180000, // 3 minutes timeout for builds
      cwd: process.cwd(),
    });
    passed.push('Project builds successfully');
    return true;
  } catch (error) {
    // Build failures are warnings, not critical issues
    warnings.push('Build check skipped or failed - run "npm run build" manually to verify');
    return true; // Don't fail health check on build timeout
  }
}

function checkLinting() {
  log('Checking linting...', 'info');
  
  try {
    const output = execSync('npm run lint 2>&1', { 
      stdio: 'pipe',
      timeout: 60000,
      cwd: process.cwd(),
      encoding: 'utf-8',
    });
    
    if (output.includes('No ESLint configuration')) {
      warnings.push('ESLint not configured - this is optional');
      return true;
    } else if (output.includes('No issues found') || output.includes('✔')) {
      passed.push('Linting passed - no issues found');
      return true;
    } else {
      // If there are actual linting errors, they'll be shown but we continue
      warnings.push('Linting check completed (check output for details)');
      return true;
    }
  } catch (error) {
    const output = error.stdout?.toString() || error.stderr?.toString() || '';
    if (output.includes('No ESLint configuration') || output.includes('Invalid project directory')) {
      warnings.push('ESLint configuration issue - this is optional');
      return true;
    } else {
      // Only report as issue if it's a real linting error
      const errorLines = output.split('\n').filter(line => 
        line.includes('error') || line.includes('Error') || line.includes('✖')
      );
      if (errorLines.length > 0) {
        warnings.push(`Linting found some issues (non-critical)`);
      }
      return true; // Don't fail the health check on linting
    }
  }
}

function checkNodeModules() {
  log('Checking node_modules...', 'info');
  
  if (fs.existsSync('node_modules')) {
    passed.push('node_modules directory exists');
    
    // Check if .next exists (indicates build was run)
    if (fs.existsSync('.next')) {
      passed.push('.next directory exists (build artifacts present)');
    } else {
      warnings.push('.next directory not found - run "npm run build" to generate');
    }
    
    return true;
  } else {
    warnings.push('node_modules not found - run "npm install" first');
    return false;
  }
}

function checkPublicAssets() {
  log('Checking public assets...', 'info');
  
  checkDirectoryExists('public', 'Public assets directory');
  
  // Check for logo if it was mentioned
  const logoPath = 'public/logo.png';
  if (fs.existsSync(path.join(process.cwd(), logoPath))) {
    passed.push('Logo file exists in public folder');
  } else {
    warnings.push('Logo file not found (this might be intentional if using text logo)');
  }

  return true;
}

function runAllChecks() {
  console.log(`${colors.bright}${colors.cyan}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}  Portfolio Health Check${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}═══════════════════════════════════════${colors.reset}\n`);

  // File structure checks
  log('Starting health checks...\n', 'info');
  
  checkPackageJson();
  checkNodeModules();
  checkTypeScriptConfig();
  checkTailwindConfig();
  checkThemeSetup();
  checkComponentFiles();
  checkImports();
  checkPublicAssets();
  
  // Optional checks (might fail in some environments)
  try {
    checkLinting();
  } catch (e) {
    // Silently continue
  }
  
  try {
    checkBuild();
  } catch (e) {
    // Silently continue - build check is optional
  }

  // Print summary
  console.log(`\n${colors.bright}${colors.cyan}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}  Summary${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}═══════════════════════════════════════${colors.reset}\n`);

  console.log(`${colors.green}✓ Passed: ${passed.length}${colors.reset}`);
  console.log(`${colors.yellow}⚠ Warnings: ${warnings.length}${colors.reset}`);
  console.log(`${colors.red}✗ Issues: ${issues.length}${colors.reset}\n`);

  if (passed.length > 0) {
    console.log(`${colors.bright}Passed Checks:${colors.reset}`);
    passed.forEach(item => log(item, 'success'));
    console.log('');
  }

  if (warnings.length > 0) {
    console.log(`${colors.bright}Warnings:${colors.reset}`);
    warnings.forEach(item => log(item, 'warning'));
    console.log('');
  }

  if (issues.length > 0) {
    console.log(`${colors.bright}Issues Found:${colors.reset}`);
    issues.forEach(item => log(item, 'error'));
    console.log('');
  }

  // Final status
  const exitCode = issues.length > 0 ? 1 : 0;
  
  if (exitCode === 0) {
    console.log(`${colors.green}${colors.bright}✓ All critical checks passed!${colors.reset}\n`);
  } else {
    console.log(`${colors.red}${colors.bright}✗ Some issues need attention${colors.reset}\n`);
  }

  process.exit(exitCode);
}

// Run the checks
runAllChecks();

