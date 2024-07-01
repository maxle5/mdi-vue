
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPyramidOff from "../../src/components/MdiPyramidOff.vue";

test("MdiPyramidOff snapshot", () => {
  const wrapper = mount(MdiPyramidOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
