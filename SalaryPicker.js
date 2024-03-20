import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Switch } from '@mui/material';

const SalaryPicker = () => {
    const [salaryType, setSalaryType] = useState('');
    const [salaryValue, setSalaryValue] = useState(0);
    const [fixedRate, setFixedRate] = useState(true); 
    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(0);
    const [isSetRange, setIsSetRange] = useState(false);
    const [error, setError] = useState('');

    const salaryTypesDefaultRates = [
        {
            type: "hourly",
            fixedRate: 24,
            range: {
                min: 24,
                max: 32,
            },
        },
        {
            type: "monthly",
            fixedRate: 3600,
            range: {
                min: 2600,
                max: 3600,
            },
        },
        {
            type: "annual",
            fixedRate: 80000,
            range: {
                min: 70000,
                max: 90000,
            },
        },
    ];

    const handleSalaryTypeChange = (event) => {
        setSalaryType(event.target.value);
        setSalaryValue(salaryTypesDefaultRates.find(rate => rate.type === event.target.value).fixedRate);
        setMinRange(salaryTypesDefaultRates.find(rate => rate.type === event.target.value).range.min);
        setMaxRange(salaryTypesDefaultRates.find(rate => rate.type === event.target.value).range.max);
    };

    const handleToggleChange = () => {
        if (fixedRate) {
            setIsSetRange(true);
        } else {
            setIsSetRange(false);
        }
        setFixedRate(!fixedRate);
    };

    const handleSave = () => {
        if ((isSetRange && (salaryValue < minRange || salaryValue > maxRange)) || (!isSetRange && (salaryValue !== minRange))) {
            setError('Error: please enter correct value');
        } else {
            setError('');
            console.log('Changes saved:', salaryType, salaryValue, fixedRate);
        }
    };

    const handleCancel = () => {
        setError('');
        console.log('Changes canceled');
    };

    return (
        <div>
            <FormControl style={{ width: '200px' }}>
                <InputLabel id="salary-type-label">Salary Type</InputLabel>
                <Select
                    labelId="salary-type-label"
                    value={salaryType}
                    onChange={handleSalaryTypeChange}
                    style={{ width: '100%' }}
                >
                    {salaryTypesDefaultRates.map(rate => (
                        <MenuItem key={rate.type} value={rate.type}>{rate.type}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {salaryType && (
                <>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p>Fixed Range</p>

                        <Switch
                            checked={isSetRange && !fixedRate}
                            onChange={handleToggleChange}
                            inputProps={{ 'aria-label': 'toggle button' }}
                        />

                        <p>Set Range</p>
                    </div>

                    {isSetRange ? (
                        <>
                            <TextField
                                label="Min Salary Value"
                                value={minRange}
                                onChange={(event) => setMinRange(parseFloat(event.target.value))}
                            />
                            <TextField
                                label="Max Salary Value"
                                value={maxRange}
                                onChange={(event) => setMaxRange(parseFloat(event.target.value))}
                            />
                        </>
                    ) : (
                        <TextField
                            label="Salary Value"
                            value={salaryValue}
                            onChange={(event) => setSalaryValue(parseFloat(event.target.value))}
                        />
                    )}

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                    <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
                </>
            )}
        </div>
    );
};

export default SalaryPicker;