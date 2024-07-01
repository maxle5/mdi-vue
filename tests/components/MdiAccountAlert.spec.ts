
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountAlert from "../../src/components/MdiAccountAlert.vue";

test("MdiAccountAlert snapshot", () => {
  const wrapper = mount(MdiAccountAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
