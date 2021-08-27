/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface Text3dMarquee {
    }
    interface Text3dSimple {
    }
    interface TextAnimWave {
    }
    interface TextGlow {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLText3dMarqueeElement extends Components.Text3dMarquee, HTMLStencilElement {
    }
    var HTMLText3dMarqueeElement: {
        prototype: HTMLText3dMarqueeElement;
        new (): HTMLText3dMarqueeElement;
    };
    interface HTMLText3dSimpleElement extends Components.Text3dSimple, HTMLStencilElement {
    }
    var HTMLText3dSimpleElement: {
        prototype: HTMLText3dSimpleElement;
        new (): HTMLText3dSimpleElement;
    };
    interface HTMLTextAnimWaveElement extends Components.TextAnimWave, HTMLStencilElement {
    }
    var HTMLTextAnimWaveElement: {
        prototype: HTMLTextAnimWaveElement;
        new (): HTMLTextAnimWaveElement;
    };
    interface HTMLTextGlowElement extends Components.TextGlow, HTMLStencilElement {
    }
    var HTMLTextGlowElement: {
        prototype: HTMLTextGlowElement;
        new (): HTMLTextGlowElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "text-3d-marquee": HTMLText3dMarqueeElement;
        "text-3d-simple": HTMLText3dSimpleElement;
        "text-anim-wave": HTMLTextAnimWaveElement;
        "text-glow": HTMLTextGlowElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface Text3dMarquee {
    }
    interface Text3dSimple {
    }
    interface TextAnimWave {
    }
    interface TextGlow {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "text-3d-marquee": Text3dMarquee;
        "text-3d-simple": Text3dSimple;
        "text-anim-wave": TextAnimWave;
        "text-glow": TextGlow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "text-3d-marquee": LocalJSX.Text3dMarquee & JSXBase.HTMLAttributes<HTMLText3dMarqueeElement>;
            "text-3d-simple": LocalJSX.Text3dSimple & JSXBase.HTMLAttributes<HTMLText3dSimpleElement>;
            "text-anim-wave": LocalJSX.TextAnimWave & JSXBase.HTMLAttributes<HTMLTextAnimWaveElement>;
            "text-glow": LocalJSX.TextGlow & JSXBase.HTMLAttributes<HTMLTextGlowElement>;
        }
    }
}
