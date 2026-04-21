# Blog Management Gantt

**Repository Description**

Blog Management Gantt is a sample Angular application that shows how to plan and visualize blog production workflows using the Syncfusion Angular Gantt component.

## Overview

This repository demonstrates the Syncfusion Gantt chart for blog planning, content scheduling, and basic resource tracking. It presents a resource‑based timeline to organize blog activities such as writing, review, and publishing, focused purely on frontend visualization.

## Features

- Resource view with named team members
- Editable tasks (add, edit, delete, update, cancel)
- Parent and child task hierarchy
- Task dependencies and progress tracking

## Dependencies

- Angular v19 or later
- `@syncfusion/ej2-angular-gantt`
- Syncfusion Material theme

## Prerequisites

- Node.js (LTS or later)
- npm

## Installation

Install dependencies and start the development server using the Angular CLI workflow:

- `npm install`
- `npm start`

Open the application at `http://localhost:4200`.

## Gantt Configuration Details

The Gantt runs in Resource View mode. Tasks represent blog items and resources represent team members. Configuration uses `resourceFields` with common task properties such as TaskID, BlogName, StartDate, EndDate, Duration, Progress, and Predecessor.

## Intended Use

This repository serves as a reference for editorial workflow planning, Angular resource‑based Gantt configuration, and non‑project management use cases with Syncfusion Gantt.
