
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatVerticalAlignTop from "../../src/components/MdiFormatVerticalAlignTop.vue";

test("MdiFormatVerticalAlignTop snapshot", () => {
  const wrapper = mount(MdiFormatVerticalAlignTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
