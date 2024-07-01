
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatAlignBottom from "../../src/components/MdiFormatAlignBottom.vue";

test("MdiFormatAlignBottom snapshot", () => {
  const wrapper = mount(MdiFormatAlignBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
