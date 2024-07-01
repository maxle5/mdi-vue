
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClock from "../../src/components/MdiClock.vue";

test("MdiClock snapshot", () => {
  const wrapper = mount(MdiClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
