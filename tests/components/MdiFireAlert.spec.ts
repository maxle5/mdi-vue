
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireAlert from "../../src/components/MdiFireAlert.vue";

test("MdiFireAlert snapshot", () => {
  const wrapper = mount(MdiFireAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
