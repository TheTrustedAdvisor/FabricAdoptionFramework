import React from 'react';
import OriginalDocItemFooter from '@theme-original/DocItem/Footer';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

function normalizeAuthors(raw) {
  if (!raw) return [];
  const arr = Array.isArray(raw) ? raw : [raw];
  const norm = arr
    .map((a) => {
      if (typeof a === 'string') {
        return { name: a };
      }
      if (a && typeof a === 'object') {
        const name = a.name || a.id || a.email || 'Unknown';
        const email = a.email ? String(a.email).toLowerCase() : undefined;
        const github = a.github ? String(a.github).replace(/^@/, '') : undefined;
        const website = a.website || a.url;
        const realName = a.realName;
        const badges = Array.isArray(a.badges) ? a.badges : undefined;
        return { name, email, github, website, realName, badges };
      }
      return null;
    })
    .filter(Boolean);

  // Deduplicate by identity (github || email || name), prefer richer entries
  const byId = new Map();
  const score = (x) => {
    let s = 0;
    if (x.github) s += 4;       // has GitHub handle
    if (x.email) s += 2;        // has email
    if (x.realName) s += 1;     // has real name
    if (Array.isArray(x.badges)) s += x.badges.length; // more badges → slightly higher
    return s;
  };
  for (const a of norm) {
    const id = ((a.github || a.email || a.name || '').toString().toLowerCase().trim());
    if (!id) continue;
    const existing = byId.get(id);
    if (!existing || score(a) > score(existing)) {
      byId.set(id, a);
    }
  }
  const unique = Array.from(byId.values());

  // Stable sort by handle (github || name || email), then by realName
  unique.sort((a, b) => {
    const ha = (a.github || a.name || a.email || '').toString().toLowerCase();
    const hb = (b.github || b.name || b.email || '').toString().toLowerCase();
    if (ha !== hb) return ha.localeCompare(hb);
    return (a.realName || '').localeCompare(b.realName || '');
  });
  return unique;
}

function AuthorsBlock({ authors }) {
  const list = normalizeAuthors(authors);
  if (!list.length) return null;

  return (
    <section className="doc-authors" style={{ marginTop: '2rem', borderTop: '1px solid var(--ifm-toc-border-color)', paddingTop: '1.25rem' }}>
      <h2 className="doc-authors__title" style={{ fontSize: '1.1rem', marginBottom: '.75rem' }}>Contributors</h2>
      <ul className="doc-authors__list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.5rem .75rem' }}>
        {list.map((a, idx) => {
          const href = a.github
            ? `https://github.com/${a.github}`
            : a.website
            ? a.website
            : a.email
            ? `mailto:${a.email}`
            : undefined;
          const hasLink = Boolean(href);
          const hasGithub = Boolean(a.github);
          const handle = a.github || a.name;
          const displayName = a.realName && a.realName !== handle ? `${handle} (${a.realName})` : handle;
          return (
            <li key={idx} className="doc-authors__item" style={{ display: 'flex', flexDirection: hasGithub ? 'row' : 'column', alignItems: hasGithub ? 'center' : undefined }}>
              {hasLink ? (
                <a className="doc-authors__link" href={href} target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  {hasGithub && (
                    <img
                      src={`https://github.com/${a.github}.png`}
                      alt={`${a.name} avatar`}
                      width={32}
                      height={32}
                      style={{ borderRadius: '50%', marginRight: '.5rem' }}
                    />
                  )}
                  {displayName}
                </a>
              ) : (
                <span className="doc-authors__text">{displayName}</span>
              )}
              {a.email && !a.github && !a.website ? (
                <span className="doc-authors__meta" style={{ opacity: .7, fontSize: '.85em' }}>{a.email}</span>
              ) : null}
              {Array.isArray(a.badges) && a.badges.length > 0 && (
                <div className="doc-authors__badges" style={{ marginTop: '.25rem', display: 'flex', gap: '.25rem', flexWrap: 'wrap', opacity: .85, fontSize: '.75em' }}>
                  {a.badges.map((badge, i) => (
                    <span key={i} className="doc-authors__badge" style={{ padding: '0.15rem 0.4rem', borderRadius: '999px', border: '1px solid var(--ifm-toc-border-color)' }}>
                      {String(badge).toLowerCase() === 'mvp' ? 'MVP' : badge}
                    </span>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function DocItemFooter(props) {
  const {metadata} = useDoc();
  const authors = metadata?.frontMatter?.authors;
  return (
    <>
      {/* Authors above the default footer (prev/next) */}
      <AuthorsBlock authors={authors} />
      <OriginalDocItemFooter {...props} />
    </>
  );
}