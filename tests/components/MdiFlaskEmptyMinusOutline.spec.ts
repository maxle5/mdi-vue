
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmptyMinusOutline from "../../src/components/MdiFlaskEmptyMinusOutline.vue";

test("MdiFlaskEmptyMinusOutline snapshot", () => {
  const wrapper = mount(MdiFlaskEmptyMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
