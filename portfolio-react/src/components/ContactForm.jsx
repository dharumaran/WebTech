import React from 'react';
export default function ContactForm() {
return (
<form className="grid gap-3 max-w-xl">
<input className="border rounded px-3 py-2" placeholder="Your name" />
<input className="border rounded px-3 py-2" placeholder="Your email" />
<textarea className="border rounded px-3 py-2" rows="4" placeholder="Message"></textarea>
<div>
<button type="button" className="px-4 py-2 bg-sky-600 text-white rounded">Send</button>
</div>
</form>
);
}