function Wrapper({children, left, right}) {
    const style = {
        paddingLeft: left,
        paddingRight: right,
    };

    // 해당 항목에 추가해준다.
    return <div style={style}>{children}</div>
}

export default Wrapper;