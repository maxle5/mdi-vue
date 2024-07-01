
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteClock from "../../src/components/MdiDeleteClock.vue";

test("MdiDeleteClock snapshot", () => {
  const wrapper = mount(MdiDeleteClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
