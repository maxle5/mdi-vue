
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileWordBoxOutline from "../../src/components/MdiFileWordBoxOutline.vue";

test("MdiFileWordBoxOutline snapshot", () => {
  const wrapper = mount(MdiFileWordBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
