
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatVerticalAlignBottom from "../../src/components/MdiFormatVerticalAlignBottom.vue";

test("MdiFormatVerticalAlignBottom snapshot", () => {
  const wrapper = mount(MdiFormatVerticalAlignBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
