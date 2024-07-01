
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontPlusOutline from "../../src/components/MdiStorefrontPlusOutline.vue";

test("MdiStorefrontPlusOutline snapshot", () => {
  const wrapper = mount(MdiStorefrontPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
