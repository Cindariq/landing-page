/**
 * Loader3 — 3D falling-boxes animation used as hero decoration.
 *
 * Pure CSS animation — no client state required.
 * Keyframes and static styles live in app/globals.css.
 * Mask is handled via ::before/::after pseudo-elements on .loader-3.
 *
 * Brand colours used:
 *   ember  #b8472d / #d4643e — box faces (--primary / --primary-light)
 *   cinder #2a2a2e           — mask planes (--clr, matches hero bg)
 */
export function Loader3() {
  return (
    <div className="loader-3" aria-hidden="true">
      <div className="box box0">
        <div />
      </div>
      <div className="box box1">
        <div />
      </div>
      <div className="box box2">
        <div />
      </div>
      <div className="box box3">
        <div />
      </div>
      <div className="box box4">
        <div />
      </div>
      <div className="box box5">
        <div />
      </div>
      <div className="box box6">
        <div />
      </div>
      <div className="box box7">
        <div />
      </div>
      <div className="ground">
        <div />
      </div>
    </div>
  );
}
