import _2L from "./aisc-2L-english.json";
import _C from "./aisc-C-english.json";
import _HP from "./aisc-HP-english.json";
import _HSS from "./aisc-HSS-english.json";
import _L from "./aisc-L-english.json";
import _M from "./aisc-M-english.json";
import _MC from "./aisc-MC-english.json";
import _MT from "./aisc-MT-english.json";
import _PIPE from "./aisc-PIPE-english.json";
import _S from "./aisc-S-english.json";
import _ST from "./aisc-ST-english.json";
import _W from "./aisc-W-english.json";
import _WT from "./aisc-WT-english.json";

import type { AiscType, AiscShape } from "./types";

const ENGLISH = {
	"2L": _2L,
	C: _C,
	HP: _HP,
	HSS: _HSS,
	L: _L,
	M: _M,
	MC: _MC,
	MT: _MT,
	PIPE: _PIPE,
	S: _S,
	ST: _ST,
	W: _W,
	WT: _WT
} as Record<AiscType, AiscShape[]>;

export default ENGLISH;
