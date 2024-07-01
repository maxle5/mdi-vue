
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHookOff from "../../src/components/MdiHookOff.vue";

test("MdiHookOff snapshot", () => {
  const wrapper = mount(MdiHookOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
