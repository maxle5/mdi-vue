
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBrakeLowPressure from "../../src/components/MdiCarBrakeLowPressure.vue";

test("MdiCarBrakeLowPressure snapshot", () => {
  const wrapper = mount(MdiCarBrakeLowPressure, {});
  expect(wrapper.html()).toMatchSnapshot();
});
