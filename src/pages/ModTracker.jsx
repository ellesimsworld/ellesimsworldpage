import React from 'react';
import trackerData from '@/data/mod-tracker.json';
import { format } from 'date-fns';

const statusStyles = {
  Broken: 'bg-red-100 text-red-800 border-red-200',
  Compatible: 'bg-green-100 text-green-800 border-green-200',
  Updated: 'bg-blue-100 text-blue-800 border-blue-200',
  Retired: 'bg-gray-200 text-gray-600 border-gray-300',
};

export default function ModTracker() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-lora text-3xl font-semibold tracking-wide mb-2">Mod Tracker</h1>
      <p className="font-lora text-sm text-muted-foreground mb-4">
        Check the current compatibility status of each mod.
      </p>
      
      <div className="mb-10">
        <span className="inline-block font-lora text-xs tracking-wide px-3 py-1.5 rounded-full border bg-blue-50 text-blue-800 border-blue-200">
          Current Game Version: 1.122.218.1030
        </span>
      </div>

      {trackerData.length === 0 ? (
        <p className="text-muted-foreground text-sm italic text-center py-20">
          No tracker entries yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="font-lora text-xs tracking-widest uppercase text-muted-foreground text-left py-3 pr-4">
                  Mod
                </th>
                <th className="font-lora text-xs tracking-widest uppercase text-muted-foreground text-left py-3 pr-4">
                  Last Updated
                </th>
                <th className="font-lora text-xs tracking-widest uppercase text-muted-foreground text-left py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {trackerData.map((entry, index) => (
                <tr key={index} className="border-b border-border/20">
                  <td className="font-lora text-sm py-4 pr-4">{entry.mod_name}</td>
                  <td className="font-lora text-sm text-muted-foreground py-4 pr-4">
                    {entry.last_updated
                      ? format(new Date(entry.last_updated), 'MMM d, yyyy')
                      : '—'}
                  </td>
                  <td className="py-4">
                    <span
                      className={`inline-block font-lora text-xs tracking-wide px-3 py-1 rounded-full border ${
                        statusStyles[entry.status] || 'bg-secondary text-foreground'
                      }`}
                    >
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}