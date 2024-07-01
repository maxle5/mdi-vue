
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMopedElectricOutline from "../../src/components/MdiMopedElectricOutline.vue";

test("MdiMopedElectricOutline snapshot", () => {
  const wrapper = mount(MdiMopedElectricOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
