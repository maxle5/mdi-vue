
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardRemove from "../../src/components/MdiCardRemove.vue";

test("MdiCardRemove snapshot", () => {
  const wrapper = mount(MdiCardRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
