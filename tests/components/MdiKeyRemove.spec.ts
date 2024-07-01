
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyRemove from "../../src/components/MdiKeyRemove.vue";

test("MdiKeyRemove snapshot", () => {
  const wrapper = mount(MdiKeyRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
