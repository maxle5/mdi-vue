
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeLock from "../../src/components/MdiHomeLock.vue";

test("MdiHomeLock snapshot", () => {
  const wrapper = mount(MdiHomeLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
