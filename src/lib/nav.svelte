<script>
    import Logo from "$lib/logo.svelte";
    import { user, logout } from "$lib/stores/auth";
    import { page } from "$app/stores";
    import { writable } from "svelte/store";

    let dropdownToggle = writable(false);     
    function handleLogout() {
        logout();
        window.location.href = "/";
    }
</script>

<header>
    <div class="logo">
        <Logo />
        DeployAja.id
    </div>
    <nav>
        <ul>
            <li><a href="/doc">Documentation</a></li>
            {#if $user}
                <li class="profile-menu">
                    <div class="avatar-wrapper">
                        <!-- Use user's avatar if available, otherwise use initials -->
                        {#if $user.avatar_url}
                            <a
                                href="#"
                                onclick={() => {
                                    dropdownToggle = writable(true);
                                    setTimeout(() => {
                                        dropdownToggle = writable(false);
                                    }, 3000);
                                }}
                            >
                                <img
                                    src={$user.avatar_url}
                                    alt="Profile"
                                    class="avatar"
                                />
                            </a>
                        {:else}
                            <div class="avatar-initials">
                                {($user.name || "User").charAt(0)}
                            </div>
                        {/if}
                        {#if $dropdownToggle}
                            <div class="dropdown-menu">
                                <a href="/profile">Profile</a>
                                <a href="/settings">Settings</a>
                                <a href="/deployments">My Deployments</a>
                                <button onclick={handleLogout}>Logout</button>
                            </div>
                        {/if}
                    </div>
                </li>
            {:else}
                <li><a href="/signup" class="signup-btn">Login</a></li>
            {/if}
        </ul>
    </nav>
</header>
