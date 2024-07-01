
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmptyRemove from "../../src/components/MdiFlaskEmptyRemove.vue";

test("MdiFlaskEmptyRemove snapshot", () => {
  const wrapper = mount(MdiFlaskEmptyRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
