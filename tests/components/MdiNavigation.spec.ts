
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNavigation from "../../src/components/MdiNavigation.vue";

test("MdiNavigation snapshot", () => {
  const wrapper = mount(MdiNavigation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
