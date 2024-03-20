import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const EditableFields = () => {
    const [editMode, setEditMode] = useState(false);
    const [values, setValues] = useState({
        field1: ' ',
        field2: ' ',
        field3: ' '
    });

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {

        setEditMode(false);
    };

    const handleCancel = () => {

        setEditMode(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
                <TextField
                    name="field1"
                    label="First Name"
                    value={values.field1}
                    onChange={handleChange}
                    disabled={!editMode}
                    fullWidth
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    name="field2"
                    label="Last Name"
                    value={values.field2}
                    onChange={handleChange}
                    disabled={!editMode}
                    fullWidth
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    name="field3"
                    label="Occupation"
                    value={values.field3}
                    onChange={handleChange}
                    disabled={!editMode}
                    fullWidth
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                {editMode ? (
                    <>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<SaveIcon />}
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<CancelIcon />}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>
                )}
            </Grid>
        </Grid>
    );
};

export default EditableFields;
