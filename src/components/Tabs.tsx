interface TabsProps {
    tabList: string[];
    selectedTab: string;
    text?: string;
    buttons?: JSX.Element;
    handleSelect?: (chip: string) => void;
}

const Tabs = ({tabList, selectedTab, text, buttons, handleSelect}: TabsProps): JSX.Element => {
    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>): void => {
        handleSelect && handleSelect(e.currentTarget.value);
    };

    return (
        <div className="c-tabs">
            {text && text}
            {tabList.map((tab, i) => (
                <button
                    key={i}
                    className={`c-tabs__tab cursor-p ${selectedTab === tab && 'c-tabs__tab--active'}`}
                    value={tab}
                    onClick={(e) => handleToggle(e)}
                >
                    {tab}
                </button>
            ))}
            {buttons}
        </div>
    );
};

export default Tabs;
