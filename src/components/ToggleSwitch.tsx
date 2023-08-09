import React, {forwardRef} from 'react';

interface ToggleSwitchProps {
    id: string;
    name: string;
    isOn: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(({id, name, isOn, onChange}, ref) => {
    return (
        <div className="c-toggleSwitch">
            <input
                ref={ref}
                className="c-toggleSwitch__input"
                name={name}
                id={id}
                type="checkbox"
                checked={isOn !== undefined ? isOn : false}
                onChange={onChange}
            />

            <div className="c-toggleSwitch__body">
                <label className="c-toggleSwitch__label" htmlFor={id}>
                    <span className="c-toggleSwitch__label_button" />
                </label>
            </div>
        </div>
    );
});

export default ToggleSwitch;
