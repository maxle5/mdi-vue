
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotEqualVariant from "../../src/components/MdiNotEqualVariant.vue";

test("MdiNotEqualVariant snapshot", () => {
  const wrapper = mount(MdiNotEqualVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
