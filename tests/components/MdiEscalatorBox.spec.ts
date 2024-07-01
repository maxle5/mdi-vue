
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEscalatorBox from "../../src/components/MdiEscalatorBox.vue";

test("MdiEscalatorBox snapshot", () => {
  const wrapper = mount(MdiEscalatorBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
