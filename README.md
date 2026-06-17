# HCC Line Chart — RAWGraphs Custom Chart

This repository contains a custom line chart implementation (`hcc-line-chart`) built for **RAWGraphs**. It includes the source code for the chart package and a local clone of the RAWGraphs application (`rawgraphs-app`) to test and preview the chart dynamically.

---

## 📂 Repository Structure

*   **`hcc-line-chart/`**: The core package containing the chart logic.
    *   `src/hcc_line_chart/`: Contains the definition (`metadata.js`, `visualOptions.js`, `mapping.js`, `dimensions.js`) and the D3 execution logic (`render.js`).
    *   `bundler/`: Bundler configurations to build the standalone code.
*   **`rawgraphs-app/`**: A local environment of the RAWGraphs core app used to validate, load, and test your custom chart alongside standard configurations.

---

## 🛠️ Getting Started

### 1. Prerequisites
Make sure you have Node.js and `yarn` installed on your machine.

### 2. Installation
Install the dependencies for all the packages:

```bash
# Install hcc-line-chart package dependencies
cd hcc-line-chart
yarn install

# Install rawgraphs-charts package dependencies
cd ../rawgraphs-charts
yarn install

# Install rawgraphs-app dependencies
cd ../rawgraphs-app
yarn install
```

### 3. Development and Building the Chart
To compile your custom chart into a single bundle that RAWGraphs can read, run the build pipeline:

```bash
cd hcc-line-chart
yarn build
```
This generates the distribution bundle in folder named `lib` where you will find four files.The one named `hcc_line_chart.umd.js` is the bundle that can be loaded by RAWGraphs. You can rename it as you prefer.

**OR**

Integrate it with local version of rawgraphs-app and use it locally. To do this: Copy the custom chart files `hcc-line-chart\src\hcc_line_chart` to charts package `rawgraphs-charts\src\hcc_line_chart` then,

```bash
# Build rawgraphs-charts
cd ../rawgraphs-charts
yarn build

# Create link to rawgraphs-charts
yarn link

# Use the link with rawgraphs-app
yarn link "@rawgraphs/rawgraphs-charts" 
```

### 4. Running the Test Application
To see your custom line chart in action within the RAWGraphs interface:

```bash
cd rawgraphs-app
yarn start
```
This will spin up a local development server.

---

## 🎨 Chart Customization Guide

If you need to make changes to the layout or options of the chart, modify the following files inside `hcc-line-chart/src/hcc_line_chart/`:

*   **`metadata.js`**: Set the chart title, description, category, and icon thumbnail.
*   **`mapping.js`**: Define the data dimensions (e.g., X-axis, Y-axis, Series/Groups) that users map their columns to.
*   **`visualOptions.js`**: Define exposed configuration controls (e.g., line thickness, colors, grid lines, labels).
*   **`render.js`**: The main D3.js script where coordinates are calculated and SVG elements are explicitly drawn or updated.

---

## 📄 License
This project is licensed under the terms specified in the [LICENSE](LICENSE) file.
