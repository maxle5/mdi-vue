
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableAlert from "../../src/components/MdiTableAlert.vue";

test("MdiTableAlert snapshot", () => {
  const wrapper = mount(MdiTableAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
