
# My Portfolio Website

## Overview

This repository contains the source code for my personal portfolio website built using Next.js and Tailwind CSS. The website showcases my projects, skills, and experiences, and includes a contact form powered by Resend Mail for seamless email communication.

## Features

- **Next.js**: Utilized for server-side rendering, static site generation, and routing.
- **Tailwind CSS**: Employed for styling and designing a responsive, modern UI.
- **Resend Mail**: Integrated for handling the contact form's email functionality.

## Sections

1. **Home**: A brief introduction and overview of my portfolio.
2. **About**: Details about my background, skills, and experiences.
3. **Projects**: A showcase of my projects with descriptions and links to their respective repositories.
4. **Contact**: A contact form for visitors to reach out to me directly via email.

## Technologies Used

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Email Service**: Resend Mail

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tabishkhan03/tabishkhan.git
   cd tabishkhan
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root of your project and add your environment variables:

   ```plaintext
   RESEND_API_KEY=your-resend-api-key
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website in action.

## Deployment

The website can be deployed on platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

### Vercel Deployment

1. Sign in to your Vercel account and import your GitHub repository.
2. Set the necessary environment variables in the Vercel dashboard.
3. Deploy your application.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
