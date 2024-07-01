
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImageMinusOutline from "../../src/components/MdiFileImageMinusOutline.vue";

test("MdiFileImageMinusOutline snapshot", () => {
  const wrapper = mount(MdiFileImageMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
