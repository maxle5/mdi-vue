
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImageMinus from "../../src/components/MdiFileImageMinus.vue";

test("MdiFileImageMinus snapshot", () => {
  const wrapper = mount(MdiFileImageMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
