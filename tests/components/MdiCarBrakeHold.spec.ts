
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBrakeHold from "../../src/components/MdiCarBrakeHold.vue";

test("MdiCarBrakeHold snapshot", () => {
  const wrapper = mount(MdiCarBrakeHold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
