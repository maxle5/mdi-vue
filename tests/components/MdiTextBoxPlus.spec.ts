
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxPlus from "../../src/components/MdiTextBoxPlus.vue";

test("MdiTextBoxPlus snapshot", () => {
  const wrapper = mount(MdiTextBoxPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
