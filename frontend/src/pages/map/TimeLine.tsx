import './styles/timeline.scss'

import React, { PropsWithChildren, useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import { Box, Typography } from '@mui/material';
import { Mark } from '@mui/material/Slider/useSlider.types';

import { TimeLineSettings } from './settings/TimeLineSettings';
import { useWayContext } from '../../context/way/way_context';

interface TimeLineProps {
    total_distance: number,
    marks: Mark[]
}

let MAX = 100

const MapTimeLine: React.FC<PropsWithChildren<TimeLineProps>> = ({total_distance, marks}) => {
    const [value, setValue] = useState<number>(0)
    const {distance, setDistance} = useWayContext()

    const one_step = total_distance / 100

    let local_distance = 0

    const handleChange = (_event: Event, newValue: number | number[]) => {
        const new_value = newValue as number
        const new_distance = one_step * new_value

        setValue(new_value)
        setDistance(new_distance)

        local_distance = new_distance
    }

    useEffect(() => {
        if (distance != local_distance) {
            setValue(MAX / (total_distance / distance))
        }
    }, [distance])

    return (
        <div className='timeLine_container'>
            <div className='TimeLine'>
                <Box>
                    <Typography id="input-slider" gutterBottom>
                        {}
                    </Typography>
                    <Slider
                        {...TimeLineSettings.props}
                        max={MAX}
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