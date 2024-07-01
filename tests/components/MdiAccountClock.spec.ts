
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountClock from "../../src/components/MdiAccountClock.vue";

test("MdiAccountClock snapshot", () => {
  const wrapper = mount(MdiAccountClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
