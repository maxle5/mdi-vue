
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardOutline from "../../src/components/MdiCardOutline.vue";

test("MdiCardOutline snapshot", () => {
  const wrapper = mount(MdiCardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
