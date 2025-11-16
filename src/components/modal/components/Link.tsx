import { Link as LinkToBreed } from 'react-router-dom';

import C from '../constants';
import styles from '../Modal.module.css';
import type { Breed } from '../../../types';

type LinkProps = {
  breed: Breed | null;
  breedLinkPath: string;
};

const Link = ({ breed, breedLinkPath }: LinkProps) => {
  if (!breed) {
    return;
  }
  return (
    <LinkToBreed to={breedLinkPath} className={styles.breedLink}>
      {C.VIEW_ALL_PREFIX} {breed.name} {C.VIEW_ALL_SUFFIX}
    </LinkToBreed>
  );
};

export default Link;
