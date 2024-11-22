# Nudge System API Documentation
---
## Base URL:
http://localhost:3000/api/v1
---

---
## Authentication:
This API may require authentication, typically JWT or OAuth, to access certain endpoints.

## Endpoints:
---
### 1. Create a Nudge
- **Method**: `POST /nudges`
---
- **Description**: 
Allows a user to create a new nudge associated with an event.
---
- **Request Payload**:
```json
{
  "event_id": "ObjectId",
  "title": "Sample Nudge Title",
  "image": "imagePath",
  "send_time": "2024-11-25T10:30:00Z",
  "description": "This is a description of the nudge.",
  "icon": "iconUrl",
  "invitation_text": "Join us for this amazing event!"
}
```
---
Response:
```json

{
  "message": "Nudge created successfully",
  "nudge_id": "ObjectId"
}
```

Status Codes:
201 Created, 400 Bad Request

---
### 2. Get All Nudges
Method: GET /nudges
Description: Retrieves all nudges in the system.
Query Parameters:
page: Optional, default: 1
limit: Optional, default: 10
---
Response:
```json

{
  "nudges": [
    {
      "event_id": "ObjectId",
      "title": "Sample Nudge Title",
      "image": "imagePath",
      "send_time": "2024-11-25T10:30:00Z",
      "description": "This is a description of the nudge.",
      "icon": "iconUrl",
      "invitation_text": "Join us for this amazing event!",
      "created_at": "2024-11-20T08:00:00Z"
    },
    
  ]
}
```

Status Codes:
 200 OK, 500 Internal Server Error

---

### 3. Get a Specific Nudge
Method: GET /nudges/{id}
Description: Retrieves a specific nudge by its ID.

---

Response:
```json

{
  "event_id": "ObjectId",
  "title": "Sample Nudge Title",
  "image": "imagePath",
  "send_time": "2024-11-25T10:30:00Z",
  "description": "This is a description of the nudge.",
  "icon": "iconUrl",
  "invitation_text": "Join us for this amazing event!",
  "created_at": "2024-11-20T08:00:00Z"
}
```

Status Codes:
 200 OK, 404 Not Found

---

### 4. Update a Nudge
Method: PUT /nudges/{id}
Description: Updates an existing nudge.

---

Request Payload:
```json

{
  "title": "Updated Nudge Title",
  "image": "updatedImagePath",
  "send_time": "2024-11-26T10:30:00Z",
  "description": "Updated description of the nudge.",
  "icon": "updatedIconUrl",
  "invitation_text": "Updated invitation text!"
}
```

---

Response:
```json

{
  "message": "Nudge updated successfully",
  "nudge_id": "ObjectId"
}
```

Status Codes:
 200 OK, 404 Not Found, 400 Bad Request
 
---


 ### 5. Delete a Nudge
Method: DELETE /nudges/{id}
Description: Deletes a nudge based on the ID.
Response:
```json
Copy code
{
  "message": "Nudge deleted successfully",
  "nudge_id": "ObjectId"
}
```

 Status code:
 200 OK, 404 Not Found

---
Example Workflow:
Create a Nudge
User creates a new nudge with a title, description, event ID, image, send time, and invitation text by sending a POST request to /nudges.

Get All Nudges
User fetches all created nudges by sending a GET request to /nudges.

Get a Specific Nudge
User retrieves a specific nudge based on its ID by sending a GET request to /nudges/{id}.

Update a Nudge
User updates the title, image, description, or other fields by sending a PUT request to /nudges/{id}.

Delete a Nudge
User deletes a specific nudge by sending a DELETE request to /nudges/{id}.


