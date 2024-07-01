
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNavigationVariant from "../../src/components/MdiNavigationVariant.vue";

test("MdiNavigationVariant snapshot", () => {
  const wrapper = mount(MdiNavigationVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
