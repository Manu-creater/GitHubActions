
const { test } = require("node:test");
const assert = require("node:assert");
const createServer = require("../server");

test("Server responds with the correct message", async () => {

    const server = createServer();

    await new Promise((resolve) => {
        server.listen(0, resolve);
    });

    try {
        const port = server.address().port;

        const response = await fetch(`http://localhost:${port}`);

        const message = await response.text();

        assert.strictEqual(response.status, 200);

        assert.strictEqual(
            message,
            "Hello from my Node.js server!"
        );

    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }

});
