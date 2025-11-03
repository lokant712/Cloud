import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const AlternativeActions = () => {
  return (
    <div className="text-center">
      <p className="text-sm text-text-secondary mb-4">
        Don't have an account?{' '}
        <Link 
          to="/user-registration" 
          className="text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Create one here
        </Link>
      </p>
    </div>
  );
};

export default AlternativeActions;