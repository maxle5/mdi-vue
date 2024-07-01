
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRestoreAlert from "../../src/components/MdiRestoreAlert.vue";

test("MdiRestoreAlert snapshot", () => {
  const wrapper = mount(MdiRestoreAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
