
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiameter from "../../src/components/MdiDiameter.vue";

test("MdiDiameter snapshot", () => {
  const wrapper = mount(MdiDiameter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
