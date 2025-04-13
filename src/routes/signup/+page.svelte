<script>
  import { onMount } from "svelte";
  import GithubLogin from "svelte-github-login";
  import { browser } from "$app/environment";
  import Logo from "$lib/logo.svelte";
  import { login } from "$lib/stores/auth";

  let isLoading = false;
  let githubClientId = "Iv23li1s9ocJ5HN7wBQA";
  let redirectUri = "/signup";
  let githubSecret = "90aae5889528b474535464c06f039d072ce3d66c";

  onMount(() => {
    // Access browser-only APIs inside onMount
    document.title = "Login - DeployAja.id";

    // Set GitHub OAuth configuration
    githubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID || githubClientId;
    redirectUri =
      import.meta.env.VITE_GITHUB_REDIRECT_URI ||
      `${window.location.origin}/signup`;
  });

  async function handleSuccess(event) {
    // Handle successful login
    console.log("GitHub login successful", event);

    let code = event.detail.code;
    console.log("Received authorization code:", code);
    try {
      const response = await fetch("/api/github/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error("Failed to exchange code for token");
      }

      const data = await response.json();

      console.log("User authenticated successfully");
      console.log("Access token received:", data.access_token);
      console.log("User information:", data.user);

      // Redirect to dashboard or store user information in your app state
      if (browser) {
        login(data.user);
        isLoading = false;
        window.location.href = "/member/deployment";
      }
    } catch (error) {
      console.error("Error completing GitHub authentication:", error);
      handleError(error);
    }
    // You would typically store the token and redirect to the dashboard
  }

  function handleError(error) {
    console.error("GitHub login error", error);
    isLoading = false;
  }

  function handleLoading() {
    isLoading = true;
    const loginBody = document.querySelector(".login-body");
    loginBody.style.display = "none";
    const spinner = document.querySelector(".loading-spinner");
    spinner.style.display = "block";
  }
</script>

<link href="/css/login.css" rel="stylesheet" />
<div class="login-container">
  <div class="login-card">
    <div class="login-header">
      <div class="logo">
        <Logo />
        <span>DeployAja.id</span>
      </div>
      <h1>Welcome</h1>
      <p>One-click deployment for your applications</p>
    </div>
    <div class="loading-spinner">
      <center>
        <svg class="spinner" viewBox="0 0 50 50">
          <circle
            class="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="4"
          ></circle>
        </svg>
      </center>
    </div>
    <div class="login-body">
      <div class="github-button-container">
        <GithubLogin
          scope="user:email"
          clientId={githubClientId}
          {redirectUri}
          on:success={handleSuccess}
          on:error={handleError}
          on:request={handleLoading}
          let:onLogin
        >
          <button class="github-button" on:click={onLogin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            Continue with GitHub
          </button>
        </GithubLogin>
      </div>
      <div class="divider">
        <span>Deploy your app in seconds</span>
      </div>

      <div class="features">
        <div class="feature">
          <div class="feature-icon">📦</div>
          <div class="feature-text">
            <h3>Easy Deployment</h3>
            <p>Connect to GitHub or choose from templates</p>
          </div>
        </div>

        <div class="feature">
          <div class="feature-icon">📝</div>
          <div class="feature-text">
            <h3>Human-Friendly Config</h3>
            <p>No YAML or JSON, just simple text instructions</p>
          </div>
        </div>

        <div class="feature">
          <div class="feature-icon">🚀</div>
          <div class="feature-text">
            <h3>Instant Cloud Deploy</h3>
            <p>One click to deploy your application</p>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <p>
        By continuing, you agree to our <a href="/terms">Terms of Service</a>
        and <a href="/privacy">Privacy Policy</a>
      </p>
    </div>
  </div>
</div>
