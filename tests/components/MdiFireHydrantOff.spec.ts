
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireHydrantOff from "../../src/components/MdiFireHydrantOff.vue";

test("MdiFireHydrantOff snapshot", () => {
  const wrapper = mount(MdiFireHydrantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
