
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireHydrantAlert from "../../src/components/MdiFireHydrantAlert.vue";

test("MdiFireHydrantAlert snapshot", () => {
  const wrapper = mount(MdiFireHydrantAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
