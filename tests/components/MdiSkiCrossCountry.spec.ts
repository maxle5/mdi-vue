
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkiCrossCountry from "../../src/components/MdiSkiCrossCountry.vue";

test("MdiSkiCrossCountry snapshot", () => {
  const wrapper = mount(MdiSkiCrossCountry, {});
  expect(wrapper.html()).toMatchSnapshot();
});
