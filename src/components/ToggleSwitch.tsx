import React from 'react';

interface ToggleSwitchProps {
    id: string;
    name: string;
    isOn: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ToggleSwitch({id, name, isOn, onChange}: ToggleSwitchProps): JSX.Element {
    return (
        <div className="c-toggleSwitch">
            <input className="c-toggleSwitch__input" name={name} id={id} type="checkbox" checked={isOn} onChange={onChange} />

            <div className="c-toggleSwitch__body">
                <label className="c-toggleSwitch__label" htmlFor={id}>
                    <span className="c-toggleSwitch__label_button" />
                </label>
            </div>
        </div>
    );
}

export default ToggleSwitch;
