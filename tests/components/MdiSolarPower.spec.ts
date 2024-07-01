
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSolarPower from "../../src/components/MdiSolarPower.vue";

test("MdiSolarPower snapshot", () => {
  const wrapper = mount(MdiSolarPower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
