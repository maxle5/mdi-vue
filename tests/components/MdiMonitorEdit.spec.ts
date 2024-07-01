
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorEdit from "../../src/components/MdiMonitorEdit.vue";

test("MdiMonitorEdit snapshot", () => {
  const wrapper = mount(MdiMonitorEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
