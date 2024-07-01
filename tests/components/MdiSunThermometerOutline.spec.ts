
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunThermometerOutline from "../../src/components/MdiSunThermometerOutline.vue";

test("MdiSunThermometerOutline snapshot", () => {
  const wrapper = mount(MdiSunThermometerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
