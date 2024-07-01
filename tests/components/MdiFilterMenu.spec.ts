
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterMenu from "../../src/components/MdiFilterMenu.vue";

test("MdiFilterMenu snapshot", () => {
  const wrapper = mount(MdiFilterMenu, {});
  expect(wrapper.html()).toMatchSnapshot();
});
