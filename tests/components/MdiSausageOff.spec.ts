
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSausageOff from "../../src/components/MdiSausageOff.vue";

test("MdiSausageOff snapshot", () => {
  const wrapper = mount(MdiSausageOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
