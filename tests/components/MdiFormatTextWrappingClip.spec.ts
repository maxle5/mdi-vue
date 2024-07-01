
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextWrappingClip from "../../src/components/MdiFormatTextWrappingClip.vue";

test("MdiFormatTextWrappingClip snapshot", () => {
  const wrapper = mount(MdiFormatTextWrappingClip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
