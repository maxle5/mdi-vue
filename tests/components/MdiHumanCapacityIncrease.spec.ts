
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanCapacityIncrease from "../../src/components/MdiHumanCapacityIncrease.vue";

test("MdiHumanCapacityIncrease snapshot", () => {
  const wrapper = mount(MdiHumanCapacityIncrease, {});
  expect(wrapper.html()).toMatchSnapshot();
});
