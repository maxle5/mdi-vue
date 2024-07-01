
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSupervisorCircleOutline from "../../src/components/MdiAccountSupervisorCircleOutline.vue";

test("MdiAccountSupervisorCircleOutline snapshot", () => {
  const wrapper = mount(MdiAccountSupervisorCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
