import '../../styles/timeline.scss'

import React, { PropsWithChildren, useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import { Box, Typography } from '@mui/material';
import { Mark } from '@mui/material/Slider/useSlider.types';

import { TimeLineSettings } from '../../settings/TimeLineSettings';
import { useWayContext } from '../../../../context/way/way_context';

import WayCounter from '../../WayCounter';
import { WayStage } from '../../settings/interface/IWaySettings';

interface TimeLineProps {
    way_obj: WayCounter,
    max: number
}

interface TimeLineStages {
    [key: string]: {
        distance: number
        value: number
    }
}

const MapTimeLine: React.FC<PropsWithChildren<TimeLineProps>> = ({way_obj, max}) => {
    const {value, setValue, stage, setDistance} = useWayContext()

    const one_step = way_obj.total_distance() / max

    const marks: Mark[] = way_obj.get_stages().map(stage => ({
        label: stage.name,
        value: max / (way_obj.total_distance() / stage.distance)
    }))

    const handleChange = (event: Event, newValue: number | number[]) => {
        const new_value = newValue as number
        
        setDistance(one_step * new_value)
        setValue(new_value)
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