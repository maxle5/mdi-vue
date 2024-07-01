
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanClock from "../../src/components/MdiFanClock.vue";

test("MdiFanClock snapshot", () => {
  const wrapper = mount(MdiFanClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
