import * as React from 'react';

const Report = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="icon icon-tabler icon-tabler-report-money"
		width={30}
		height={30}
		viewBox="0 0 24 24"
		stroke-width={1.5}
		stroke="#8b6ffb"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
		<rect x="9" y="3" width="6" height="4" rx="2" />
		<path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
		<path d="M12 17v1m0 -8v1" />
	</svg>
);

export default Report;
