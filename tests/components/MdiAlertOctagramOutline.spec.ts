
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertOctagramOutline from "../../src/components/MdiAlertOctagramOutline.vue";

test("MdiAlertOctagramOutline snapshot", () => {
  const wrapper = mount(MdiAlertOctagramOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
