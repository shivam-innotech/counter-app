import Counter from './Counter';

const CounterGroup = ({ groupId, group }) => {
    const { incrementBy } = group;

    const counterOptions = {
        groupId,
        incrementBy
    };

    return (
        <div >
            {Object.keys(group.counters).map(counterId => (
                <Counter key={counterId} id={counterId} options={counterOptions} counter={group.counters[counterId]} />
            ))}
        </div>
    );
};

export default CounterGroup;