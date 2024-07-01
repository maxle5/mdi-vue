
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerCog from "../../src/components/MdiTimerCog.vue";

test("MdiTimerCog snapshot", () => {
  const wrapper = mount(MdiTimerCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
