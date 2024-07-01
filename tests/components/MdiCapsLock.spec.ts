
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCapsLock from "../../src/components/MdiCapsLock.vue";

test("MdiCapsLock snapshot", () => {
  const wrapper = mount(MdiCapsLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
