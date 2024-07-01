
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWashingMachine from "../../src/components/MdiWashingMachine.vue";

test("MdiWashingMachine snapshot", () => {
  const wrapper = mount(MdiWashingMachine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
