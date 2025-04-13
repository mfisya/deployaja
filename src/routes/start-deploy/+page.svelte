<script lang="ts">
    import Nav from "$lib/nav.svelte";    
    import type {  PageServerData, PageProps } from './$types';

    let { data, form }: { data: PageServerData, form: PageProps } = $props();     
    console.log(form)   
</script>

<link href="/css/deploy.css" rel="stylesheet" />

<Nav />
<main>
    <p class="page-description">
        Write your deployment instructions in plain human language. Our AI will
        understand your intentions and configure the appropriate settings. No
        need for structured formats like YAML or JSON.
    </p>

    <div class="editor-container">
        <div class="editor-column">
            <div class="editor-header">
                <div class="editor-title">                    
                    deploy.txt
                </div>
                <div class="editor-actions">
                    <button class="action-button">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12 11V17"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9.5 14.5H14.5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Marketplace
                    </button>
                    <button class="action-button">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 9L19 17C19 18.1046 18.1046 19 17 19L7 19C5.89543 19 5 18.1046 5 17L5 7C5 5.89543 5.89543 5 7 5L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M17 5V5C17 3.89543 16.1046 3 15 3H15"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <rect
                                x="9"
                                y="9"
                                width="10"
                                height="10"
                                rx="1"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                        Template
                    </button>
                    <button class="action-button">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 7L17 17M7 17L17 7"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Clear
                    </button>
                </div>
            </div>

            <div class="editor-area">
                <div class="editor-toolbar">
                    <div class="toolbar-title">
                        Human Language <span>AI-Powered</span>
                    </div>
                    <div class="toolbar-actions"></div>
                </div>

                <div class="textarea-container">
                    <textarea placeholder="Write your deployment instructions here...">
Use Node.js latest image
My Repo url https://github.com/pinuspintar/kipas.git 

this app listen on port 3000
Install dependencies with npm install, then
build using npm run build, and start with npm start.

Set environment variables: 
- NODE_ENV=production 
- DATABASE_URL=$DATABASE_URL
- REDIS_URL=$REDIS_URL

dependencies : redis, postgres 

Set resource limits to 1
CPU and 1GB of memory.
                    </textarea>
                </div>
            </div>
            <div class="suggestions">
                <div class="suggestion-header">
                    <div class="suggestion-title">
                        Suggested configuration options
                    </div>
                    <button class="suggestion-close">×</button>
                </div>
                <div class="suggestion-items">
                    <div class="suggestion-item">Add a database container</div>
                    <div class="suggestion-item">Configure auto-scaling</div>
                    <div class="suggestion-item">Set up a cron job</div>
                    <div class="suggestion-item">Add a Redis cache</div>
                    <div class="suggestion-item">Configure rate limiting</div>
                </div>
            </div>
        </div>

        <div class="editor-column">
            <div class="editor-header">
                <div class="editor-title">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 12H15M12 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="#00d2ff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Deployment Preview
                </div>
                <div class="editor-actions">
                    <form method="POST">
                        <button class="primary-button">
                            Deploy
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style="margin-left: 8px;"
                            >
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            <div class="preview-container">
                <div class="preview-header">
                    <div class="preview-title">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12H16"
                                stroke="#00d2ff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Generated Configuration
                    </div>
                </div>

                <div class="preview-content">
                    <div class="preview-item">
                        <div class="item-header">
                            <div class="item-title">
                                <div class="item-icon">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20.9999 15.9998C20.9999 18.209 19.2091 19.9998 16.9999 19.9998H6.99994C4.79081 19.9998 2.99994 18.209 2.99994 15.9998V7.99979C2.99994 5.79065 4.79081 3.99979 6.99994 3.99979H16.9999C19.2091 3.99979 20.9999 5.79065 20.9999 7.99979V15.9998Z"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M11 8L10 12L14 12L13 16"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                Base Image
                            </div>
                            <div class="item-status">Configured</div>
                        </div>
                        <div class="preview-details">
                            <div class="detail-line">
                                <div class="detail-label">Image:</div>
                                <div class="detail-value">node:latest</div>
                            </div>
                            <div class="detail-line">
                                <div class="detail-label">Pull Policy:</div>
                                <div class="detail-value">Always</div>
                            </div>
                        </div>
                    </div>

                    <div class="preview-item">
                        <div class="item-header">
                            <div class="item-title">
                                <div class="item-icon">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="4"
                                            y="4"
                                            width="16"
                                            height="16"
                                            rx="2"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9 9H9.01M15 9H15.01M9 15H9.01M15 15H15.01"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                Network
                            </div>
                            <div class="item-status">Configured</div>
                        </div>
                        <div class="preview-details">
                            <div class="detail-line">
                                <div class="detail-label">Port:</div>
                                <div class="detail-value">3000</div>
                            </div>
                            <div class="detail-line">
                                <div class="detail-label">Network:</div>
                                <div class="detail-value">Private</div>
                            </div>
                        </div>
                    </div>

                    <div class="preview-item">
                        <div class="item-header">
                            <div class="item-title">
                                <div class="item-icon">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 17L12 12L17 17M7 7L12 12L17 7"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                Runtime
                            </div>
                            <div class="item-status">Configured</div>
                        </div>
                        <div class="preview-details">
                            <div class="detail-line">
                                <div class="detail-label">Build:</div>
                                <div class="detail-value">
                                    npm install && npm run build
                                </div>
                            </div>
                            <div class="detail-line">
                                <div class="detail-label">Start:</div>
                                <div class="detail-value">npm start</div>
                            </div>
                            <div class="detail-line">
                                <div class="detail-label">Restart Policy:</div>
                                <div class="detail-value">
                                    On-failure, max 3 attempts
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="preview-item">
                        <div class="item-header">
                            <div class="item-title">
                                <div class="item-icon">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="9"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12 8V12L14 14"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                Environment
                            </div>
                            <div class="item-status">Configured</div>
                        </div>
                        <div class="preview-details">
                            <div class="detail-line">
                                <div class="detail-label">Variables:</div>
                                <div class="detail-value">
                                    NODE_ENV=production
                                </div>
                            </div>
                            <div class="detail-line">
                                <div class="detail-label">Secrets:</div>
                                <div class="detail-value">
                                    DATABASE_URL from db-credentials
                                </div>
                            </div>
                            <div class="detail-line">
                                <div class="detail-label"></div>
                                <div class="detail-value">
                                    API_KEY from api-tokens
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="connection-status not-connected" id="github-connection">
        <div class="status-icon">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M14.3154 8.936C14.7227 8.405 14.8554 7.874 14.9881 7.2097C14.5144 7.2097 13.9742 7.3424 13.4341 7.6077C12.894 7.873 12.486 8.2711 12.2202 8.669C12.0875 8.2704 11.9549 7.7394 11.9549 7.2084C11.4147 7.2084 10.8746 7.3411 10.467 7.7388C10.0593 8.1364 9.92643 8.6687 9.92643 9.2001C9.92643 9.3327 9.92643 9.4654 9.9258 9.5981C8.84429 9.5981 7.89724 10.128 7.3571 10.924C6.81697 11.7201 6.684 12.6481 6.684 13.5761C6.684 14.5041 6.81697 15.3001 7.3571 16.0962C7.89724 16.8922 8.71132 17.5548 9.92643 17.5548C10.066 17.5548 10.2056 17.5548 10.3452 17.5548C10.7366 17.5548 11.1281 17.5548 11.5196 17.4221C11.9111 17.2894 12.3025 17.0241 12.6939 16.6265C13.0854 16.2288 13.3511 15.8312 13.4838 15.4335C13.6165 15.0359 13.6165 14.6382 13.6165 14.2406C14.9607 14.2406 15.7741 13.9753 16.3136 13.5777C16.8531 13.18 17.1188 12.6487 17.1188 11.9854C17.1188 11.322 16.8538 10.7907 16.3143 10.393C15.7748 9.99539 15.0954 9.86269 14.3154 9.86269"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <div class="status-info">
            <div class="status-title">GitHub Repository: Not Connected</div>
            <div class="status-description">
                Connect to your GitHub repository to automatically deploy with
                changes to deploy.txt
            </div>
            <button class="secondary-button" style="margin-left: auto;">
                Connect to GitHub
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="margin-left: 8px;"
                >
                    <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    </div>
</main>
