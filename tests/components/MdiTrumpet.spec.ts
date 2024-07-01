
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrumpet from "../../src/components/MdiTrumpet.vue";

test("MdiTrumpet snapshot", () => {
  const wrapper = mount(MdiTrumpet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
