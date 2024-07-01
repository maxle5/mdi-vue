
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterBoilerOff from "../../src/components/MdiWaterBoilerOff.vue";

test("MdiWaterBoilerOff snapshot", () => {
  const wrapper = mount(MdiWaterBoilerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
