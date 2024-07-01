
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTurnstileOutline from "../../src/components/MdiTurnstileOutline.vue";

test("MdiTurnstileOutline snapshot", () => {
  const wrapper = mount(MdiTurnstileOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
