import { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import './timeline.scss'
import { useMapContext } from '../../../context/map/map_context';

const marks = [
    {
        value: 0,
        label: 'Начало',
    },
    {
        value: 1,
        label: 'Сложности',
    },
    {
        value: 2,
        label: 'Продолжение',
    },
    {
        value: 3,
        label: 'Финал',
    },
];

const timeLineStyle: SxProps<Theme> = {
    '.MuiSlider-markLabel': {
        color: 'white'
    }
}

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
                        aria-labelledby="time_line"
                        value={value}
                        onChange={handleChange}
                        min={0}
                        max={4}
                        marks={marks}
                        sx={timeLineStyle}
                    />
                </Box>
            </div>
        </div>
    )
}

export default MapTimeLine;