
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnicornVariant from "../../src/components/MdiUnicornVariant.vue";

test("MdiUnicornVariant snapshot", () => {
  const wrapper = mount(MdiUnicornVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
