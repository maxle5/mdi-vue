
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressAlert from "../../src/components/MdiProgressAlert.vue";

test("MdiProgressAlert snapshot", () => {
  const wrapper = mount(MdiProgressAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
