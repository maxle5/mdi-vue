
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisArrowLock from "../../src/components/MdiAxisArrowLock.vue";

test("MdiAxisArrowLock snapshot", () => {
  const wrapper = mount(MdiAxisArrowLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
