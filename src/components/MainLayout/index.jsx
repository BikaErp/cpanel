const MainLayout = ({ children, data }) => {
    return (
        <>
            <div className="max-w-[1536px] h-full w-full mx-auto">
                {data?.currentUser?.fullName}
                {children}
            </div>
        </>
    )
}

export default MainLayout;