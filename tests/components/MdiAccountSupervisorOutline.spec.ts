
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSupervisorOutline from "../../src/components/MdiAccountSupervisorOutline.vue";

test("MdiAccountSupervisorOutline snapshot", () => {
  const wrapper = mount(MdiAccountSupervisorOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
