import cn from 'classnames';
import React, { forwardRef } from 'react';

export const Alert: React.FC<any> = forwardRef(({ children, severity, icon, ...props }, ref) => {
    const IconComponent = icon;

    return (
        <div
            ref={ref}
            className="flex items-center mx-10 px-4 py-2 bg-ios-800 bg-opacity-70 text-gray-300 shadow-md rounded-lg "
            {...props}
        >
            {icon ? (
                <IconComponent className={`text-white h-12 w-12 p-1 rounded-xl shrink-0 mr-2`} />
            ) : (
                <div
                    className={cn(`flex-none h-10 w-10 rounded-lg mr-3`, {
                        'bg-green-500': severity === 'success',
                        'bg-red-500': severity !== 'success',
                    })}
                />
            )}
            <div className="flex-grow">{children}</div>
        </div>
    );
});

export default Alert;
