
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScaleOff from "../../src/components/MdiScaleOff.vue";

test("MdiScaleOff snapshot", () => {
  const wrapper = mount(MdiScaleOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
