
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisXYArrowLock from "../../src/components/MdiAxisXYArrowLock.vue";

test("MdiAxisXYArrowLock snapshot", () => {
  const wrapper = mount(MdiAxisXYArrowLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
