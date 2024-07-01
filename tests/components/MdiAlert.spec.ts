
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlert from "../../src/components/MdiAlert.vue";

test("MdiAlert snapshot", () => {
  const wrapper = mount(MdiAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
