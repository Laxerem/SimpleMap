import '../../styles/timeline.scss'
import { TimeLineSettings } from '../../settings/TimeLineSettings';

import React, { PropsWithChildren, useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import { Box, Typography } from '@mui/material';
import { useMapContext } from '../../../../context/map/map_context';

import WayCounter from '../../WayCounter';
import { WayStage } from '../../settings/interface/IWaySettings';
import { Mark } from '@mui/material/Slider/useSlider.types';

interface TimeLineProps {
    way_obj: WayCounter,
    max: number
}

const MapTimeLine: React.FC<PropsWithChildren<TimeLineProps>> = ({way_obj, max}) => {
    const [value, setValue] = useState<number>(0);
    const [distance, setDistance] = useState<number>(0);

    const setStage = useMapContext().setStage;
    const stage = useMapContext().stage

    const one_step = way_obj.total_distance() / max

    const marks: Mark[] = way_obj.get_stages().map(stage => ({
        label: stage.name,
        value: 100 / (way_obj.total_distance() / stage.distance)
    }))

    useEffect(() => {
        const stage = way_obj.get_stage_by_distance(distance) as WayStage
        setStage(stage)
    }, [distance])

    const handleChange = (event: Event, newValue: number | number[]) => {
        const new_value = newValue as number

        setDistance(one_step * new_value)
        setValue(new_value);
    }

    return (
        <div className='timeLine_container'>
            <div className='TimeLine'>
                <Box>
                    <Typography id="input-slider" gutterBottom>
                        {stage.name}
                    </Typography>
                    <Slider
                        {...TimeLineSettings.props}
                        max={max}
                        value={value}
                        onChange={handleChange}
                        marks={marks}
                    />
                </Box>
            </div>
        </div>
    )
}

export default MapTimeLine;