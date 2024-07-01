
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSupervisor from "../../src/components/MdiAccountSupervisor.vue";

test("MdiAccountSupervisor snapshot", () => {
  const wrapper = mount(MdiAccountSupervisor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
