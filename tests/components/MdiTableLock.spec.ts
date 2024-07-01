
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableLock from "../../src/components/MdiTableLock.vue";

test("MdiTableLock snapshot", () => {
  const wrapper = mount(MdiTableLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
