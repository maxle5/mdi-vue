
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyPlusCursor from "../../src/components/MdiMagnifyPlusCursor.vue";

test("MdiMagnifyPlusCursor snapshot", () => {
  const wrapper = mount(MdiMagnifyPlusCursor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
