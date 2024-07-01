
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenVariant from "../../src/components/MdiLockOpenVariant.vue";

test("MdiLockOpenVariant snapshot", () => {
  const wrapper = mount(MdiLockOpenVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
