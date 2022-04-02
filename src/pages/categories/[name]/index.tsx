import { useRouter } from 'next/router';
import React, { FC } from 'react';

const Products: FC<{}> = () => {
    const router = useRouter();
    const { name } = router.query;

    return(
        <div>
            Products {name}
        </div>
    );
}

export default Products;