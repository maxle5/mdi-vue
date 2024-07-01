
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskRoundBottomEmptyOutline from "../../src/components/MdiFlaskRoundBottomEmptyOutline.vue";

test("MdiFlaskRoundBottomEmptyOutline snapshot", () => {
  const wrapper = mount(MdiFlaskRoundBottomEmptyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
