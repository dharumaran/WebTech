import React from 'react';
export default function Skills({list}) {
return (
<div className="flex flex-wrap gap-3">
{list.map((s,i) => <span key={i} className="px-3 py-1 rounded-full border text-sm">{s}</span>)}
</div>
);
}