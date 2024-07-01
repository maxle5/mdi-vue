
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNavigationOutline from "../../src/components/MdiNavigationOutline.vue";

test("MdiNavigationOutline snapshot", () => {
  const wrapper = mount(MdiNavigationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
