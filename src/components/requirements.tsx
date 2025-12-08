import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  requirementId: string;
  title: string;
  description?: string;
  isEssential: boolean;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, reset } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    // Handle form submission logic here
    console.log(data);
    setRequirements(data.requirements);
    reset();
  };

  const addRequirement = () => {
    const newRequirementId = requirements.length.toString();
    setRequirements([...requirements, { requirementId: newRequirementId, title: '', isEssential: false }]);
  };

  const removeRequirement = (requirementId: string) => {
    setRequirements(requirements.filter((r) => r.requirementId !== requirementId));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {requirements.map((req, index) => (
        <div key={req.requirementId} className="flex flex-col gap-2">
          <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700">
            Requirement Title
          </label>
          <input
            id={`title-${index}`}
            type="text"
            {...register(`requirements.${index}.title`)}
            placeholder="Enter requirement title"
            className={twMerge('w-full px-4 py-2 border rounded-md', 'focus:ring-blue-500 focus:border-blue-500')}
          />
          <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700">
            Requirement Description
          </label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`)}
            placeholder="Enter requirement description"
            rows={3}
            className={twMerge('w-full px-4 py-2 border rounded-md', 'focus:ring-blue-500 focus:border-blue-500')}
          />
          <div className="flex items-center gap-2">
            <label htmlFor={`isEssential-${index}`} className="block text-sm font-medium text-gray-700">
              Is Essential
            </label>
            <input
              id={`isEssential-${index}`}
              type="checkbox"
              {...register(`requirements.${index}.isEssential`)}
              className={twMerge('w-4 h-4', 'focus:ring-blue-500')}
            />
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeRequirement(req.requirementId)}
              className="text-red-600 hover:text-red-900 focus:outline-none"
            >
              Remove Requirement
            </button>
          )}
        </div>
      ))}
      <div className="flex items-center gap-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Submit Requirements
        </button>
        <button type="button" onClick={addRequirement} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">
          Add Requirement
        </button>
      </div>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  requirementId: string;
  title: string;
  description?: string;
  isEssential: boolean;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, reset } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    // Handle form submission logic here
    console.log(data);
    setRequirements(data.requirements);
    reset();
  };

  const addRequirement = () => {
    const newRequirementId = requirements.length.toString();
    setRequirements([...requirements, { requirementId: newRequirementId, title: '', isEssential: false }]);
  };

  const removeRequirement = (requirementId: string) => {
    setRequirements(requirements.filter((r) => r.requirementId !== requirementId));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {requirements.map((req, index) => (
        <div key={req.requirementId} className="flex flex-col gap-2">
          <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700">
            Requirement Title
          </label>
          <input
            id={`title-${index}`}
            type="text"
            {...register(`requirements.${index}.title`)}
            placeholder="Enter requirement title"
            className={twMerge('w-full px-4 py-2 border rounded-md', 'focus:ring-blue-500 focus:border-blue-500')}
          />
          <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700">
            Requirement Description
          </label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`)}
            placeholder="Enter requirement description"
            rows={3}
            className={twMerge('w-full px-4 py-2 border rounded-md', 'focus:ring-blue-500 focus:border-blue-500')}
          />
          <div className="flex items-center gap-2">
            <label htmlFor={`isEssential-${index}`} className="block text-sm font-medium text-gray-700">
              Is Essential
            </label>
            <input
              id={`isEssential-${index}`}
              type="checkbox"
              {...register(`requirements.${index}.isEssential`)}
              className={twMerge('w-4 h-4', 'focus:ring-blue-500')}
            />
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeRequirement(req.requirementId)}
              className="text-red-600 hover:text-red-900 focus:outline-none"
            >
              Remove Requirement
            </button>
          )}
        </div>
      ))}
      <div className="flex items-center gap-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Submit Requirements
        </button>
        <button type="button" onClick={addRequirement} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">
          Add Requirement
        </button>
      </div>
    </form>
  );
};

export default GatherRequirements;