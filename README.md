# 📏 Metric/Imperial Unit Converter

A simple, interactive unit converter that allows users to convert between metric and imperial units for **length**, **volume**, and **mass** in real time. Built using HTML, CSS, and JavaScript with a clean, responsive UI.

## 🔧 Features

- ✅ Converts **length** between meters and feet
- ✅ Converts **volume** between liters and gallons
- ✅ Converts **mass** between kilograms and pounds
- ✅ Bi-directional conversion (e.g., meters ↔ feet)
- ✅ Intuitive interface with real-time output
- ✅ Responsive design for both desktop and mobile

## 📁 File Structure

### `index.html`
- Contains the UI structure:
  - Input field for number
  - Button to trigger conversion
  - Result display sections for each unit category

### `index.css`
- Provides all styles for layout and visuals:
  - Gradient header area
  - Stylish input box and button
  - Result cards with clear separation
  - Modern, minimalist fonts and spacing

### `index.js`
- Contains the logic for:
  - Reading the user input
  - Validating and parsing input
  - Performing unit conversions with fixed conversion rates
  - Dynamically rendering the results

## 🚀 How to Use

1. Open the app in your browser.
2. Enter a number in the input field (e.g., `10`).
3. Click the **Convert** button.
4. View the converted values for:
   - Meters ↔ Feet
   - Liters ↔ Gallons
   - Kilograms ↔ Pounds

## 📐 Conversion Rates Used

| Metric ↔ Imperial | Conversion Rate |
|-------------------|-----------------|
| 1 meter = 3.281 feet | |
| 1 liter = 0.264 gallons | |
| 1 kilogram = 2.204 pounds | |

## 🧠 Example

**Input:** `10`  
**Output:**
- 10 meters = 32.810 feet | 10 feet = 3.048 meters  
- 10 liters = 2.640 gallons | 10 gallons = 37.879 liters  
- 10 kilos = 22.040 pounds | 10 pounds = 4.537 kilos
