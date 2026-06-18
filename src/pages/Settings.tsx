import { useState } from "react";

type SettingsType = {
  websiteLead: boolean;
  assignedTask: boolean;
  overdueTask: boolean;
  followupReminder: boolean;
};

export default function Settings() {
  const [settings, setSettings] = useState<SettingsType>({
    websiteLead: true,
    assignedTask: true,
    overdueTask: false,
    followupReminder: true,
  });

  const toggle = (key: keyof SettingsType) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="p-4">
      <h2>Settings</h2>

      {Object.keys(settings).map((key) => (
        <div key={key}>
          <label>
            <input
              type="checkbox"
              checked={settings[key as keyof SettingsType]}
              onChange={() => toggle(key as keyof SettingsType)}
            />
            {key}
          </label>
        </div>
      ))}
    </div>
  );
}
