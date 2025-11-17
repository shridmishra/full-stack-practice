import React, { useEffect, useState } from 'react';

// Custom hook: useFetch
export function useFetch(url) {
  const [state, setState] = useState({ status: 'idle', data: null, error: null });
  useEffect(() => {
    if (!url) return;
    let cancelled = false;
    async function fetcher() {
      setState({ status: 'loading', data: null, error: null });
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText || 'Fetch error');
        const data = await res.json();
        if (!cancelled) setState({ status: 'success', data, error: null });
      } catch (err) {
        if (!cancelled) setState({ status: 'error', data: null, error: err });
      }
    }
    fetcher();
    return () => {
      cancelled = true;
    };
  }, [url]);
  return state;
}

// Component using useEffect directly
export default function DataFetcher({ url }) {
  const [state, setState] = useState({ status: 'idle', data: null, error: null });
  useEffect(() => {
    let cancelled = false;
    async function fetcher() {
      setState({ status: 'loading', data: null, error: null });
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText || 'Fetch error');
        const data = await res.json();
        if (!cancelled) setState({ status: 'success', data, error: null });
      } catch (err) {
        if (!cancelled) setState({ status: 'error', data: null, error: err });
      }
    }
    if (url) fetcher();
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (state.status === 'idle') return <div>Idle</div>;
  if (state.status === 'loading') return <div>Loading...</div>;
  if (state.status === 'error') return <div>Error: {String(state.error)}</div>;
  return (
    <div>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(state.data, null, 2)}</pre>
    </div>
  );
}

// Alternative component using the custom hook
export function DataFetcherWithHook({ url }) {
  const { status, data, error } = useFetch(url);
  if (status === 'idle') return <div>Idle (hook)</div>;
  if (status === 'loading') return <div>Loading (hook)...</div>;
  if (status === 'error') return <div>Error (hook): {String(error)}</div>;
  return <div><pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, 2)}</pre></div>;
}

