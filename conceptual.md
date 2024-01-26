### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

Stands for JsonWebToken. A token on json format to ensuree security on information over HTTP.

- What is the signature portion of the JWT?  What does it do?

It's like a signature from the server to guarantee the given token it's from the same server. It combine with the header and the payload to hash all of them, which generates the token.

- If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, header and payload are coded, not encrypted. That means a simple decoder software could see the content. Signature ensures data can not be changed, but not impossible to visualize.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

The user sends a request to create an account or to login. If the login/creating is successful, a JWT is created on the server side using a secret key that only the server knows.  The payload in the JWT contains something that will uniquely identify the user (like a user id).  The client must save the token somehow.  Typical ways to save the token are in local storage or as a cookie.  To make an authenticated request, the client must provide the token as specified by the server.  Typically the token is sent in a header called Authorization.  The server will then verify the token. To verify, the server take the header and payload and tries to sign that data using the secret key.  If the signature in the token matches the signature presented, then the token is verified. The server then looks inside the payload of the token to get the unique identifier for the user to figure out which user has been authenticated.


- Compare and contrast unit, integration, and end-to-end tests.

Unit tests are inexpensive, quick, and isolate units. They offer less coverage but are easily maintainable. Integration tests focus on unit interactions, are more time-consuming, cover more code, but are somewhat brittle. End-to-end tests cover the entire user experience, providing comprehensive coverage but are brittle.

- What is a mock? What are some things you would mock?

A mock is a simulated version, commonly used in unit testing. It can replace functions, libraries, or modules, such as HTTP calls, the file system module, impure functions like Math.random, or even a database.

- What is continuous integration?

Continuous Integration (CI) involves deploying small code pieces frequently, enabling quick iteration. It ensures tests pass before deployments occur.

- What is an environment variable and what are they used for?

An environment variable is a variable accessible by multiple applications in an environment. It is used for secrecy (not exposed if .env is in .gitignore) and universal accessibility across the entire environment.

- What is TDD? What are some benefits and drawbacks?

Test-Driven Development (TDD) is a testing philosophy where tests are written first, code is adjusted to pass tests, and the process is repeated. Benefits include a solid test suite from the start, but drawbacks include a potentially time-consuming and inefficient development process.

- What is the value of using JSONSchema for validation?

JSONSchema allows for more specific validation than coding everything in JS. It prevents unreadable code with numerous if-else statements and allows for standardization in validation.

= What are some ways to decide which code to test?

Target complex code prone to bugs due to complexity. Prioritize testing frequently used code for broader coverage.

- What are some differences between Web Sockets and HTTP?

Web Sockets maintain open connections for real-time communication, suitable for collaborative environments with lower overhead than HTTP.

- Did you prefer using Flask over Express? Why or why not (there is no right answer here - we want to see how you think about technology)?

Right now i started to like more about Express, i think the syntax is easier and more logical to what we are doing in the general context of the application.