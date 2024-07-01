
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisZArrowLock from "../../src/components/MdiAxisZArrowLock.vue";

test("MdiAxisZArrowLock snapshot", () => {
  const wrapper = mount(MdiAxisZArrowLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
