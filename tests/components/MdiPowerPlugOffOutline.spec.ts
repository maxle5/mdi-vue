
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerPlugOffOutline from "../../src/components/MdiPowerPlugOffOutline.vue";

test("MdiPowerPlugOffOutline snapshot", () => {
  const wrapper = mount(MdiPowerPlugOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
