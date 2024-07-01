
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkewLess from "../../src/components/MdiSkewLess.vue";

test("MdiSkewLess snapshot", () => {
  const wrapper = mount(MdiSkewLess, {});
  expect(wrapper.html()).toMatchSnapshot();
});
