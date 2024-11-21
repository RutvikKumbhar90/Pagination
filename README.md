# Pagination Components for React

This repository contains two React components for implementing product pagination. The components allow users to view products in a paginated format, with the ability to navigate between pages using buttons and page numbers.

## Components

1. **Simple Pagination**
2. **Pagination with Controls**

### 1. Simple Pagination

The **SimplePagination** component implements basic pagination, displaying a list of products and allowing the user to navigate between pages using the previous and next buttons or by clicking on the page numbers.

#### Features:
- Displays products fetched from an API.
- Basic pagination with previous and next buttons.
- Page numbers are displayed and can be clicked to navigate between pages.
- Fetches products from `https://dummyjson.com/products/?limit=194` and paginates them in chunks of 12 per page.

#### How It Works:
- **State Variables**:
  - `products`: Stores the fetched products.
  - `page`: Tracks the current page.
  - `totalPages`: Stores the total number of pages (calculated based on total products).
- **Key Functions**:
  - **`fetchProducts`**: Fetches product data from the API.
  - **`selectedPageHandler`**: Handles page selection and updates the current page.

### 2. Pagination with Controls

The **PaginationWithControls** component introduces more sophisticated pagination with range controls. It displays a range of pages (e.g., 1-10, 11-20) and includes "Previous" and "Next" buttons for navigating between ranges.

#### Features:
- Displays products fetched from an API.
- Pagination includes range controls to navigate between page groups (e.g., 1-10, 11-20).
- Previous and Next buttons for navigating through page ranges.
- Fetches products from `https://dummyjson.com/products/?limit=12&skip=<skipValue>`, adjusting the `skip` value based on the current page.
- Products are paginated in chunks of 12 per page.

#### How It Works:
- **State Variables**:
  - `products`: Stores the fetched products.
  - `page`: Tracks the current page.
  - `totalPages`: Stores the total number of pages.
  - `pageRange`: Defines the visible page range (e.g., 1-10, 11-20).
- **Key Functions**:
  - **`fetchProducts`**: Fetches product data based on the current page and updates the state.
  - **`selectPageHandler`**: Handles page selection within the current visible range.
  - **`updatePageRange`**: Updates the visible range of pages.
  - **`goToNextRange`** and **`goToPreviousRange`**: Navigate between page ranges.

## Installation

1. Clone the repository or copy the relevant component files into your React project.
2. Install `react-router-dom` for routing functionality:
   ```bash
   npm install react-router-dom
