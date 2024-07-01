
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageRemove from "../../src/components/MdiImageRemove.vue";

test("MdiImageRemove snapshot", () => {
  const wrapper = mount(MdiImageRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
