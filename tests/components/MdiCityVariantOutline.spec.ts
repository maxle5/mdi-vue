
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCityVariantOutline from "../../src/components/MdiCityVariantOutline.vue";

test("MdiCityVariantOutline snapshot", () => {
  const wrapper = mount(MdiCityVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
