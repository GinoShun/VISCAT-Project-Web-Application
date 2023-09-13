import React from 'react';
import { styled } from '@mui/system';

const Wrapper = styled('div')({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
})

const Label = styled("p") ({
    color: "#2a9d8f",
    textTransform: "uppercase",
    fontSize: "16px",
    fontWeight: "600"
})

const Input = styled("input") ({
    flexGrow: 1,
    height: "40px",
    border: "1px solid white",
    borderRadius:"5px",
    color: "#2a9d8f",
    background: "#bde0fe",
    margin: 0,
    fontSize: "16px",
    padding: "0 5px",
})

const InputWithLabel = (props) => {

    const { value, setValue, label, type, placeholder} = props;

    const handleValueChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <Wrapper>
            <Label>
                {label}
            </Label>
            <Input 
            value={value}
            onChange={handleValueChange}
            type={type}
            placeholder={placeholder}
            />
        </Wrapper>
    );
};

export default InputWithLabel;