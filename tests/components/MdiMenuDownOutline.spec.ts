
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuDownOutline from "../../src/components/MdiMenuDownOutline.vue";

test("MdiMenuDownOutline snapshot", () => {
  const wrapper = mount(MdiMenuDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
