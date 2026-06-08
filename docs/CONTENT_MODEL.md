# Content Model

This defines portfolio data. Backend/database should follow this. Frontend displays this only.

## Profile
```txt
name
slug
title
headline
shortBio
longBio
location
availability
email
avatarUrl
resumeUrl
```

## SocialLink
```txt
platform: github | linkedin | facebook | email | other
label
url
sortOrder
isVisible
```

## Project
```txt
title
slug
summary
description
category: website | app | frontend | fullstack | practice | client
status: planned | in_progress | completed | archived
isFeatured
thumbnailUrl
liveUrl
githubUrl
caseStudyUrl
startedAt
completedAt
sortOrder
isPublished
```

## ProjectImage
```txt
projectId
url
alt
sortOrder
```

## TechStackItem
```txt
name
category: frontend | backend | database | tools | design
level: learning | practicing | used_in_projects | daily_driver
summary
sortOrder
isVisible
```

## ProjectTechStack
```txt
projectId
techStackItemId
```

## Certificate
```txt
title
provider
category: frontend | backend | database | tools | design | web-development
issuedAt
credentialUrl
imageUrl
summary
sortOrder
isVisible
```

## ResumeFile
```txt
label
fileName
downloadUrl
version
isActive
```

## ContactMessage
```txt
name
email
projectType
message
status: new | read | replied | archived
createdAt
```

## Seed data rule
Seed data should be honest. Mark placeholders clearly until replaced.

Examples:
- `Sample Provider` is okay only during early development.
- Fake client names should not be presented as real work.
- Learning status should match actual skill level.
