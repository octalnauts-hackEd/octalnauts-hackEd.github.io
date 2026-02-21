
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/add_restrictions" | "/api" | "/dashboard" | "/home" | "/login" | "/signup" | "/users_db" | "/[...path]";
		RouteParams(): {
			"/[...path]": { path: string }
		};
		LayoutParams(): {
			"/": { path?: string };
			"/add_restrictions": Record<string, never>;
			"/api": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/home": Record<string, never>;
			"/login": Record<string, never>;
			"/signup": Record<string, never>;
			"/users_db": Record<string, never>;
			"/[...path]": { path: string }
		};
		Pathname(): "/" | "/add_restrictions" | "/api" | "/dashboard" | "/home" | "/login" | "/signup";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/images/apple.jpg" | "/images/apple2.jpg" | "/images/guest.jpg" | "/images/guest2.jpg" | "/images/login.jpg" | "/images/login2.jpg" | "/robots.txt" | string & {};
	}
}