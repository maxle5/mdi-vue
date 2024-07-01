
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyAlert from "../../src/components/MdiKeyAlert.vue";

test("MdiKeyAlert snapshot", () => {
  const wrapper = mount(MdiKeyAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
