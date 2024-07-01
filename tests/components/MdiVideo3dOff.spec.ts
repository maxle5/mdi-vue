
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideo3dOff from "../../src/components/MdiVideo3dOff.vue";

test("MdiVideo3dOff snapshot", () => {
  const wrapper = mount(MdiVideo3dOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
