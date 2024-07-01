
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressHelper from "../../src/components/MdiProgressHelper.vue";

test("MdiProgressHelper snapshot", () => {
  const wrapper = mount(MdiProgressHelper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
