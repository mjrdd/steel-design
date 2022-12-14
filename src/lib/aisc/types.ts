export type AiscUnits = "english" | "metric";

export type AiscType =
	| "2L"
	| "C"
	| "HP"
	| "HSS"
	| "L"
	| "M"
	| "MT"
	| "MC"
	| "PIPE"
	| "S"
	| "ST"
	| "W"
	| "WT";

export interface AiscShape {
	Type: AiscType;
	EDI_Std_Nomenclature: string;
	AISC_Manual_Label: string;
	T_F: boolean;
	W: number;
	A: number;
	d: number | string;
	ddet: number | string;
	Ht: number | string;
	h: number | string;
	OD: number | string;
	bf: number | string;
	bfdet: number | string;
	B: number | string;
	b: number | string;
	ID: number | string;
	tw: number | string;
	twdet: number | string;
	"twdet/2": number | string;
	tf: number | string;
	tfdet: number | string;
	t: number | string;
	tnom: number | string;
	tdes: number | string;
	kdes: number | string;
	kdet: number | string;
	k1: number | string;
	x: number | string;
	y: number | string;
	eo: number | string;
	xp: number | string;
	yp: number | string;
	"bf/2tf": number | string;
	"b/t": number | string;
	"b/tdes": number | string;
	"h/tw": number | string;
	"h/tdes": number | string;
	"D/t": number | string;
	Ix: number;
	Zx: number;
	Sx: number;
	rx: number;
	Iy: number;
	Zy: number;
	Sy: number;
	ry: number;
	Iz: number | string;
	rz: number | string;
	Sz: number | string;
	J: number | string;
	Cw: number | string;
	C: number | string;
	Wno: number | string;
	Sw1: number | string;
	Sw2: number | string;
	Sw3: number | string;
	Qf: number | string;
	Qw: number | string;
	ro: number | string;
	H: number | string;
	"tan(a)": number | string;
	Iw: number | string;
	zA: number | string;
	zB: number | string;
	zC: number | string;
	wA: number | string;
	wB: number | string;
	wC: number | string;
	SwA: number | string;
	SwB: number | string;
	SwC: number | string;
	SzA: number | string;
	SzB: number | string;
	SzC: number | string;
	rts: number | string;
	ho: number | string;
	PA: number | string;
	PA2: number | string;
	PB: number | string;
	PC: number | string;
	PD: number | string;
	T: number | string;
	WGi: number | string;
	WGo: number | string;
}
