
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewspaperVariantMultiple from "../../src/components/MdiNewspaperVariantMultiple.vue";

test("MdiNewspaperVariantMultiple snapshot", () => {
  const wrapper = mount(MdiNewspaperVariantMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
