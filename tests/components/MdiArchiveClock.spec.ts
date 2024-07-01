
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveClock from "../../src/components/MdiArchiveClock.vue";

test("MdiArchiveClock snapshot", () => {
  const wrapper = mount(MdiArchiveClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
