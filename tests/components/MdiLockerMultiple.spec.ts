
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockerMultiple from "../../src/components/MdiLockerMultiple.vue";

test("MdiLockerMultiple snapshot", () => {
  const wrapper = mount(MdiLockerMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
