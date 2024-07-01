
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmptyPlusOutline from "../../src/components/MdiFlaskEmptyPlusOutline.vue";

test("MdiFlaskEmptyPlusOutline snapshot", () => {
  const wrapper = mount(MdiFlaskEmptyPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
