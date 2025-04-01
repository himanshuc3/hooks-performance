import React, {Profiler} from 'react';
import { DriverInfoProps } from '../utils/types';

function renderObjectToTable(data: object){
    console.table(Object.keys(data).map(key => ({key, value: data[key]})))
}

function ReactProfiler (Component: React.ComponentType<DriverInfoProps>, id: string) {
    function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        console.log(id)
        renderObjectToTable({id, phase, actualDuration, baseDuration, diffCommitTime: commitTime - startTime})
    }
    return function WrappedComponent(props: any) {  
        return (
            <Profiler id={id} onRender={onRender}>
                {/* @ts-ignore */}
                <Component {...props}/>
            </Profiler>
        )
    }
    
}

export default ReactProfiler