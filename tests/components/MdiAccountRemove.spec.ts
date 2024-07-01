
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountRemove from "../../src/components/MdiAccountRemove.vue";

test("MdiAccountRemove snapshot", () => {
  const wrapper = mount(MdiAccountRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
