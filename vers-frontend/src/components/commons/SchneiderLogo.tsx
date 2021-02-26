import * as React from "react";

const svg = <svg viewBox="0 0 170 35" fill="currentColor" id="Logo-On"><path d="M71 35h.8V0H71zM6.6 22.9H1.2v-9.5c0-.3 0-.9-.6-.9s-.6.5-.6.9v9.5c0 .8.1.9 1 .9h5.6c.4 0 .8 0 .8-.5 0-.4-.4-.4-.8-.4M9 15.6c-.5 0-.5.4-.5.8v6.8c0 .4 0 .8.5.8s.5-.4.5-.8v-6.8c0-.3 0-.8-.5-.8M14.1 15.8H13v-.7c0-1 .1-1.7 1.4-1.7h.7c.3 0 .4-.2.4-.4 0 0 0-.2-.2-.3-.2-.1-.8-.2-1.3-.2-.3 0-.7.1-1 .3-.4.1-.6.4-.8.6-.1.2-.2.6-.2 1.5v.8h-.9c-.2 0-.7 0-.7.3 0 .4.5.4.7.4h.9v6.7c0 .5 0 .9.5.9s.5-.4.5-.8v-6.7h1.1c.4 0 .7-.1.7-.4 0-.3-.5-.3-.7-.3m-1-1.8M22.5 19.2s0-1-.5-1.9c-.3-.5-.7-.9-1.1-1.2-.1 0-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1-.1-.2-.1-.4-.2h-.1c-.1 0-.3-.1-.4-.1h-.1c-.2 0-.3-.1-.5-.1h-.4c-1.2.1-2.2.5-2.9 1.2-.7.7-1 1.8-1 3.1 0 1.2.3 2.3 1 3 .3.4.7.7 1.2.9.5.2 1.1.3 1.7.3 1.5 0 2.4-.6 2.9-1.1.5-.6.7-1.2.7-1.3 0-.2-.2-.4-.5-.4-.2 0-.4.1-.5.3-.3.7-.7 1.2-1.3 1.5-.4.2-.8.3-1.2.3-.9 0-1.7-.3-2.2-.9-.5-.7-.7-1.5-.7-2.5h5.7c.5 0 .9 0 .9-.7zm-6.6-.1c.1-1 .9-2.7 2.8-2.7 2.4 0 2.6 2.1 2.7 2.7h-5.5zM27.8 12.5c-.6 0-.6.5-.6.9v9.7c0 .4 0 .9.6.9s.6-.5.6-.9v-9.7c0-.4 0-.9-.6-.9M46.8 18.4c.4 0 .6-.3.6-.6v-6.7h-1.2v6.7c0 .3.2.6.6.6M35.8 19.8c-.1 0-.2-.1-.2-.1h-.1c-.6-.3-1.2-.4-1.9-.5-.6-.1-1.2-.3-1.7-.5s-.7-.6-.7-1c0-.9 1.1-1.3 2.1-1.3 1.1 0 1.9.4 2.2 1.1.1.4.2.5.4.5.5 0 .5-.4.5-.4 0-.1-.1-.6-.5-1-.2-.3-.6-.5-1-.6-.5-.2-1.1-.3-1.7-.3-1.2 0-2 .3-2.6.9-.5.6-.5 1.2-.5 1.3 0 .6.3 1.1.8 1.5.5.3 1.1.5 2.1.7.3.1.6.1 1 .2.6.1 1.7.4 1.7 1.4 0 .8-.7 1.5-2.4 1.5-1.2 0-2-.5-2.4-1.3-.1-.3-.2-.5-.5-.5-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3 0 .5.4 1.1.9 1.5.3.2.5.4.9.5.4.1 1 .2 1.6.2 1.3 0 2.3-.3 2.9-1 .5-.6.6-1.2.6-1.5-.1-.7-.4-1.3-1.1-1.7M60.2 16.4c-.4-.4-1.1-.9-2.3-.9-1.6 0-2.3.8-2.8 1.3v-.6c0-.2 0-.5-.1-.6h-.1c-.1 0-.2-.1-.3-.1-.5 0-.5.5-.5.8v6.8c0 .4 0 .8.5.8.1 0 .2 0 .3-.1h.1c.1-.1.1-.4.1-.6v-2.9c0-1.3 0-2 .3-2.5.2-.4.6-.8 1-1 .4-.2.9-.4 1.4-.4.7 0 1.3.3 1.7.8.3.4.4 1 .4 1.6v4.4c0 .2 0 .5.1.6h.1c.1.2.1.2.3.2.5 0 .5-.4.5-.8v-4.6c0-.5 0-1.5-.7-2.2"></path><path d="M48.4 12.4v1.1c1.9.7 3.3 2.5 3.3 4.6 0 2.7-2.2 4.9-4.9 4.9s-4.9-2.2-4.9-4.9c0-2.1 1.3-3.9 3.2-4.6v-1.2c-2.5.7-4.3 3-4.3 5.7 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.6-1.8-4.9-4.4-5.6M9 13.4c-.4 0-.7.3-.7.6s.3.6.7.6c.4 0 .7-.3.7-.6s-.3-.6-.7-.6"></path><g><path d="M92 11.6c-2-.9-3.2-1.2-4.4-1.2-1.2 0-2 .4-2 1.1 0 2.1 7 1.5 7 6.3 0 2.7-2.2 4.2-5.3 4.2-2.4 0-3.6-.6-5-1.3v-3c2 1.3 3.2 1.8 4.7 1.8 1.3 0 2-.5 2-1.3 0-2.3-7-1.4-7-6.4 0-2.4 2.1-4 5.3-4 1.5 0 2.9.3 4.7 1.1v2.7zM101.9 21.4c-1.2.4-2.2.6-3.2.6-3.3 0-5.4-1.9-5.4-4.8 0-2.8 2.2-4.9 5.3-4.9.9 0 2.2.2 3.1.6v2.2c-.8-.4-1.7-.6-2.4-.6-1.8 0-2.9 1.1-2.9 2.7 0 1.7 1.1 2.7 2.8 2.7.7 0 1.3-.2 2.6-.6v2.1zM129.2 12.3c-2.9 0-4.9 2-4.9 4.9 0 2.9 2.1 4.8 5.4 4.8.7 0 2.5 0 4.2-1.2v-1.9c-1.4 1-2.3 1.3-3.4 1.3-1.8 0-3-1-3.1-2.6h6.6c.1-3.3-2.1-5.3-4.8-5.3zm-1.8 3.8c.1-1.3.9-2 2-2s1.9.8 2 2h-4zM135.1 21.8h3v-9.3h-3zM146.2 8v4.9c-.8-.4-1.6-.6-2.4-.6-2.7 0-4.5 2-4.5 4.8s1.8 4.8 4.3 4.8c1 0 1.8-.3 2.6-.9v.8h2.9V8h-2.9zm0 11.3c-.6.5-1.1.7-1.7.7-1.4 0-2.2-1.1-2.2-2.8 0-1.9.9-2.9 2.3-2.9.5 0 1.2.2 1.6.5v4.5zM155.3 12.3c-2.9 0-4.9 2-4.9 4.9 0 2.9 2.1 4.8 5.4 4.8.7 0 2.5 0 4.2-1.2v-1.9c-1.4 1-2.3 1.3-3.5 1.3-1.8 0-3-1-3.1-2.6h6.7c.1-3.3-2.1-5.3-4.8-5.3zm-1.8 3.8c.1-1.3.9-2 2-2s1.9.8 2 2h-4zM164.5 15.2c.9-1.9 1.9-2.9 3-2.9.6 0 1.1.2 1.9.9l-.8 2.6c-.8-.5-1.3-.7-1.7-.7-1.1 0-1.8 1-2.4 2.7v4h-2.9v-9.3h2.9v2.7zM138.2 8.6c.3.7-.2 1.7-1.1 2.3-.9.5-1.8.4-2.1-.4-.3-.7.2-1.7 1.1-2.3.9-.5 1.8-.4 2.1.4M112.4 15.9c0-2.5-1.7-3.6-3.4-3.6-1.2 0-2.1.5-2.9 1.6V8h-2.9v13.8h2.8v-5.9c.7-1 1.3-1.4 2-1.4.9 0 1.5.6 1.5 2v3.3c1-.5 2-.8 2.9-.9v-3zM119.7 12.3c-1.2 0-2.1.4-3 1.5v-1.3h-2.9v6.3c1 .1 2.3.6 2.9 1.3v-4.3c.8-1.2 1.3-1.5 2-1.5.8 0 1.5.5 1.5 1.9v5.7h2.9v-6c0-2.8-1.9-3.6-3.4-3.6M124.7 24.5h-3.4v2.4h3.3v1h-3.3v2.5h3.5v1.1h-4.6v-8.1h4.5zM127.5 31.5h1.1v-8.1h-1.1zM132.3 29h3.7c0-2-.9-2.9-2.3-2.9-1.5 0-2.5 1.1-2.5 2.7 0 1.5.9 2.8 2.6 2.8.9 0 1.5-.2 2.1-.6v-1c-.6.4-1.2.6-1.8.6-1.1 0-1.7-.6-1.8-1.6m1.4-2c.7 0 1.2.5 1.2 1.3h-2.7c.2-.9.7-1.3 1.5-1.3M142.8 27.6c-.6-.4-1-.5-1.5-.5-1 0-1.6.7-1.6 1.8s.7 1.7 1.8 1.7c.4 0 .9-.1 1.4-.4v1c-.4.2-1 .3-1.6.3-1.6 0-2.7-1.1-2.7-2.6 0-1.7 1-2.9 2.6-2.9.6 0 1 .1 1.5.4v1.2zM147.5 26.2h1.7v.9h-1.7v2.7c0 .6.4.8.8.8s.8-.1 1.2-.4v1c-.4.2-.9.4-1.3.4-1.1 0-1.7-.7-1.7-1.7v-2.8h-.9V27l2-1.9v1.1zM153.2 26.2v1.2c.5-.9 1-1.3 1.5-1.3.4 0 .8.2 1.3.6l-.6.9c-.3-.3-.7-.5-1-.5-.7 0-1.3.7-1.3 1.6v2.8h-1v-5.3h1.1zM166.7 27.6c-.6-.4-1-.5-1.5-.5-1 0-1.6.7-1.6 1.8s.7 1.7 1.8 1.7c.4 0 .9-.1 1.4-.4v1c-.4.2-1 .3-1.6.3-1.6 0-2.7-1.1-2.7-2.6 0-1.7 1-2.9 2.6-2.9.6 0 1 .1 1.5.4v1.2zM158.8 31.5h1v-5.3h-1zM159.8 24.3c.1.3-.1.6-.4.8-.3.2-.6.1-.7-.1-.1-.3.1-.6.4-.8.3-.2.6-.2.7.1M113.9 26.9l.3-1.1h2.8c.4-1.7.1-3.2-.9-4.2-2-2-6.3-1.3-9.5 1.7-.5.5-.9 1-1.3 1.5h1.7l-.4 1.1h-2.1c-.2.4-.4.7-.5 1.1h2.5l-.4 1.1h-2.4c-.4 1.8-.1 3.4.9 4.4 2 2 6.3 1.3 9.5-1.7.6-.5 1-1.1 1.4-1.7h-2.2l.3-1.1h2.6c.2-.4.4-.7.5-1.1h-2.8zm-.7-2.2c-.2 0-.3 0-.3.1 0 0 0 .1-.1.1l-.9 3.5c-.2 1.2-1.7 2.5-3.7 2.5h-2.8l.5-1.8h1.8c.2 0 .3-.1.4-.2 0-.1.1-.1.1-.2l.7-3.1c.3-1.2 1.6-2.6 3.6-2.6h2.8l-.4 1.7h-1.7z"></path></g></svg>

export default svg;
