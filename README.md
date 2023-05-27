# tree-visualization

<!-- ![image](https://github.com/sskanishk/tree-visualization/assets/29313203/40108925-91d2-47a8-9d86-bbc8c7e44101) -->
![image](https://github.com/sskanishk/tree-visualization/assets/29313203/8fd18b0c-6b8b-4814-804b-3228e316e5e2)


This project demonstrates the visualization of a binary tree using HTML, CSS, and React. It allows you to input an array of nodes in a comma-separated format and renders the binary tree structure on the screen. When you click on a leaf node, it highlights all its ancestor nodes up to the root.

## Setup
To run this project, follow these steps:

Make sure you have Node.js installed on your machine.

Clone the project repository to your local machine.

Open a terminal and navigate to the project directory.

Install the project dependencies by running the command: **npm install**.

Start the development server by running the command: **npm start**.

Open your web browser and visit http://127.0.0.1:5173/ to see the application running.


## Usage

On the application screen, you will see an input field where you can enter the nodes of the binary tree. The nodes should be provided as a comma-separated array.

After entering the nodes, click the "Generate Tree" button to render the binary tree structure.

The binary tree will be displayed on the screen, with nodes arranged in a hierarchical structure.

To highlight the ancestors of a leaf node, simply click on that node. The color of the node and its ancestors up to the root will change, indicating the highlighting effect.


## Technology Stack
This project is built using the following technologies:

React: A JavaScript library for building user interfaces.

HTML: The standard markup language for creating web pages.

CSS: A stylesheet language used for styling web pages.

The React components and CSS stylesheets are used to structure and style the binary tree visualization.

## Project Structure
The project structure is organized as follows:

* src: Contains the source code files.
  * components: Contains React components used for building the application.
  * styles: Contains CSS stylesheets for styling the components.
  * App.js: The main component that renders the application.
  * index.js: The entry point of the application.
  * Tree: Contains JSX components specific to different types of trees.
    * BinaryTree.jsx: JSX component for rendering a binary tree.
  * helpers: Contains utility functions and helper methods.
    * generatehtml.js: Utility functions for generating HTML, traversing trees, etc.
  * logic: Contains logic implementations for different types of trees.
    * BinaryTree.js: Logic implementation for a binary tree.
