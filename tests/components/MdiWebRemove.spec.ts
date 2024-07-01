
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebRemove from "../../src/components/MdiWebRemove.vue";

test("MdiWebRemove snapshot", () => {
  const wrapper = mount(MdiWebRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
