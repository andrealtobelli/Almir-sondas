import React, {useId, useState} from 'react';
import {ChevronDown} from 'lucide-react';

export default function FaqItem({question, children}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <h3 className="faq-question">
        <button type="button" id={`${id}-question`} className="faq-trigger"
          aria-expanded={open} aria-controls={`${id}-answer`}
          onClick={() => setOpen(value => !value)}>
          <span>{question}</span>
          <ChevronDown size={18} aria-hidden="true" />
        </button>
      </h3>
      {/* Kept mounted so the grid transition can reverse immediately on rapid clicks.
          inert removes closed descendants from keyboard and pointer interaction. */}
      <div id={`${id}-answer`} className="faq-answer" role="region"
        aria-labelledby={`${id}-question`} aria-hidden={!open} inert={!open}>
        <div className="faq-answer-inner"><div className="faq-answer-content">{children}</div></div>
      </div>
    </div>
  );
}
