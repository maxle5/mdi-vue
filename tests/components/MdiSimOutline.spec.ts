
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSimOutline from "../../src/components/MdiSimOutline.vue";

test("MdiSimOutline snapshot", () => {
  const wrapper = mount(MdiSimOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
