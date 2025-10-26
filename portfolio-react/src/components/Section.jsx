import React from 'react';
export default function Section({id, title, children}) {
return (
<section id={id} className="py-14">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-semibold mb-4">{title}</h2>
<div className="bg-white p-6 rounded-lg shadow-sm">{children}</div>
</div>
</section>
);
}