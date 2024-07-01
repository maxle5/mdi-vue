
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeNotEqualVariant from "../../src/components/MdiCodeNotEqualVariant.vue";

test("MdiCodeNotEqualVariant snapshot", () => {
  const wrapper = mount(MdiCodeNotEqualVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
