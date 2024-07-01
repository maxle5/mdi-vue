
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderClock from "../../src/components/MdiFolderClock.vue";

test("MdiFolderClock snapshot", () => {
  const wrapper = mount(MdiFolderClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
