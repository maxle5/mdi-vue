
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisYArrowLock from "../../src/components/MdiAxisYArrowLock.vue";

test("MdiAxisYArrowLock snapshot", () => {
  const wrapper = mount(MdiAxisYArrowLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
