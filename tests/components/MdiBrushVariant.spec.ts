
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrushVariant from "../../src/components/MdiBrushVariant.vue";

test("MdiBrushVariant snapshot", () => {
  const wrapper = mount(MdiBrushVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
