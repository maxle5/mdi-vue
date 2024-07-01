
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageAlert from "../../src/components/MdiMessageAlert.vue";

test("MdiMessageAlert snapshot", () => {
  const wrapper = mount(MdiMessageAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
