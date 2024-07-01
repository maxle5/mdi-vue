
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatVerticalAlignCenter from "../../src/components/MdiFormatVerticalAlignCenter.vue";

test("MdiFormatVerticalAlignCenter snapshot", () => {
  const wrapper = mount(MdiFormatVerticalAlignCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
