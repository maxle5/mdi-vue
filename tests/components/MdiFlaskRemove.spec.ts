
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskRemove from "../../src/components/MdiFlaskRemove.vue";

test("MdiFlaskRemove snapshot", () => {
  const wrapper = mount(MdiFlaskRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
