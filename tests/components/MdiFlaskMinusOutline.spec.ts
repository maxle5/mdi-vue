
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskMinusOutline from "../../src/components/MdiFlaskMinusOutline.vue";

test("MdiFlaskMinusOutline snapshot", () => {
  const wrapper = mount(MdiFlaskMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
