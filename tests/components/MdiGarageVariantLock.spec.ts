
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGarageVariantLock from "../../src/components/MdiGarageVariantLock.vue";

test("MdiGarageVariantLock snapshot", () => {
  const wrapper = mount(MdiGarageVariantLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
