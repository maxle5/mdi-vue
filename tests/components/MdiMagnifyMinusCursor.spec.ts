
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyMinusCursor from "../../src/components/MdiMagnifyMinusCursor.vue";

test("MdiMagnifyMinusCursor snapshot", () => {
  const wrapper = mount(MdiMagnifyMinusCursor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
