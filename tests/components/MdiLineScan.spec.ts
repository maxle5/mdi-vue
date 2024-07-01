
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLineScan from "../../src/components/MdiLineScan.vue";

test("MdiLineScan snapshot", () => {
  const wrapper = mount(MdiLineScan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
