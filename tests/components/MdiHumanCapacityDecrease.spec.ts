
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanCapacityDecrease from "../../src/components/MdiHumanCapacityDecrease.vue";

test("MdiHumanCapacityDecrease snapshot", () => {
  const wrapper = mount(MdiHumanCapacityDecrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
