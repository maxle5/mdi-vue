
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElectricSwitch from "../../src/components/MdiElectricSwitch.vue";

test("MdiElectricSwitch snapshot", () => {
  const wrapper = mount(MdiElectricSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
