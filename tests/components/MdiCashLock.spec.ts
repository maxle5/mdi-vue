
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashLock from "../../src/components/MdiCashLock.vue";

test("MdiCashLock snapshot", () => {
  const wrapper = mount(MdiCashLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
