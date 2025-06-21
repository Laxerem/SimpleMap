import React, { PropsWithChildren } from "react";

export interface MissionStats {
    distance?: string,
    location?: string,
    date?: string,
    mission_day?: string
}

interface MissionStatsProps {
    summary: MissionStats
}

export const StatusCard: React.FC<PropsWithChildren<MissionStatsProps>> = ({summary}) => {

    return (
        <div className="mission_stats_container">
            <h1>Статус Экспедиции:</h1>
            
        </div>
    )
}