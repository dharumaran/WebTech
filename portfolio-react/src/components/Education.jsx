import React from 'react';
export default function Education({items}) {
return (
<div className="grid gap-4">
{items.map((e, i) => (
<div key={i} className="flex justify-between items-start">
<div>
<div className="font-semibold">{e.degree} — {e.institution}</div>
<div className="text-sm text-gray-600">{e.year} • {e.details}</div>
</div>
<div className="text-sm text-gray-500">{e.grade}</div>
</div>
))}
</div>
);
}