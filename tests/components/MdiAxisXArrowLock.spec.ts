
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisXArrowLock from "../../src/components/MdiAxisXArrowLock.vue";

test("MdiAxisXArrowLock snapshot", () => {
  const wrapper = mount(MdiAxisXArrowLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
