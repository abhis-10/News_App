
![Screenshot (37)](https://github.com/user-attachments/assets/a409ded4-ee5b-4f17-9a97-27993806f3c7)

News_App

A NewsApp is a dynamic application designed to fetch and display the latest news articles from various sources via APIs.

Built with React.js — this app shows news headlines, article details, and works with a news API (e.g., NewsAPI). You can use your own API key to get live news data.

### Features

 Fetches latest news articles via API
 Displays news in a user-friendly list
 View detailed article information
 Responsive UI built with React
 Sample output stored for testing

 ### Project Structure

 ```mermaid
    A[News_App] --> B[public]
    B --> B1[index.html]

    A --> C[src]
    C --> C1[components]
    C1 --> C1a[Reusable UI Components]

    C --> C2[pages]
    C2 --> C2a[Home Page]
    C2 --> C2b[News Details Page]

    C --> C3[services]
    C3 --> C3a[News API Service]

    C --> C4[styles]
    C4 --> C4a[CSS Files]

    C --> C5[App.js]
    C5 --> C2
    C5 --> C1
    C5 --> C3

    A --> D[sampleoutput.json]
    D --> D1[Mock API Response]

    A --> E[package.json]
    E --> E1[Dependencies & Scripts]

    A --> F[package-lock.json]
    A --> G[README.md]
    A --> H[.gitignore]
```
### Getting Started

-git clone https://github.com/abhis-10/News_App.git
-cd News_App
-npm install
-npm start

## Sample API Response

```json
{
  "status": "ok",
  "totalResults": 100,
  "articles": [
    {
      "source": { "id": null, "name": "Example.com" },
      "author": "Author Name",
      "title": "Article Title",
      "description": "Short description of the news",
      "url": "https://example.com/full-article",
      "urlToImage": "https://example.com/image.jpg",
      "publishedAt": "2026-01-01T12:00:00Z",
      "content": "Full article text"
    }
  ]
}
```


