
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskPlusOutline from "../../src/components/MdiFlaskPlusOutline.vue";

test("MdiFlaskPlusOutline snapshot", () => {
  const wrapper = mount(MdiFlaskPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
