import React, {FC, useState} from "react";
import {Autocomplete, Stack, TextField} from "@mui/material";

import {useNavigate} from "react-router-dom";

const SearchBarComponent: FC = (): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState<string | null>("");
    const navigate = useNavigate();

    const test: any[] = ["test", "test1"];
    return (
        <Stack spacing={2} sx={{width: 300}}>
            <Autocomplete
                value={selectedItem}
                onChange={(e: any, value: string | null) => {
                    navigate(`single/${value}`);
                    setSelectedItem(null);
                }}
                renderInput={(element) => (
                    <TextField
                        {...element}
                        label="Поиск"
                        InputProps={{
                            ...element.InputProps,
                            type: "search",
                        }}
                    />
                )}
                options={test}
            />
        </Stack>
    );
};

export default SearchBarComponent;
