
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterTiltShift from "../../src/components/MdiImageFilterTiltShift.vue";

test("MdiImageFilterTiltShift snapshot", () => {
  const wrapper = mount(MdiImageFilterTiltShift, {});
  expect(wrapper.html()).toMatchSnapshot();
});
