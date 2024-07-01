
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRestartAlert from "../../src/components/MdiRestartAlert.vue";

test("MdiRestartAlert snapshot", () => {
  const wrapper = mount(MdiRestartAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
