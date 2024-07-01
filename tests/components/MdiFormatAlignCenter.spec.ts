
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatAlignCenter from "../../src/components/MdiFormatAlignCenter.vue";

test("MdiFormatAlignCenter snapshot", () => {
  const wrapper = mount(MdiFormatAlignCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
