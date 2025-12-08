import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [testTitle, setTestTitle] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testTitle || !testDescription) {
      return setError('Please fill in all fields');
    }
    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', { title: testTitle, description: testDescription });
      router.push('/');
    } catch (err) {
      setError('Failed to create the test. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="testTitle" className="block mb-1">Test Title</label>
          <input
            type="text"
            id="testTitle"
            value={testTitle}
            onChange={(e) => setTestTitle(e.target.value)}
            required
            aria-label="Enter test title"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="testDescription" className="block mb-1">Test Description</label>
          <textarea
            id="testDescription"
            value={testDescription}
            onChange={(e) => setTestDescription(e.target.value)}
            required
            aria-label="Enter test description"
            rows={4}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [testTitle, setTestTitle] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testTitle || !testDescription) {
      return setError('Please fill in all fields');
    }
    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', { title: testTitle, description: testDescription });
      router.push('/');
    } catch (err) {
      setError('Failed to create the test. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="testTitle" className="block mb-1">Test Title</label>
          <input
            type="text"
            id="testTitle"
            value={testTitle}
            onChange={(e) => setTestTitle(e.target.value)}
            required
            aria-label="Enter test title"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="testDescription" className="block mb-1">Test Description</label>
          <textarea
            id="testDescription"
            value={testDescription}
            onChange={(e) => setTestDescription(e.target.value)}
            required
            aria-label="Enter test description"
            rows={4}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;