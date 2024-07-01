
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerPlugOutline from "../../src/components/MdiPowerPlugOutline.vue";

test("MdiPowerPlugOutline snapshot", () => {
  const wrapper = mount(MdiPowerPlugOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
