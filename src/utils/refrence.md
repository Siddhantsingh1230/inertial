# Utils

The `utils` folder contains various utility functions used across the application. These utility functions serve specific purposes and are designed to provide common functionality that can be reused throughout the codebase.

List of Utilities

### 1. `Mode.js`

- **Purpose**: This utility function is responsible for checking the system mode (Light mode or Dark mode) and returning the appropriate mode.
- **File**: `Mode.js`
- **Description**: The `checkSystemMode()` function checks the system mode stored in the localStorage and returns the appropriate mode (true for Dark mode, false for Light mode). If the mode is not set in the localStorage, it checks the user's preferred color scheme using `window.matchMedia` and sets the mode accordingly.The `changeLocalSystemMode()` function allows changing the system mode stored in the localStorage.

- **`checkSystemMode()`**
  ```javascript
  import { checkSystemMode } from "../utils/CheckMode.js";
  const mode = checkSystemMode(); // Returns true for Dark mode, false for Light mode
  ```
- **`changeLocalSystemMode()`**
  ```javascript
  import { changeLocalSystemMode } from "../utils/ChangeLocalSystemMode.js";
  changeLocalSystemMode(true); // Sets the system mode to Dark mode
  ```
