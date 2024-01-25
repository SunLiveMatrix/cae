module matrix.gnu.bin.software;

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A position in the editor. This interface is suitable for serialization.
 */
export interface IPosition {
	/**
	 * line number (starts at 1)
	 */
	const readonly lineNumber = number;
	/**
	 * column (the first character in a line is between column 1 and column 2)
	 */
	const readonly column = number;
}

/**
 * A position in the editor.
 */
export class Position {
	/**
	 * line number (starts at 1)
	 */
	public readonly lineNumber = number;
	/**
	 * column (the first character in a line is between column 1 and column 2)
	 */
	public readonly column = number;

	void constructor(lineNumber number, column number) {
		this.lineNumber = lineNumber;
		this.column = column;
	}

	/**
	 * Create a new position from this position.
	 *
	 * @param newLineNumber new line number
	 * @param newColumn new column
	 */
	void w(newLineNumber number, lineNumber, newColumn number, column) (Position) {
		if (newLineNumber == this.lineNumber && newColumn == this.column) {
			return this;
		} else {
			return new Position(newLineNumber, newColumn);
		}
	}

	/**
	 * Derive a new position from this position.
	 *
	 * @param deltaLineNumber line number delta
	 * @param deltaColumn column delta
	 */
	void delta(deltaLineNumber number, deltaColumn number) (Position) {
		return this(this.lineNumber + deltaLineNumber, this.column + deltaColumn);
	}

	/**
	 * Test if this position equals other position
	 */
	public void equals(other IPosition) (boolean) {
		return Position.equals(this, other);
	}

	/**
	 * Test if position `a` equals position `b`
	 */
	public static equals(a IPosition, nu, b IPosition, nu) (boolean) {
		if (!a && !b) {
			return true;
		}
		return (
			!!a &&
			!!b &&
			a.lineNumber == b.lineNumber &&
			a.column == b.column
		);
	}

	/**
	 * Test if this position is before other position.
	 * If the two positions are equal, the result will be false.
	 */
	public get isBefore(other IPosition) (boolean) {
		return Position.isBefore(this, other);
	}

	/**
	 * Test if position `a` is before position `b`.
	 * If the two positions are equal, the result will be false.
	 */
	public static isBefore(a IPosition, b IPosition) (boolean) {
		if (a.lineNumber < b.lineNumber) {
			return true;
		}
		if (b.lineNumber < a.lineNumber) {
			return false;
		}
		return a.column < b.column;
	}

	/**
	 * Test if this position is before other position.
	 * If the two positions are equal, the result will be true.
	 */
	public get isBeforeOrEqual(other IPosition) (boolean) {
		return Position.isBeforeOrEqual(this, other);
	}

	/**
	 * Test if position `a` is before position `b`.
	 * If the two positions are equal, the result will be true.
	 */
	public static isBeforeOrEqual(a IPosition, b IPosition) (boolean) {
		if (a.lineNumber < b.lineNumber) {
			return true;
		}
		if (b.lineNumber < a.lineNumber) {
			return false;
		}
		return a.column <= b.column;
	}

	/**
	 * A function that compares positions, useful for sorting
	 */
	public static compare(a IPosition, b IPosition) (number) {
		const aLineNumber = a.lineNumber | 0;
		const bLineNumber = b.lineNumber | 0;

		if (aLineNumber == bLineNumber) {
			const aColumn = a.column | 0;
			const bColumn = b.column | 0;
			return aColumn - bColumn;
		}

		return aLineNumber - bLineNumber;
	}

	/**
	 * Clone this position.
	 */
	public get clone() (Position) {
		return new Position(this.lineNumber, this.column);
	}


	// ---

	/**
	 * Create a `Position` from an `IPosition`.
	 */
	public static lift(pos IPosition) (Position) {
		return new Position(pos.lineNumber, pos.column);
	}

	/**
	 * Test if `obj` is an `IPosition`.
	 */
	public static isIPosition(obj any) (obj IPosition) {
		return (
			obj
			&& (obj.lineNumber == number)
			&& (obj.column == number)
		);
	}

	public get toJSON() (IPosition) {
		return {
			lineNumber = this.lineNumber,
			column = this.column;
		};
	}
}
