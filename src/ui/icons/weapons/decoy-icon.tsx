import type { SVGAttributes } from 'react';
import React from 'react';

type Props = SVGAttributes<SVGElement>;

export function DecoyIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 32" {...props}>
      <g fillRule="evenodd" clipRule="evenodd">
        <path d="m17.921 13.187-1.528-.879v1.796l-.917.841v1.795h-.382v1.835h.382v1.91h-.382v1.834h.382v1.91h-.382v1.833h.382v1.758l.917 1.566v1.299c0 .356-.178.536-.536.536h-6.8c-.356 0-.534-.18-.534-.536v-1.299L9.4 27.82v-1.758h.421v-1.833H9.4v-1.91h.421v-1.834H9.4v-1.91h.421V16.74H9.4v-1.795l-.878-.841v-2.445c0-.356.178-.535.534-.535h.535l1.146-.993v-1.53c-.612-.075-.917-.368-.917-.878 0-.33.114-.548.344-.649.127-.076.382-.115.764-.115h4.202l3.554 5.694v12.034l-1.795.879c-.255.127-.446.089-.573-.115-.128-.229-.077-.445.152-.649.204-.178.51-.382.917-.611l.536-.266V13.187z" />
        <path
          fillOpacity=".851"
          d="M5.847 3.062v2.369l2.025-1.184.841 1.451-2.102 1.223 2.102 1.222-.841 1.452-2.025-1.146v2.369h-1.72V8.374L1.989 9.595l-.841-1.452 2.14-1.222-2.14-1.223.841-1.451 2.138 1.26V3.062h1.72zm17.881 5.195-1.528.918 1.566.878-.649 1.109-1.528-.879v1.757h-1.261v-1.796l-1.605.918-.611-1.109 1.529-.878-1.529-.918.65-1.107 1.566.917V6.234h1.261v1.795l1.528-.879.611 1.107zM5.006 19.72l-1.528-.878v1.757h-1.26v-1.795l-1.605.916-.612-1.107 1.566-.879-1.566-.918.65-1.106 1.566.916v-1.834h1.261v1.796l1.528-.878.612 1.106-1.529.918 1.567.879-.65 1.107z"
        />
      </g>
    </svg>
  );
}