import React from 'react';
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton';

const ForgotFooter = ({ handleSubscribe, disabled, sx}) => {
    return (
        <>        
        <div>
            <CustomPrimaryButton 
                label="Send Email"
                onClick={handleSubscribe}
                disabled={disabled}
                sx={sx}
            />
        </div>
        </>
    );
};

export default ForgotFooter;