
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskOffOutline from "../../src/components/MdiFlaskOffOutline.vue";

test("MdiFlaskOffOutline snapshot", () => {
  const wrapper = mount(MdiFlaskOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
