
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookClock from "../../src/components/MdiBookClock.vue";

test("MdiBookClock snapshot", () => {
  const wrapper = mount(MdiBookClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
