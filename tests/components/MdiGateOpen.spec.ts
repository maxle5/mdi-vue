
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateOpen from "../../src/components/MdiGateOpen.vue";

test("MdiGateOpen snapshot", () => {
  const wrapper = mount(MdiGateOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
