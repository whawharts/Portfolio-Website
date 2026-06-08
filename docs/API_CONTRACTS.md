# API Contracts

Base URL local:

```txt
http://localhost:3000/api
```

## Shared success response
```json
{
  "success": true,
  "data": {},
  "message": "Optional"
}
```

## Shared error response
```json
{
  "success": false,
  "message": "Readable message",
  "errors": []
}
```

Validation errors use the same shape and include field-level details:

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": [
    { "field": "email", "message": "Email must be a valid email address." }
  ]
}
```

## GET /health
Returns server status.

```json
{
  "success": true,
  "data": { "status": "ok" }
}
```

## GET /profile
Returns profile, about content, availability, and socials.

```json
{
  "success": true,
  "data": {
    "name": "Joseph Sotomil",
    "title": "Web Developer",
    "headline": "Building clean websites and useful web apps.",
    "location": "Philippines",
    "availability": "Open for portfolio websites and landing pages",
    "socialLinks": []
  }
}
```

## GET /projects
Query params:
```txt
category=website|app|frontend|fullstack|practice|client
featured=true|false
limit=number
```

Returns published projects sorted by priority then newest.

## GET /projects/:slug
Returns one published project by slug.

## GET /certificates
Query params:
```txt
category=frontend|backend|database|tools|design|web-development
```

Returns certificates sorted by issued date descending.

## GET /tech-stack
Returns grouped tech stack items.

```json
{
  "success": true,
  "data": [
    {
      "category": "Frontend",
      "items": [
        { "name": "React", "level": "Learning", "priority": 1 }
      ]
    }
  ]
}
```

## GET /resume
Returns resume metadata.

```json
{
  "success": true,
  "data": {
    "label": "Resume",
    "fileName": "Joseph-Sotomil-Resume.pdf",
    "downloadUrl": "/resume/Joseph-Sotomil-Resume.pdf"
  }
}
```

## POST /contact
Request:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "projectType": "portfolio",
  "message": "I want a portfolio website."
}
```

Validation:
- name required, 2 to 100 chars
- email required, valid email
- projectType required
- message required, 10 to 2000 chars

Success:
```json
{
  "success": true,
  "data": { "id": "message_id" },
  "message": "Message received."
}
```
