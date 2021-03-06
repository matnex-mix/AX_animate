/** *
*
*	AXE v1.0.0 and is a lightweight javascript library for creating animations
*	Lear more about AXE <https://github.com/matnex-mix/AXE.JS/wiki/Introduction>
*	Copyright (C) <2019>  <Jolaosho AbdulMateen (Matnex Mix)>

*	This program is free software: you can redistribute it and/or modify
*	it under the terms of the GNU General Public License as published by
*	the Free Software Foundation, either version 3 of the License, or
*	(at your option) any later version.

*	This program is distributed in the hope that it will be useful,
*	but WITHOUT ANY WARRANTY; without even the implied warranty of
*	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*	GNU General Public License for more details.

*	You should have received a copy of the GNU General Public License
*	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
** */

/* Define All AXE Easy Animations */
/* Default animations encoded in base64 view with $xeasy = JSON.parse(atob("TEXT_HERE"));
**
	eyJib3VuY2UiOnsiYSI6IkFUMCUgdDogdFktLTEwMCU7IG86IDA7IEFUNSUgdDogdFktLTEwMCUgbzogMDsgQVQxNSUgdDogdFktMDsgcEI6IDU
	7IEFUMzAlIHQ6IHRZLS01MCU7IEFUNDAlIHQ6IHRZLTA7IHBCOiA2OyBBVDUwJSB0OiB0WS0tMzAlOyBBVDcwJSB0OiB0WS0wOyBwQjogN3B4OyB
	BVDgwJSB0OiB0WS0tMTUlOyBBVDkwJSB0OiB0WS0wOyBwYjogNzsgQVQ5NSUgdDogdFktLTclOyBBVDk3JSB0OiB0WS0wOyBwQjogOTsgQVQ5OSU
	gdDogdFktLTMlOyBBVDEwMCUgdDogdFktMDsgcEI6IDk7ICIsIm4iOiJib3VuY2UiLCJ0IjozLCJmIjoiZWFzZS1vdXQifX0=
**
*/
$xeasy = {
	"bounce": {
		a: "AT0% t: tY--100%; o: 0; AT5% t: tY--100% o: 0; AT15% t: tY-0; pB: 5; AT30% t: tY--50%; AT40% t: tY-0; pB: 6; AT50% t: tY--30%; AT70% t: tY-0; pB: 7px; AT80% t: tY--15%; AT90% t: tY-0; pb: 7; AT95% t: tY--7%; AT97% t: tY-0; pB: 9; AT99% t: tY--3%; AT100% t: tY-0; pB: 9;",
		n: "bounce",
		t: 3,
		f: "ease-out"
	},
	"pop": {
		a: "AT0% t: s-1; AT100% t: s-1.2; ",
		n: "pop",
		t: .2,
		m: "forwards",
		ini: function ($set) {
			if($set.animation) $set.ini = this.ini;
			else if($set.start) {
				$set.moment("restart, mouseover");
				$set.moment("end, mouseout");
			}
		}
	}
}