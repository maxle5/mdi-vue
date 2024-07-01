
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmptyRemoveOutline from "../../src/components/MdiFlaskEmptyRemoveOutline.vue";

test("MdiFlaskEmptyRemoveOutline snapshot", () => {
  const wrapper = mount(MdiFlaskEmptyRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
