
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthBoxPlus from "../../src/components/MdiEarthBoxPlus.vue";

test("MdiEarthBoxPlus snapshot", () => {
  const wrapper = mount(MdiEarthBoxPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
