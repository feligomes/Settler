
# Settlement Simulation App

This is a small app that simulates the settlement between two parties to reach an agreement on a price. It was built as an example of different technologies and based on a technical challenge.

## Deployment

The app is deployed on Vercel and can be tested at this URL: [Settlement System](https://settlersystem.vercel.app/)

## Running Locally

To run the application locally, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Running Tests

The application comes with tests that can be run using:
```bash
npm run test
```

## Important Considerations

- **Admin Screen**: The app shows a screen similar to what an admin would see, allowing them to see the simulated screens of both Party A and Party B. This was done to showcase the interaction between the parties and how each one updates in a different way.

- **Screens**: If this was a real application the view of both Party A and B would have been independent. Still the code is reusable as it is and could manage showing only one Party but that would make the testing of the app harder.
  
- **Real-Time Updates**: Party B receives updates in real time, but Party A needs to select the option to "Refresh" to get the latest info. This follows the requirements of the challenge.

- **Data Storage**: The app uses Redux for data storage, meaning that when there is a reload, everything starts fresh. In a real scenario, this would be linked to a database or API to get the latest info.

- **Web Sockets**: In a real scenario, web sockets would have been used to get real-time updates as well.

- **Timeframe**: The challenge was completed within 4 hours, so the number of features was limited.

-  **Components Library**: Since the job description mentioned Ant Design I went ahead an implemented most of the UI using it. It was my first time using it, have much more experience with Material UI. Again in a real case scenario more components reutilization would have been made and a custom theme or customized library would have been used.  

## Future Improvements

- **Login System**: Add a login for the different parties and show a different UI based on the logged-in users.

- **Persistent Data**: Make the data persistent using a database and a small API.

- **Additional Screens**: Add extra screens such as a catalog where Party A could select products to offer.

- **Checkout Process**: Implement a checkout process after the price is agreed upon.

- **Components Refactor**: There is a lot of room for improvements in the components, a lot of the code of Party A and party B is similar and with more time I would have tried something more modular and reusable.



