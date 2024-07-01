
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerAlert from "../../src/components/MdiTimerAlert.vue";

test("MdiTimerAlert snapshot", () => {
  const wrapper = mount(MdiTimerAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
