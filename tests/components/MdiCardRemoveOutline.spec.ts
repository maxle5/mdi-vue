
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardRemoveOutline from "../../src/components/MdiCardRemoveOutline.vue";

test("MdiCardRemoveOutline snapshot", () => {
  const wrapper = mount(MdiCardRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
