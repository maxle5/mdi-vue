
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebClock from "../../src/components/MdiWebClock.vue";

test("MdiWebClock snapshot", () => {
  const wrapper = mount(MdiWebClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
