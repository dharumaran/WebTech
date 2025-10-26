import React from 'react';
export default function Nav({sections}) {
return (
<nav className="fixed w-full bg-white/60 backdrop-blur-sm z-40 shadow-sm">
<div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
<div className="text-xl font-semibold">Dharini Manimaran</div>
<div className="hidden md:flex gap-6">
{sections.map(s => (
<a key={s.id} href={`#${s.id}`} className="text-sm hover:text-sky-600">{s.label}</a>
))}
</div>
</div>
</nav>
);
}