# Blog Management Gantt

A simple Angular 19 repository demonstrating a Syncfusion Gantt chart for blog planning and resource tracking.

## Overview

This repository contains an Angular sample app that renders a Syncfusion Gantt chart with resource assignments, editable tasks, and progress tracking for blog production workflows.

## Features

- Syncfusion `@syncfusion/ej2-angular-gantt` integration
- Resource view with named team members
- Editable task operations for add, edit, delete, update, and cancel
- Nested task hierarchy with subtasks
- Task dependencies and progress tracking

## Dependencies

- Angular 19.2.16
- `@syncfusion/ej2-angular-gantt` 24.2.4
- `@syncfusion/ej2-material-theme` 24.2.4

## Prerequisites

- Node.js installed
- npm installed

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open the app in a browser:

```text
http://localhost:4200
```

## Scripts

- `npm start` — starts `ng serve`
- `npm run build` — builds the production output
- `npm run watch` — builds continuously in development mode
- `npm test` — runs unit tests with Karma

## Notes

- The Gantt chart uses `ResourceView` and maps resources via `resourceFields`.
- Task fields include `TaskID`, `BlogName`, `StartDate`, `EndDate`, `Duration`, `Progress`, `Predecessor`, and `resources`.
- The app includes sample blog planning tasks with resource allocation.
