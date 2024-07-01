
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockPercentOpenVariant from "../../src/components/MdiLockPercentOpenVariant.vue";

test("MdiLockPercentOpenVariant snapshot", () => {
  const wrapper = mount(MdiLockPercentOpenVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
