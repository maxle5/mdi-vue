
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewspaperVariantMultipleOutline from "../../src/components/MdiNewspaperVariantMultipleOutline.vue";

test("MdiNewspaperVariantMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNewspaperVariantMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
