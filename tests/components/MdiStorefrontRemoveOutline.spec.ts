
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontRemoveOutline from "../../src/components/MdiStorefrontRemoveOutline.vue";

test("MdiStorefrontRemoveOutline snapshot", () => {
  const wrapper = mount(MdiStorefrontRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
