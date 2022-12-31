# Full stack app dev with Node.js
## Workflows
<ol>

<li>Install dependencies:
<code>npm i</code>

<li>Run the express server:
<code>npm run dev:server</code>

<li>Verify it works: Go to another terminal window:
<code>curl localhost:3000</code>. The terminal window should say: 
        <em>`hello python!`</em>

<li>Deploy to Raspberry Pi
    <ol>
        <li><a href="https://medium.com/frontendweb/install-node-js-latest-version-on-raspberry-pi-4-14012ec93901">Install node.js on RBP</a>
        <li> Make a deploy folder on your RBP 
        <li> Copy both <code>dist</code> and <code>src</code> folders over. Note: only the Python script is needed.
        <li>Install the <em>"external"</em> dependencies in your deploy folder: <code>npm i express</code>
        <li>Run the server: <code>node dist/server.js</code>
        <li>Verify it works: See above.
    </ol>
</li>
 
</ol>

## Sources
- [Learning full-stack JavaScript development | Samer Buna | LinkedIn](https://www.linkedin.com/learning/learning-full-stack-javascript-development-mongodb-node-and-react-15581237/learning-full-stack-javascript-development?autoplay=true&resume=false&u=67553434)
- [Webpack Javascript Bundling for Both Front-end and Back-end (nodejs) | Soon Hin Khor, Ph.D. | Code Oil | Medium](https://medium.com/code-oil/webpack-javascript-bundling-for-both-front-end-and-back-end-b95f1b429810/)