
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReloadAlert from "../../src/components/MdiReloadAlert.vue";

test("MdiReloadAlert snapshot", () => {
  const wrapper = mount(MdiReloadAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
