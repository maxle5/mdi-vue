
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmptyOutline from "../../src/components/MdiFlaskEmptyOutline.vue";

test("MdiFlaskEmptyOutline snapshot", () => {
  const wrapper = mount(MdiFlaskEmptyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
