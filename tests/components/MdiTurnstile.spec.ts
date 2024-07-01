
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTurnstile from "../../src/components/MdiTurnstile.vue";

test("MdiTurnstile snapshot", () => {
  const wrapper = mount(MdiTurnstile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
