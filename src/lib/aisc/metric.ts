import _2L from "./aisc-2L-metric.json";
import _C from "./aisc-C-metric.json";
import _HP from "./aisc-HP-metric.json";
import _HSS from "./aisc-HSS-metric.json";
import _L from "./aisc-L-metric.json";
import _M from "./aisc-M-metric.json";
import _MC from "./aisc-MC-metric.json";
import _MT from "./aisc-MT-metric.json";
import _PIPE from "./aisc-PIPE-metric.json";
import _S from "./aisc-S-metric.json";
import _ST from "./aisc-ST-metric.json";
import _W from "./aisc-W-metric.json";
import _WT from "./aisc-WT-metric.json";

import type { AiscType, AiscShape } from "./types";

const METRIC = {
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

export default METRIC;
