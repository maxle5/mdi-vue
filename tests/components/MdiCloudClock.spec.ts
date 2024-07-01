
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudClock from "../../src/components/MdiCloudClock.vue";

test("MdiCloudClock snapshot", () => {
  const wrapper = mount(MdiCloudClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
