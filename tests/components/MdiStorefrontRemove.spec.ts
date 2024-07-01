
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontRemove from "../../src/components/MdiStorefrontRemove.vue";

test("MdiStorefrontRemove snapshot", () => {
  const wrapper = mount(MdiStorefrontRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
