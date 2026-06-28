# POS Management System

A modern point-of-sale management system built with React, TypeScript, and Vite. This project focuses on a secure and user-friendly authentication system with email/password-based login, registration, password reset, and comprehensive form validation.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Pages & Routes](#pages--routes)
- [Reusable Components](#reusable-components)
- [Form Validation](#form-validation)
- [Security Features](#security-features)

## Features

### Authentication System

- ✅ **User Login** - Secure email and password authentication
- ✅ **User Registration** - New user account creation with password confirmation
- ✅ **Forgot Password** - Email-based password reset flow
- ✅ **Reset Password** - Secure password update with validation
- ✅ **Form Validation** - Real-time validation with disabled submit buttons until requirements are met
- ✅ **reCAPTCHA v2** - Bot protection on login and registration
- ✅ **Password Visibility Toggle** - Users can show/hide password while typing
- ✅ **Toast Notifications** - User-friendly feedback with React Toastify

### User Experience

- 🎨 **Responsive Design** - Mobile-friendly forms with Tailwind CSS
- 🔐 **Password Requirements** - Minimum 8 characters for reset passwords
- 👁️ **Eye Icon Toggle** - Show/hide password with React Icons
- ♿ **Accessible Forms** - Proper labels and semantic HTML

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Form Validation:** Custom validation logic
- **Notifications:** React Toastify
- **Icons:** React Icons (FiEye, FiEyeOff)
- **reCAPTCHA:** Google reCAPTCHA v2
- **Dev Server:** Vite HMR

## Project Structure

```
src/
├── components/
│   ├── Button.tsx          # Reusable button with variants (primary, success, danger)
│   └── Input.tsx           # Reusable input with password visibility toggle
├── pages/
│   ├── Home.tsx            # Landing page with navigation links
│   ├── Login.tsx           # Login page with email/password
│   ├── Register.tsx        # Registration page with confirmation
│   ├── ForgotPassword.tsx  # Password recovery initiation
│   └── ResetPassword.tsx   # Password reset form with token
├── App.tsx                 # Router configuration
├── main.tsx                # React entry point
└── index.css               # Global styles
```

## Installation & Setup

### Prerequisites

- Node.js 16+ and npm

### Install Dependencies

```bash
npm install
```

### Install Additional Packages

All required packages are already included, but if needed:

```bash
# React Router
npm install react-router

# Toast Notifications
npm install react-toastify

# Icons
npm install react-icons

# reCAPTCHA
npm install react-google-recaptcha @types/react-google-recaptcha

# Tailwind CSS (already configured)
npm install -D tailwindcss postcss autoprefixer
```

## Development

### Start Dev Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Lint Code

```bash
npm run lint
```

## Pages & Routes

| Route              | Component      | Description                       |
| ------------------ | -------------- | --------------------------------- |
| `/`                | Home           | Landing page with auth navigation |
| `/login`           | Login          | User login with email/password    |
| `/register`        | Register       | New user registration             |
| `/forgot-password` | ForgotPassword | Initiate password reset           |
| `/reset-password`  | ResetPassword  | Complete password reset           |

## Reusable Components

### Button Component

Centralized button component with multiple variants and disabled state support.

**Props:**

- `variant?: "primary" | "success" | "danger"` - Button color theme
- `fullWidth?: boolean` - Full width button (default: true)
- `disabled?: boolean` - Disable button and show visual feedback
- All standard HTML button attributes

**Usage:**

```jsx
import Button from "../components/Button";

<Button variant="primary" type="submit" disabled={!isFormValid}>
  Sign in
</Button>

<Button variant="success">Confirm</Button>

<Button variant="danger" fullWidth={false}>Delete</Button>
```

### Input Component

Reusable input field with integrated password visibility toggle.

**Props:**

- `label?: string` - Label text displayed above input
- `type?: string` - Input type (text, email, password, etc.)
- `containerClassName?: string` - Additional classes for container
- All standard HTML input attributes

**Features:**

- Auto-detects password type and shows eye icon
- Click eye icon to toggle password visibility
- Consistent styling with primary focus ring
- Optional label support

**Usage:**

```jsx
import Input from "../components/Input";

<Input
  label="Email address"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="you@example.com"
  containerClassName="mb-4"
/>

<Input
  label="Password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  containerClassName="mb-6"
/>
```

## Form Validation

### Login Page

- Email is required and must be valid format
- Password is required (no minimum length on login)
- reCAPTCHA must be verified
- Button disabled until all requirements met

### Registration Page

- Email is required and must be valid format
- Password is required (any length)
- Confirm password must match password
- reCAPTCHA must be verified
- Button disabled until all requirements met

### Forgot Password Page

- Email is required and must be valid format
- Button disabled until email is provided

### Reset Password Page

- New password must be at least 8 characters
- Confirm password must match new password
- Button disabled until both passwords meet requirements

## Security Features

### reCAPTCHA Protection

- Google reCAPTCHA v2 integrated on Login and Register pages
- Prevents automated bot attacks
- Currently using test site key (replace with production key)

**To use in production:**

1. Get your site key and secret from [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Replace test key in Login.tsx and Register.tsx:

```jsx
sitekey = "YOUR_PRODUCTION_SITE_KEY";
```

3. Validate on backend using the reCAPTCHA token

### Password Visibility

- Users can toggle password visibility with eye icon
- Helps users verify they've typed correctly
- Improves accessibility and user experience

### Form Validation

- Real-time validation feedback
- Submit buttons disabled until all requirements met
- Prevents premature form submission
- Password matching validation before submission

### Notifications

- Toast notifications for all user actions
- Clear error messages for validation failures
- Success messages on successful operations

## Authentication Flow

### Login Flow

```
1. User enters email and password
2. User verifies reCAPTCHA
3. All fields valid → Sign in button enabled
4. User clicks Sign in
5. Success toast shown
6. User navigated to home page
```

### Registration Flow

```
1. User enters email, password, and confirmation
2. Password must match confirmation
3. User verifies reCAPTCHA
4. All fields valid → Create account button enabled
5. User clicks Create account
6. Success toast shown
```

### Password Reset Flow

```
1. User enters email on Forgot Password page
2. Clicks "Send reset link"
3. User navigated to reset page with email query param
4. User enters new password (min 8 chars)
5. Passwords must match
6. Validation complete → Update password button enabled
7. Click Update password
8. Success message shown
9. User redirected to login page
```

## Styling

The project uses Tailwind CSS with a custom color scheme:

- **Primary Color:** Used for main actions (login, register buttons)
- **Success Color:** Used for confirmation actions (reset password)
- **Danger Color:** Used for destructive actions (delete)
- **Background:** Light success/primary shade for form containers

### Theme Configuration

Colors are defined in Tailwind config and applied via utility classes:

```jsx
className = "bg-primary hover:bg-primary-dark text-white";
className = "bg-success hover:bg-green-600 text-white";
className = "bg-danger hover:bg-red-600 text-white";
```

## Development Guide

### Adding a New Page

1. Create a new component in `src/pages/`:

```jsx
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const NewPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-success/20 px-4">
			{/* Content */}
		</div>
	);
};

export default NewPage;
```

2. Add route to `App.tsx`:

```jsx
import NewPage from "./pages/NewPage";

const router = createBrowserRouter([
	// ... existing routes
	{
		path: "/new-page",
		element: <NewPage />,
	},
]);
```

### Using Toast Notifications

```jsx
import { toast } from "react-toastify";

// Success notification
toast.success("Operation successful!", {
	position: "bottom-center",
	autoClose: 3000,
});

// Error notification
toast.error("Something went wrong!", {
	position: "bottom-center",
});

// Info notification
toast.info("FYI: Information message", {
	position: "bottom-center",
});
```

### Form Validation Pattern

```jsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isValid, setIsValid] = useState(false);

// Validation logic
const isFormValid = email && password && password.length >= 8;

// Use in button
<Button type="submit" disabled={!isFormValid}>
	Submit
</Button>;
```

## File Reference

| File                 | Purpose                            |
| -------------------- | ---------------------------------- |
| `src/App.tsx`        | Main router and app structure      |
| `src/main.tsx`       | React DOM render and entry point   |
| `src/index.css`      | Global styles and Tailwind imports |
| `src/App.css`        | App-specific styles                |
| `vite.config.ts`     | Vite configuration                 |
| `tsconfig.json`      | TypeScript configuration           |
| `tailwind.config.js` | Tailwind CSS theme config          |
| `package.json`       | Dependencies and scripts           |

## Future Enhancements

- [ ] Backend API integration for authentication
- [ ] JWT token management
- [ ] Remember me functionality
- [ ] Two-factor authentication (2FA)
- [ ] Social login (Google, GitHub, etc.)
- [ ] Email verification flow
- [ ] Account dashboard
- [ ] User profile management
- [ ] Session management
- [ ] Password strength meter
- [ ] Rate limiting on failed attempts
- [ ] Biometric authentication

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue in the repository.

import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```
# pos-management
```
