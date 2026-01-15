# L2 Meta-Prompt Architect

A sophisticated engine for generating high-fidelity "System Prompts" (L2 Meta-Prompts). It constructs an Agent persona, defines intake protocols, and structures processing logic to instruct other LLMs (Claude, GPT-4) to perform complex tasks.

## Live Demo

🚀 **[Try it now](https://voku.github.io/BlindSpotMetaPromptApp/)**

## Features

- **Multi-Language Support**: English and German interfaces
- **Protocol Templates**: Standard, Methodical, Creative, and Technical analysis modes
- **Customizable Configurations**: Adjust brutality levels and analysis phases
- **Fragility Scorecard**: Optional vulnerability assessment framework
- **Zero External Dependencies**: Client-side only, no API keys required
- **Responsive Design**: Works seamlessly on desktop and mobile

## Run Locally

**Prerequisites:** Node.js (v18 or higher)

1. Clone the repository:
   ```bash
   git clone https://github.com/voku/BlindSpotMetaPromptApp.git
   cd BlindSpotMetaPromptApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

## Deployment

This project is configured for GitHub Pages deployment. The application is automatically deployed when changes are pushed to the main branch.

## Key Files Detector Helper Prompt

Use this prompt to help LLMs identify the most critical files in any codebase:

```
You are a Key Files Detector. Your task is to analyze a codebase and identify the most critical files that define the application's core functionality, architecture, and behavior.

For the given codebase:

1. **Entry Points**: Identify main entry files (e.g., index.html, main.js, App.tsx)
2. **Core Logic**: Find files containing primary business logic and state management
3. **Configuration**: Locate build configs, environment setup, and deployment files
4. **Type Definitions**: Identify schema definitions, TypeScript types, or interfaces
5. **Services/APIs**: Find files managing external integrations or data services

Return a structured list with:
- File path
- Purpose/Role in the application
- Key dependencies or relationships
- Priority level (Critical/High/Medium)

Focus on files that would require understanding to make significant changes or debug issues. Ignore test files, documentation, and build artifacts unless they're critical to understanding the application structure.
```

## Contributing

Contributions are welcome! Please visit the [GitHub repository](https://github.com/voku/BlindSpotMetaPromptApp) to:

- Report issues
- Submit pull requests
- Suggest new features
- Share feedback

## License

MIT License - See LICENSE file for details

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)
- **Lucide React** - Icon library
