import React from 'react';
import '../ArchivePage.css';
import data from '../content/archive.json';

export default function ArchivePage() {
  const rows = Array.isArray(data) ? data : [];
  const sorted = [...rows].sort((a, b) => (b.year || 0) - (a.year || 0));

  return (
    <div className="archive-page">
      <div className="archive-container">
        <a className="archive-back" href="/weiching-chen/"> {"<  Weiching Chen"}</a>
        <h1 className="archive-title">All Projects</h1>

        <div className="archive-table-wrap">
          <table className="archive-table" aria-describedby="archive-caption">
            <caption id="archive-caption" className="sr-only">List of projects by year with links</caption>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Project</th>
                <th scope="col">Made at</th>
                <th scope="col">Built with</th>
                {/* <th scope="col">Link</th> */}
              </tr>
            </thead>
            <tbody>
              {sorted.map((r, i) => (
                <tr key={i}>
                  <td className="col-year" data-label="Year">{r.year ?? ''}</td>
                  <td className="col-project" data-label="Project">
                    {r.projectUrl ? (
                      <a href={r.linkUrl} target={r.linkUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{r.project}</a>
                    ) : (
                      r.project
                    )}
                  </td>
                  <td className="col-madeat" data-label="Made at">{r.madeAt ?? ''}</td>
                  <td className="col-builtwith" data-label="Built with">
                    {Array.isArray(r.builtWith) && r.builtWith.length ? (
                      <ul className="cv-tags">
                        {r.builtWith.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    ) : null}
                  </td>
                  {/* <td className="col-link" data-label="Link">
                    {r.linkUrl ? (
                      <a href={r.linkUrl} target={r.linkUrl.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {r.linkLabel || 'Link'}
                      </a>
                    ) : (
                      ''
                    )}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
