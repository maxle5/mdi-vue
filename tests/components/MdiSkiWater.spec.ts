
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkiWater from "../../src/components/MdiSkiWater.vue";

test("MdiSkiWater snapshot", () => {
  const wrapper = mount(MdiSkiWater, {});
  expect(wrapper.html()).toMatchSnapshot();
});
