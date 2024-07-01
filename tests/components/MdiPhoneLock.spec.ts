
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneLock from "../../src/components/MdiPhoneLock.vue";

test("MdiPhoneLock snapshot", () => {
  const wrapper = mount(MdiPhoneLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
