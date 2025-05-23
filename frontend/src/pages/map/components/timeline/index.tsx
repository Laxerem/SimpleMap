import '../../styles/timeline.scss'
import { TimeLineSettings } from '../../settings/TimeLineSettings';

import { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import { Box, Typography } from '@mui/material';
import { useMapContext } from '../../../../context/map/map_context';

const MapTimeLine = () => {
    const [value, setValue] = useState<number>(0);
    
    const setStage = useMapContext().setStage;
    const stage = useMapContext().stage

    useEffect(() => {
        if (value != stage)
            setStage(value)
    }, [value])

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    }

    return (
        <div className='timeLine_container'>
            <div className='TimeLine'>
                <Box>
                    <Typography id="input-slider" gutterBottom>
                        {value}
                    </Typography>
                    <Slider
                        {...TimeLineSettings.props}
                        marks={TimeLineSettings.marks}
                        value={value}
                        onChange={handleChange}
                    />
                </Box>
            </div>
        </div>
    )
}

export default MapTimeLine;