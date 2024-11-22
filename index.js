const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'eventDB';  // Replace with your database name
const collectionName = 'nudges'; // Replace with your collection name

// Define the Nudge Object Model using a simple JavaScript object
const nudgeObjectModel = {
  title: String,            // Title of the nudge (e.g., "Event Reminder")
  event_id: String,         // Reference to the event (ID of the event related to the nudge)
  image: String,            // URL or path to the image used as the cover for the nudge
  send_time: Date,          // The time when the nudge will be sent (ISO 8601 format)
  description: String,      // Detailed description of the nudge
  icon: String,             // URL or path to the icon for the nudge
  invitation_text: String,  // One-line invitation text shown when the nudge is minimized or displayed
  created_at: {             // Timestamp when the nudge was created
    type: Date,
    default: new Date()
  },
};

// MongoDB function to create a nudge
async function createNudge(nudgeData) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB
    await client.connect();
    
    // Access the database
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    // Insert the nudge data into MongoDB
    const result = await collection.insertOne(nudgeData);
    console.log('Nudge Created:', result.ops[0]);
    
    return result.ops[0];
  } catch (err) {
    console.error('Error creating nudge:', err);
  } finally {
    // Close the database connection
    await client.close();
  }
}

// Example usage: Creating a new nudge object
const sampleNudge = {
  title: "Exciting Event Reminder!",
  event_id: "60b1e1f6e4b0a2571c4e45a3",  // Sample event ID
  image: "http://example.com/event-cover.jpg",  // URL of the cover image
  send_time: new Date("2024-11-25T10:30:00Z"),  // Set send time
  description: "Don't miss out on our exciting event happening this weekend!",
  icon: "http://example.com/event-icon.png",  // URL of the icon
  invitation_text: "Join us for the fun and excitement!",  // One-line invitation text
};

// Call the function to insert a new nudge
createNudge(sampleNudge).then(result => {
  console.log('Nudge created successfully:', result);
});
