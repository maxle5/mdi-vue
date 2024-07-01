
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewspaperVariantOutline from "../../src/components/MdiNewspaperVariantOutline.vue";

test("MdiNewspaperVariantOutline snapshot", () => {
  const wrapper = mount(MdiNewspaperVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
