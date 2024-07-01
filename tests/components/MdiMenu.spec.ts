
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenu from "../../src/components/MdiMenu.vue";

test("MdiMenu snapshot", () => {
  const wrapper = mount(MdiMenu, {});
  expect(wrapper.html()).toMatchSnapshot();
});
