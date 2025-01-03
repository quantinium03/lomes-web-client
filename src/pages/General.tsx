import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder, Server, Lock } from "lucide-react";

const MediaServerSettings = () => {
  const [mediaFolders, setMediaFolders] = useState([
    { type: 'Movies', path: '/home/quantinium/Movies' },
    { type: 'TV Shows', path: '/home/quantinium/TV' },
    { type: 'Anime', path: '/home/quantinium/Anime' },
    { type: 'Music', path: '/home/quantinium/Music' },
  ]);

  const [serverConfig, setServerConfig] = useState({
    serverName: 'Lomes',
    port: 6969,
    transcoding: true,
    libraryScanInterval: 60,
    externalAccess: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    authentication: true,
    allowAnonymous: false,
    remoteAccess: false
  });

  const addMediaFolder = () => {
    setMediaFolders([...mediaFolders, { type: '', path: '' }]);
  };

  const updateMediaFolder = (index, field, value) => {
    const updatedFolders = [...mediaFolders];
    updatedFolders[index][field] = value;
    setMediaFolders(updatedFolders);
  };

  const removeMediaFolder = (index) => {
    const updatedFolders = mediaFolders.filter((_, i) => i !== index);
    setMediaFolders(updatedFolders);
  };


  return (
    <>
      <div className= "flex justify-center text-white p-6">
        <div className="max-w-max mx-auto space-y-6">
          <h1 className="text-3xl font-bold mb-6">Media Server Settings</h1>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="mr-2" /> Server Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="">Server Name</Label>
                  <Input
                    className=""
                    value={serverConfig.serverName}
                    onChange={(e) => setServerConfig({ ...serverConfig, serverName: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="dark:text-gray-300">Port</Label>
                  <Input
                    type="number"
                    className=""
                    value={serverConfig.port}
                    onChange={(e) => setServerConfig({ ...serverConfig, port: parseInt(e.target.value) })}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={serverConfig.transcoding}
                    onCheckedChange={(checked) => setServerConfig({ ...serverConfig, transcoding: checked })}
                  />
                  <Label className="dark:text-gray-300">Enable Transcoding</Label>
                </div>
                <div>
                  <Label className="dark:text-gray-300">Library Scan Interval (minutes)</Label>
                  <Input
                    type="number"
                    className=""
                    value={serverConfig.libraryScanInterval}
                    onChange={(e) => setServerConfig({ ...serverConfig, libraryScanInterval: parseInt(e.target.value) })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center dark:text-white">
                <Folder className="mr-2" /> Media Folders
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mediaFolders.map((folder, index) => (
                <div key={index} className="flex space-x-2 mb-2">
                  <Select
                    value={folder.type}
                    onValueChange={(value) => updateMediaFolder(index, 'type', value)}
                  >
                    <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <SelectValue placeholder="Media Type" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectItem value="Movies" className="dark:hover:bg-gray-700">Movies</SelectItem>
                      <SelectItem value="TV Shows" className="dark:hover:bg-gray-700">TV Shows</SelectItem>
                      <SelectItem value="Music" className="dark:hover:bg-gray-700">Music</SelectItem>
                      <SelectItem value="Anime" className="dark:hover:bg-gray-700">Anime</SelectItem>
                      <SelectItem value="Other" className="dark:hover:bg-gray-700">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Folder Path"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={folder.path}
                    onChange={(e) => updateMediaFolder(index, 'path', e.target.value)}
                  />
                  <Button
                    variant="destructive"
                    onClick={() => removeMediaFolder(index)}
                    className="dark:bg-red-600 dark:hover:bg-red-700"
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                onClick={addMediaFolder}
                className="mt-2 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Add Media Folder
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center dark:text-white">
                <Lock className="mr-2" /> Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={securitySettings.authentication}
                  onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, authentication: checked })}
                />
                <Label className="dark:text-gray-300">Enable Authentication</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={securitySettings.allowAnonymous}
                  onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, allowAnonymous: checked })}
                />
                <Label className="dark:text-gray-300">Allow Anonymous Access</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={securitySettings.remoteAccess}
                  onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, remoteAccess: checked })}
                />
                <Label className="dark:text-gray-300">Enable Remote Access</Label>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaServerSettings;


