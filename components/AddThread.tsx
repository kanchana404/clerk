'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { createThread } from '@/lib/actions/thread.actions';
import Swal from 'sweetalert2';

export default function CreateThread() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      Swal.fire('Error', 'You need to be logged in to create a thread', 'error');
      return;
    }

    try {
      const thread = {
        title,
        description,
        user: user.id,
      };
      await createThread(thread);
      Swal.fire('Success', 'Thread created successfully', 'success').then(() => {
        window.location.href = '/'; // Redirect to the homepage after thread creation
      });
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Failed to create thread', 'error');
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Create thread</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-gray-300 rounded-full w-full px-4 py-2 mb-4"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border border-gray-300 rounded-xl w-full px-4 py-2 mb-4"
        />
        <button type="submit" className="bg-purple-600 text-white rounded-full px-4 py-2">Create Thread</button>
      </form>
    </div>
  );
}
