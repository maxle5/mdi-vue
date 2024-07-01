
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEscalatorUp from "../../src/components/MdiEscalatorUp.vue";

test("MdiEscalatorUp snapshot", () => {
  const wrapper = mount(MdiEscalatorUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
