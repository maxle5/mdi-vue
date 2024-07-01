
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudLockOpen from "../../src/components/MdiCloudLockOpen.vue";

test("MdiCloudLockOpen snapshot", () => {
  const wrapper = mount(MdiCloudLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
