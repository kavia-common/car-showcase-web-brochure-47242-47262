import React, { useState } from 'react';
import { models } from '../data/models';
import SpecsPanel from '../components/SpecsPanel/SpecsPanel';

export default function Compare() {
  const [left, setLeft] = useState(models[0].id);
  const [right, setRight] = useState(models[1]?.id || models[0].id);

  const leftModel = models.find((m) => m.id === left);
  const rightModel = models.find((m) => m.id === right);

  return (
    <section className="container" style={{ marginTop: 24 }}>
      <h1>Compare Models</h1>
      <div className="grid grid-2" style={{ marginBottom: 16 }}>
        <div className="card" style={{ padding: 16 }}>
          <label htmlFor="leftSelect"><strong>Model A</strong></label>
          <select id="leftSelect" value={left} onChange={(e) => setLeft(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid rgba(17,24,39,0.12)' }}>
            {models.map((m) => (<option key={m.id} value={m.id}>{m.name}</option>))}
          </select>
          <img src={leftModel.gallery[0]} alt={`${leftModel.name} preview`} loading="lazy" style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginTop: 12 }} />
        </div>

        <div className="card" style={{ padding: 16 }}>
          <label htmlFor="rightSelect"><strong>Model B</strong></label>
          <select id="rightSelect" value={right} onChange={(e) => setRight(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid rgba(17,24,39,0.12)' }}>
            {models.map((m) => (<option key={m.id} value={m.id}>{m.name}</option>))}
          </select>
          <img src={rightModel.gallery[0]} alt={`${rightModel.name} preview`} loading="lazy" style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginTop: 12 }} />
        </div>
      </div>

      <SpecsPanel models={[leftModel, rightModel]} title="Side-by-side Specifications" />
    </section>
  );
}
