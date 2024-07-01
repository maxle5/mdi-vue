
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOpenBlankVariantOutline from "../../src/components/MdiBookOpenBlankVariantOutline.vue";

test("MdiBookOpenBlankVariantOutline snapshot", () => {
  const wrapper = mount(MdiBookOpenBlankVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
