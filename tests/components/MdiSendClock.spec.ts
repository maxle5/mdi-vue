
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendClock from "../../src/components/MdiSendClock.vue";

test("MdiSendClock snapshot", () => {
  const wrapper = mount(MdiSendClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
