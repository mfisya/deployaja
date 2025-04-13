<script>
    import Logo from "$lib/logo.svelte";
</script>
<link href="/css/index.css" rel="stylesheet" />
<div class="container">
    <header>
        <div class="logo">
            <Logo/>        
            DeployAja.id
        </div>
        <nav>
            <ul>
                <li><a href="/doc">Documentation</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h1 class="tagline">
            <span class="highlight">No More YAML</span> <br />Just Deploy
        </h1>
        <p class="subtitle">
            One click away to deploy your application to the cloud with simple,
            human-readable configuration. Describe your infrastructure needs in
            plain text - we'll handle the rest.
        </p>
        <a class="cta-button" href="/start-deploy">Start Deploying</a>
    </section>
    <section class="vs-section">
        <div class="code-block">
            <div class="code-label">OLD WAY</div>
            <div class="code-header">
                <div class="window-controls">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                </div>
                <div class="file-tabs">
                    <div class="file-tab active">Dockerfile</div>
                    <div class="file-tab inactive">deployment.yaml</div>
                    <div class="file-tab inactive">values.yaml</div>
                    <div class="file-tab inactive">Chart.yaml</div>
                    <div class="file-tab inactive">service.yaml</div>
                </div>
            </div>
            <pre class="code-content"><span class="keyword">FROM</span> <span
                class="string">node:18-alpine</span
                >

                <span class="keyword">WORKDIR</span> <span class="string">/app</span>

                <span class="keyword">COPY</span> <span class="string">package*.json ./</span>

                <span class="keyword">RUN</span> <span class="string">npm install</span>

                <span class="keyword">COPY</span> <span class="string">. .</span>

                <span class="keyword">ENV</span> <span class="property">NODE_ENV</span>=<span
                    class="string">production</span
                    >
                    <span class="keyword">ENV</span> <span class="property">API_KEY</span>=<span
                        class="string">secret</span
                        >

                        <span class="keyword">EXPOSE</span> <span class="number">3000</span>

                        <span class="keyword">CMD</span> [<span class="string">"npm"</span>, <span
                            class="string">"start"</span
                            >]

                            </pre>
                            </div>
                            <div class="vs-label">VS</div>
                            <div class="code-block">
                                <div class="code-label">NEW WAY</div>
                                <div class="code-header">
                                    <div class="window-controls">
                                        <div class="dot red"></div>
                                        <div class="dot yellow"></div>
                                        <div class="dot green"></div>
                                    </div>
                                    <div class="file-tabs">
                                        <div class="file-tab active">deploy.txt</div>
                                    </div>
                                </div>
                                <pre class="code-content"><span class="comment"
                                    ># DeployAja.id configuration for Svelte</span
                                    >

                                    <span class="keyword">Deploy</span> <span class="string"
                                        >Svelte application</span
                                        > <span class="keyword">from my Git repository</span>

                                        <span class="keyword">Set domain to</span> <span class="string"
                                            >myapp.deployaja.id</span
                                            >

                                            <span class="keyword">Add environment variables:</span>
                                            API_URL=https://api.deployaja.id
                                            PUBLIC_URL=https://myapp.deployaja.id

                                            <span class="keyword">Set up preview deployments</span> <span class="keyword"
                                                >for pull requests</span
                                                >

                                                <span class="keyword">Cache</span> <span class="string">node_modules</span
                                                    > <span class="keyword">for faster builds</span></pre>
                                                    </div>
                                                    </section>
                                                    <!-- End Flow Diagram Section -->
                                                    <section class="features">
                                                        <div class="feature-card">
                                                            <svg
                                                                class="feature-icon"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                viewbox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
                                                                    ></path>
                                                                <line x1="16" x2="2" y1="8" y2="22"></line>
                                                                <line x1="17.5" x2="9" y1="15" y2="15"></line>
                                                            </svg>
                                                            <h3 class="feature-title">Human Language Configuration</h3>
                                                            <p class="feature-desc">
                                                                Write your deployment configurations in plain English. No need
                                                                to learn complex YAML syntax. Just describe what you need and
                                                                we'll handle the rest.
                                                            </p>
                                                        </div>
                                                        <div class="feature-card">
                                                            <svg
                                                                class="feature-icon"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                viewbox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                                    ></polygon>
                                                            </svg>
                                                            <h3 class="feature-title">One-Click Deployment</h3>
                                                            <p class="feature-desc">
                                                                Deploy your application to the cloud with a single click. We'll
                                                                take care of containerization, orchestration, and scaling behind
                                                                the scenes.
                                                            </p>
                                                        </div>
                                                        <div class="feature-card">
                                                            <svg
                                                                class="feature-icon"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                viewbox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                <path d="M22 12H2"></path>
                                                                <path d="M5 12V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7"></path>
                                                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
                                                                <rect height="3" width="12" x="6" y="14"></rect>
                                                            </svg>
                                                            <h3 class="feature-title">Powered by k3s</h3>
                                                            <p class="feature-desc">
                                                                Deploy to our own reliable infrastructure powered by lightweight
                                                                Kubernetes (k3s). Enjoy the benefits of container orchestration
                                                                without the complexity of managing your own cluster.
                                                            </p>
                                                        </div>
                                                    </section>
                                                    </div>
