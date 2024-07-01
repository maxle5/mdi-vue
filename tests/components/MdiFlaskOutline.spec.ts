
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskOutline from "../../src/components/MdiFlaskOutline.vue";

test("MdiFlaskOutline snapshot", () => {
  const wrapper = mount(MdiFlaskOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
