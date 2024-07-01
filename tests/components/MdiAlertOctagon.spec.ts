
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertOctagon from "../../src/components/MdiAlertOctagon.vue";

test("MdiAlertOctagon snapshot", () => {
  const wrapper = mount(MdiAlertOctagon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
