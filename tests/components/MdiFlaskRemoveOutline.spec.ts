
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskRemoveOutline from "../../src/components/MdiFlaskRemoveOutline.vue";

test("MdiFlaskRemoveOutline snapshot", () => {
  const wrapper = mount(MdiFlaskRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
