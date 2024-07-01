
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWatchVibrate from "../../src/components/MdiWatchVibrate.vue";

test("MdiWatchVibrate snapshot", () => {
  const wrapper = mount(MdiWatchVibrate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
