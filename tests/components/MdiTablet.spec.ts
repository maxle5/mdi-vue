
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTablet from "../../src/components/MdiTablet.vue";

test("MdiTablet snapshot", () => {
  const wrapper = mount(MdiTablet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
