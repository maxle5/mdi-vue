
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterBoilerAuto from "../../src/components/MdiWaterBoilerAuto.vue";

test("MdiWaterBoilerAuto snapshot", () => {
  const wrapper = mount(MdiWaterBoilerAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
