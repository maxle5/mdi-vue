
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEscalatorDown from "../../src/components/MdiEscalatorDown.vue";

test("MdiEscalatorDown snapshot", () => {
  const wrapper = mount(MdiEscalatorDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
