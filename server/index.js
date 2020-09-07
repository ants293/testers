const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
