import React from 'react';
import {FaEdit, FaWindowClose} from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Tarefas.css';

export default function Tarefas({tarefas, hendleEdit, hendleDelete}) {
	return (
		<ul className="tarefas">
			{tarefas.map((tarefa, index) => (
				<li key={tarefa}>
					{tarefa}
					<span>
						<FaEdit onClick={e => hendleEdit(e, index)} className="edit" />
						<FaWindowClose onClick={e => hendleDelete(e, index)} className="delete"/>
					</span>
				</li>
			))}
		</ul>
	);
}

Tarefas.propTypes = {
	tarefas: PropTypes.array.isRequired,
	hendleEdit: PropTypes.func.isRequired,
	hendleDelete: PropTypes.func.isRequired,
};
