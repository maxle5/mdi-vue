
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardOffOutline from "../../src/components/MdiCardOffOutline.vue";

test("MdiCardOffOutline snapshot", () => {
  const wrapper = mount(MdiCardOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
