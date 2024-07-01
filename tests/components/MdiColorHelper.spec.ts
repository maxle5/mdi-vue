
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiColorHelper from "../../src/components/MdiColorHelper.vue";

test("MdiColorHelper snapshot", () => {
  const wrapper = mount(MdiColorHelper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
