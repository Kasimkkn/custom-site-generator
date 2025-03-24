import React from 'react';
import { func, object } from "prop-types";

const ProjectDetailsModal = ({ onSave, setProjectDetails, projectDetails }) => {
    const handleFolderSelect = (e) => {
        const fileInput = e.target;
        if (fileInput.files && fileInput.files[0]) {
            // Get the directory path using webkitRelativePath
            const path = fileInput.files[0].webkitRelativePath;
            // Extract the base directory path by removing the file name
            const directoryPath = path.split('/')[0];
            setProjectDetails({
                ...projectDetails,
                projectPath: directoryPath
            });
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            <div className="flex flex-col gap-2">
                <label htmlFor="projectName">Project Name</label>
                <input
                    label="Project Name"
                    value={projectDetails.projectName}
                    onChange={(e) => setProjectDetails({
                        ...projectDetails,
                        projectName: e.target.value
                    })}
                    id="projectName"
                    placeholder="Project Name"
                    className="w-full px-3 py-2 border border-text rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="projectPath">Project Path</label>
                <div className="flex gap-2">
                    <input
                        label="Project Path"
                        value={projectDetails.projectPath}
                        onChange={(e) => setProjectDetails({
                            ...projectDetails,
                            projectPath: e.target.value
                        })}
                        id="projectPath"
                        placeholder="Project Path"
                        className="w-full px-3 py-2 border border-text rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        readOnly
                    />
                    <div className="relative">
                        <input
                            type="file"
                            webkitdirectory="true"
                            directory="true"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFolderSelect}
                        />
                        <button
                            type="button"
                            className="h-full px-4 bg-primary text-background rounded-md flex items-center gap-2"
                        >
                            {/* <FolderOpen className="w-4 h-4" /> */}
                            Browse
                        </button>
                    </div>
                </div>
            </div>
            <button
                className="bg-primary text-background font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                onClick={onSave}
            >
                Save
            </button>
        </div>
    );
};

ProjectDetailsModal.propTypes = {
    onSave: func,
    setProjectDetails: func,
    projectDetails: object
};

export default ProjectDetailsModal;