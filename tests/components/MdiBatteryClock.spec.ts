
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryClock from "../../src/components/MdiBatteryClock.vue";

test("MdiBatteryClock snapshot", () => {
  const wrapper = mount(MdiBatteryClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
