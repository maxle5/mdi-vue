
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSupervisorCircle from "../../src/components/MdiAccountSupervisorCircle.vue";

test("MdiAccountSupervisorCircle snapshot", () => {
  const wrapper = mount(MdiAccountSupervisorCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
