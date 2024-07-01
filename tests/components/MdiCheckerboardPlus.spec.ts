
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckerboardPlus from "../../src/components/MdiCheckerboardPlus.vue";

test("MdiCheckerboardPlus snapshot", () => {
  const wrapper = mount(MdiCheckerboardPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
