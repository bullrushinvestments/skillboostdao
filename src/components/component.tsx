import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get('/api/business-spec');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const router = useRouter();

  const handleSaveClick = () => {
    // Implement save logic here
    alert('Business specification saved!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create Business Specification</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={businessSpec?.name || ''}
            onChange={(e) => setBusinessSpec({ ...businessSpec, name: e.target.value })}
            className={clsx(
              'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500',
              businessSpec?.name ? '' : 'border-red-300 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'
            )}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={businessSpec?.description || ''}
            onChange={(e) => setBusinessSpec({ ...businessSpec, description: e.target.value })}
            rows={4}
            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2">
          {businessSpec?.requirements.map((requirement) => (
            <div key={requirement.id} className="flex flex-col space-y-2">
              <label htmlFor={`title-${requirement.id}`} className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id={`title-${requirement.id}`}
                value={requirement.title}
                onChange={(e) => setBusinessSpec({
                  ...businessSpec,
                  requirements: businessSpec.requirements.map(r =>
                    r.id === requirement.id ? { ...r, title: e.target.value } : r
                  )
                })}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          onClick={handleSaveClick}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get('/api/business-spec');
        setBusinessSpec(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const router = useRouter();

  const handleSaveClick = () => {
    // Implement save logic here
    alert('Business specification saved!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create Business Specification</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={businessSpec?.name || ''}
            onChange={(e) => setBusinessSpec({ ...businessSpec, name: e.target.value })}
            className={clsx(
              'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500',
              businessSpec?.name ? '' : 'border-red-300 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'
            )}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={businessSpec?.description || ''}
            onChange={(e) => setBusinessSpec({ ...businessSpec, description: e.target.value })}
            rows={4}
            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2">
          {businessSpec?.requirements.map((requirement) => (
            <div key={requirement.id} className="flex flex-col space-y-2">
              <label htmlFor={`title-${requirement.id}`} className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id={`title-${requirement.id}`}
                value={requirement.title}
                onChange={(e) => setBusinessSpec({
                  ...businessSpec,
                  requirements: businessSpec.requirements.map(r =>
                    r.id === requirement.id ? { ...r, title: e.target.value } : r
                  )
                })}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          onClick={handleSaveClick}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;