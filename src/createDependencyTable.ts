import { ExternalDependency } from './getExternalDependencies';

export const createDependencyTable = (name: string, dependencies: Array<ExternalDependency>): string => {
  return `
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Version</th>
          <th>License</th>
          <th>System(s)</th>
        </tr>
        ${dependencies.map(
          (dep) => `
          <tr>
            <td>${dep.name}</td>
            <td>${dep.version}</td>
            <td>${dep.license}</td>
            <td>${name}</td>
          </tr>
        `
        )}
      </tbody>
    </table>
  `;
};
