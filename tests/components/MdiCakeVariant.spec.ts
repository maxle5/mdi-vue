
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCakeVariant from "../../src/components/MdiCakeVariant.vue";

test("MdiCakeVariant snapshot", () => {
  const wrapper = mount(MdiCakeVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
