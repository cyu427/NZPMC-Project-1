# Cedric Yu

![alt text](image.png)

To run the server:
```bash
cd backend
npm install
npm run dev
```

To run the client:
```bash
cd frontend
npm install
npm run dev
```

## Enviroment Variables
- backend/.env:
  - MONGODB_URI="mongodb+srv://fullstack:c40ddkzprUdwWUPE@nzpmc-project-1.qja9v.mongodb.net/?retryWrites=true&w=majority&appName=nzpmc-project-1"

  
## System Design

Backend: 
- index.ts: Handles base API routing and initializes the MongoDB connection.
- routes/: Contains router files grouped by category, making it easy to differentiate and access different APIs.
- controller/: Contains the logic for handling API requests and responses.
- model/: Defines the MongoDB database schemas

Frontend:
- App.tsx: Manages routing for the three main pages:
  - /: Landing page (not signed in)
  - /sign-in: Landing page (signed in)
  - /admin: Admin page
- src/queries: Contains all Axios requests for connecting the backend with the frontend. All sorted by the categories like user, evevnt, so its easy to find and use
- src/schema: 
  - formValidation: Uses Zod for form input validation (e.g., register, login, create event) to ensure correct data format and simplify error messaging.
  - apiDataValidation: Validates the data received from the backend to ensure it’s in the correct format.
- src/provider:
  - AuthProvider: Tracks user login state and stores the userId of the logged-in user to manage database operations.
  - RegisterProvider: Manages the multi-step form for registration, tracking user inputs and navigation.
  - SignProvider: Functions similarly to RegisterProvider, handling sign-in logic.
  - ResetPasswordProvider: Similar to RegisterProvider, but the feature was not completed in time.
- src/hooks and src/context: Manages the state and logic for the above providers
  - useSearch.ts: Manages filtering logic for a search bar used in a table UI.
- src/pages: Contains the React components for the three main pages: AdminPage, LandingPage, and LandingPageSignedIn.
- src/components: Includes all reusable UI components.

## Key Decisions
- Low Level:
  - TypeScript: Used for static typing to reduce compile-time errors when handling data between the frontend and backend.
  - Email Services: Planned to implement email verification (6-digit code) during account registration, but this feature was not completed due to time constraints. The UI includes a placeholder input for the verification code, allowing users to enter a random 6-digit code. 
  - Zod Validation: Chose Zod for runtime type validation to prevent typing errors during execution. 
- High Level:
  - Rich Text Editor: Implemented a rich text editor for event descriptions, allowing users to add bold text, large titles, and underlined content.
  - Event Costs: Incorporated a cost field for events, particularly for paid events like competitions. However, the feature to calculate event prices after applying scholarships (based on school EQI) was not completed. Additionally, integration with Stripe for payment processing was not implemented due to time limitations.
  - Admin is able to edit event details, as it would be normal in real life for event details and logistics to changes


