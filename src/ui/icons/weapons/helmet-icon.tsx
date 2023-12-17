import type { SVGAttributes } from 'react';
import React from 'react';

type Props = SVGAttributes<SVGElement>;

export function HelmetIcon(props: Props) {
  return (
    <svg viewBox="0 0 19.75 32" {...props}>
      <path d="M19.558 16.983s-.133-1.724-.265-2.52c-.133-.796-.802-1.316-.802-1.316s.265-7.56-7.494-7.56c-2.973 0-5.503 1.159-6.838 2.588-2.149 2.301-2.048 5.303-2.048 5.303s-.929.117-1.658.357c-.729.24 0 .704 0 .704s.736.211 1.797.211 1.32.047 1.32.047v.528c0 .107-.304.048-.304.177 0 .353.044 1.157.044 1.68 0 .265.267.101.279.265.008.113-.16.143-.146.266.025.221.06.457.102.7.021.119.14.194.163.317.335 1.712.856 3.702.856 3.702s-.295.033-.312.454c-.036.897.336 1.785.663 2.387.126.232.279.27.751.663.531.442 1.896.651 2.697.302 1.525-.663 1.837-1.154 1.837-1.154s2.719-.265 3.847-.729c1.127-.464 2.697-2.596 3.161-3.061.149-.149.41.07.6-.174.4-.515.785-.969.843-1.506.093-.856.104-1.626.104-1.626l.53-.066c.532-.067.273-.939.273-.939zM5.227 25.161c.666.012 1.811-.021 1.811-.021-.973.53-2.17.014-1.811.021zm4.842-2.286c-.022.499-.243.718-.243.718s-.818.032-1.282.032h-.928s1.24-1.27 1.589-1.601 1.152-.22 1.152-.22c-.315.582-.265.541-.288 1.071zm.619-3.893c.133.862.221 1.547.221 1.547s-1.834.443-2.431.907c-.598.464-.796 1.062-1.526 1.491-.729.43-1.26-.032-1.857-.629-.378-.378-.277-2.251-.151-3.57.012-.125.124-.15.135-.264.03-.288.074-.47.044-.664-.03-.193-.132-.398-.132-.398s1.961-.012 2.956-.012 3.846-.332 3.846-.332l.044.685-1.282.376.133.863zm3.559 3.714c-1.629.618-2.346.852-2.346.852s-.078-1.035.555-1.648c.086-.083.067-.372.18-.32.317.146.814-1.181.621-1.228-.183-.043.127-.275.127-.275s.83.009 1.559.057c.862.057 1.954.452 1.954.452-.001.398-1.177 1.551-2.65 2.11zm-.022-5.084.022-.552h1.923l.531.597-2.476-.045z" />
    </svg>
  );
}