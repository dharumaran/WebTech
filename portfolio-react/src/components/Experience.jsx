import React from 'react';
export default function Experience({items}) {
return (
<div className="space-y-4">
{items.map((x, i) => (
<div key={i} className="border-l-2 pl-4">
<div className="flex justify-between items-baseline">
<div>
<div className="font-semibold">{x.role} • {x.company}</div>
<div className="text-sm text-gray-600">{x.period}</div>
</div>
<div className="text-sm text-gray-500">{x.location}</div>
</div>
<ul className="list-disc ml-5 mt-2 text-gray-700">
{x.responsibilities.map((r, idx) => <li key={idx}>{r}</li>)}
</ul>
</div>
))}
</div>
);
}