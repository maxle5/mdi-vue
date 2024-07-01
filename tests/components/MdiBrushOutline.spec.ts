
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrushOutline from "../../src/components/MdiBrushOutline.vue";

test("MdiBrushOutline snapshot", () => {
  const wrapper = mount(MdiBrushOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
