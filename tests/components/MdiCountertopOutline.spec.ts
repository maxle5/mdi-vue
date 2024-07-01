
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCountertopOutline from "../../src/components/MdiCountertopOutline.vue";

test("MdiCountertopOutline snapshot", () => {
  const wrapper = mount(MdiCountertopOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
