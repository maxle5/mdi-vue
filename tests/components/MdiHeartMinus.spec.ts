
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartMinus from "../../src/components/MdiHeartMinus.vue";

test("MdiHeartMinus snapshot", () => {
  const wrapper = mount(MdiHeartMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
