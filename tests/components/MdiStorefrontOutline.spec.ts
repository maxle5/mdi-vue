
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontOutline from "../../src/components/MdiStorefrontOutline.vue";

test("MdiStorefrontOutline snapshot", () => {
  const wrapper = mount(MdiStorefrontOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
