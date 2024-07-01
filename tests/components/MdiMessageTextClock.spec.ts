
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageTextClock from "../../src/components/MdiMessageTextClock.vue";

test("MdiMessageTextClock snapshot", () => {
  const wrapper = mount(MdiMessageTextClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
