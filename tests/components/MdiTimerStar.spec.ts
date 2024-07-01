
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerStar from "../../src/components/MdiTimerStar.vue";

test("MdiTimerStar snapshot", () => {
  const wrapper = mount(MdiTimerStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
