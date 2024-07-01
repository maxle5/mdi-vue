
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardTextOutline from "../../src/components/MdiCardTextOutline.vue";

test("MdiCardTextOutline snapshot", () => {
  const wrapper = mount(MdiCardTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
