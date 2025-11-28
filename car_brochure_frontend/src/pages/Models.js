import React from 'react';
import { models } from '../data/models';
import { useApp } from '../state/AppContext';

export default function Models() {
  const { selectedModelId, setSelectedModelId } = useApp();
  return (
    <section className="container" style={{ marginTop: 24 }}>
      <h1>Models</h1>
      <div className="grid grid-3">
        {models.map((m) => (
          <article key={m.id} className="card" style={{ overflow: 'hidden' }}>
            <img
              src={m.gallery[0]}
              alt={`${m.name} hero`}
              loading="lazy"
              style={{ width: '100%', height: 220, objectFit: 'cover' }}
            />
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: '6px 0' }}>{m.name}</h3>
              <p style={{ color: 'rgba(17,24,39,0.7)' }}>{m.tagline}</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <button
                  className={`btn ${selectedModelId === m.id ? 'btn-primary' : ''}`}
                  onClick={() => setSelectedModelId(m.id)}
                >
                  {selectedModelId === m.id ? 'Selected' : 'Select'}
                </button>
                <a className="btn" href="/" onClick={(e) => { e.preventDefault(); window.location.assign('/'); }}>
                  View
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
