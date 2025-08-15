# Lotion

A full-featured Notion clone built with Next.js, featuring real-time document editing, hierarchical organization, and modern UI components.

## ✨ Features

### 📝 Document Management

- **Rich Text Editor**: Block-based editor powered by BlockNote with full formatting capabilities
- **Hierarchical Structure**: Create nested documents with parent-child relationships
- **Real-time Collaboration**: Live document editing and updates
- **Document Publishing**: Share documents publicly with publish/unpublish functionality

### 🎨 Customization

- **Custom Icons**: Add emoji icons to documents using the icon picker
- **Cover Images**: Upload and set custom cover images for documents
- **Dark/Light Theme**: Toggle between dark and light modes with system preference detection

### 🗂️ Organization & Navigation

- **Sidebar Navigation**: Collapsible sidebar with document tree structure
- **Search Functionality**: Global search across all documents with command palette
- **Trash Management**: Archive and restore documents with recursive operations
- **Document Tree**: Expandable/collapsible document hierarchy

### 🔐 Authentication & Security

- **User Authentication**: Secure authentication powered by Clerk
- **User-specific Data**: Each user has their own private document workspace
- **Protected Routes**: Authenticated routes for document management

### 📱 User Experience

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Modern UI**: Clean, modern interface built with Radix UI components
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Loading States**: Proper loading indicators and skeletons

## 🛠️ Tech Stack

### Frontend

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Backend & Database

- **[Convex](https://www.convex.dev/)** - Backend-as-a-Service with real-time database
- **[Clerk](https://clerk.com/)** - Authentication and user management

### Editor & Media

- **[BlockNote](https://www.blocknotejs.org/)** - Block-based rich text editor
- **[EdgeStore](https://edgestore.dev/)** - File upload and storage service

### UI Components & Utils

- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State management
- **[React Dropzone](https://react-dropzone.js.org/)** - File upload component
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[CMDK](https://cmdk.paco.me/)** - Command palette component

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **pnpm**
- **Convex account** for backend services
- **Clerk account** for authentication
- **EdgeStore account** for file storage

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/lotion.git
   cd lotion
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   # Convex
   CONVEX_DEPLOYMENT=your_convex_deployment_url
   NEXT_PUBLIC_CONVEX_URL=your_convex_url

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # EdgeStore (File Upload)
   EDGE_STORE_ACCESS_KEY=your_edge_store_access_key
   EDGE_STORE_SECRET_KEY=your_edge_store_secret_key
   ```

4. **Set up Convex**

   ```bash
   npx convex dev
   ```

   This will set up your Convex backend and create the necessary database tables.

5. **Configure Clerk Authentication**

   - Create a new application in your [Clerk Dashboard](https://dashboard.clerk.com/)
   - Copy the publishable key and secret key to your `.env.local` file
   - Configure the allowed redirect URLs in Clerk dashboard

6. **Set up EdgeStore**

   - Create an account at [EdgeStore](https://edgestore.dev/)
   - Create a new project and get your access keys
   - Add the keys to your `.env.local` file

7. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

8. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
lotion/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Main application routes
│   │   ├── _components/          # Private route components
│   │   └── (routes)/            # Protected routes
│   ├── (marketing)/             # Public marketing pages
│   ├── api/                     # API routes
│   └── globals.css              # Global styles
├── components/                   # Reusable UI components
│   ├── modal/                   # Modal components
│   ├── providers/               # Context providers
│   └── ui/                      # UI component library
├── convex/                      # Backend logic and schema
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
└── public/                      # Static assets
```

## 🎯 Key Features Breakdown

### Document Editor

The editor is built with BlockNote, providing:

- Block-based editing similar to Notion
- Markdown support
- Rich formatting options
- Image and media embedding
- Real-time collaboration

### Database Schema

```typescript
// Document schema
{
  title: string,
  userId: string,
  isArchived: boolean,
  parentDocument?: documentId,
  content?: string,
  coverImage?: string,
  icon?: string,
  isPublished: boolean
}
```

### Authentication Flow

- Powered by Clerk for secure user authentication
- Protected routes for document management
- User-specific data isolation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Notion](https://notion.so) for the inspiration
- [BlockNote](https://www.blocknotejs.org/) for the amazing editor
- [Convex](https://www.convex.dev/) for the powerful backend
- [Clerk](https://clerk.com/) for authentication
- [Radix UI](https://www.radix-ui.com/) for accessible components

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/lotion](https://github.com/yourusername/lotion)

---

⭐ If you found this project helpful, please give it a star!
