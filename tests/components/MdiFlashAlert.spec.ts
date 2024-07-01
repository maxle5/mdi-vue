
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashAlert from "../../src/components/MdiFlashAlert.vue";

test("MdiFlashAlert snapshot", () => {
  const wrapper = mount(MdiFlashAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
