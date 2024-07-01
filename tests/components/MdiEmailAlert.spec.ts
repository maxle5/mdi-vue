
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailAlert from "../../src/components/MdiEmailAlert.vue";

test("MdiEmailAlert snapshot", () => {
  const wrapper = mount(MdiEmailAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
