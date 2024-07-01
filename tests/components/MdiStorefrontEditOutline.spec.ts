
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontEditOutline from "../../src/components/MdiStorefrontEditOutline.vue";

test("MdiStorefrontEditOutline snapshot", () => {
  const wrapper = mount(MdiStorefrontEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
