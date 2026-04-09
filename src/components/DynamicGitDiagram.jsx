import React from 'react';
import Mermaid from '@theme/Mermaid';

export default function DynamicGitDiagram({ mainBranch = "main", devBranch = "develop", featureBranch = "feature/new" }) {
   const diagramCode = `
     gitGraph
        commit id: "Initial"
        branch ${devBranch}
        checkout ${devBranch}
        commit id: "Setup"
        branch ${featureBranch}
        checkout ${featureBranch}
        commit id: "Feature work"
        checkout ${devBranch}
        merge ${featureBranch}
        checkout ${mainBranch}
        merge ${devBranch}
   `;

   return <Mermaid value={diagramCode} />; }