
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCitySwitch from "../../src/components/MdiCitySwitch.vue";

test("MdiCitySwitch snapshot", () => {
  const wrapper = mount(MdiCitySwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
