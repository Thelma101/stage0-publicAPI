## Description
This is a simple API built with Node.js and Express.js that returns basic information including your registered email, current datetime, and GitHub URL of the project.

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Thelma101/stage0-publicAPI.git
   
## API Documentation
- **Endpoint:** `GET /api/v1/info`
- **Response Format:**
  ```json
  {
    "email": "your-email@example.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/yourusername/your-repo"
  }

## Curl
  curl -X GET https://stage0-publicapi-production.up.railway.app/api/v1/info

## Backlink
- [HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)
