import React from 'react';
import ProfilerHOC from '../../ProfilerHOC';
import { DriverInfoProps } from '../../utils/types';


class DriverInfo extends React.Component<DriverInfoProps> {

  render() {
    const { data } = this.props;
    return (
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">First Name</th>
              <th className="border border-gray-300 px-4 py-2">Last Name</th>
              <th className="border border-gray-300 px-4 py-2">Full Name</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">Country</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.firstName}</td>
                <td className="border border-gray-300 px-4 py-2">{item.lastName}</td>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.age}</td>
                <td className="border border-gray-300 px-4 py-2">{item.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProfilerHOC(DriverInfo, "DriverInfo")