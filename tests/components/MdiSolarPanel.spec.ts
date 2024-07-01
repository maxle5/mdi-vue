
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSolarPanel from "../../src/components/MdiSolarPanel.vue";

test("MdiSolarPanel snapshot", () => {
  const wrapper = mount(MdiSolarPanel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
